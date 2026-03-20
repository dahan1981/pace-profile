import { AssessmentResult } from '@/lib/scoring';
import { QuestionnaireType } from '@/data/questions';
import { isSupabaseConfigured, supabase } from '@/lib/supabase';

export type AccountRole = 'user' | 'company';

export interface AccountRecord {
  id: string;
  name: string;
  email: string;
  password: string;
  role: AccountRole;
  companyName?: string;
  isAdmin?: boolean;
  createdAt: string;
}

export interface SessionRecord {
  email: string;
}

export interface AssessmentReportRecord {
  id: string;
  submittedAt: string;
  questionnaireType: QuestionnaireType;
  accountEmail: string;
  accountName: string;
  result: AssessmentResult;
}

const ACCOUNTS_KEY = 'pace_accounts';
const SESSION_KEY = 'pace_current_session';
const ADMINS_KEY = 'pace_admin_emails';
const REPORTS_KEY = 'pace_assessment_reports';
const LAST_RESULT_KEY = 'pace_last_result';
const DEFAULT_ADMIN_EMAILS = ['equipejoaodahan@gmail.com'];

const readJson = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;

  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key: string, value: unknown) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const normalizeEmail = (email: string) => email.trim().toLowerCase();

const getLocalAccounts = () => readJson<AccountRecord[]>(ACCOUNTS_KEY, []);
const saveLocalAccounts = (accounts: AccountRecord[]) => writeJson(ACCOUNTS_KEY, accounts);

const getLocalSession = () => readJson<SessionRecord | null>(SESSION_KEY, null);
const setLocalSession = (email: string) => writeJson(SESSION_KEY, { email: normalizeEmail(email) } satisfies SessionRecord);
const clearLocalSession = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
};

const getLocalAdminEmails = () => {
  const storedAdmins = readJson<string[]>(ADMINS_KEY, []);
  return Array.from(new Set([...DEFAULT_ADMIN_EMAILS, ...storedAdmins].map(normalizeEmail)));
};

const saveLocalAdminEmails = (emails: string[]) => {
  const uniqueEmails = Array.from(new Set(emails.map(normalizeEmail).filter(Boolean)));
  writeJson(ADMINS_KEY, uniqueEmails);
};

const getLocalReports = () => readJson<AssessmentReportRecord[]>(REPORTS_KEY, []);
const saveLocalReports = (reports: AssessmentReportRecord[]) => writeJson(REPORTS_KEY, reports);

const syncLastResult = (result: AssessmentResult) => writeJson(LAST_RESULT_KEY, result);

const mapSupabaseProfile = (profile: {
  id: string;
  full_name: string;
  email: string;
  role: AccountRole;
  company_name: string | null;
  is_admin: boolean;
  created_at: string;
}): AccountRecord => ({
  id: profile.id,
  name: profile.full_name,
  email: profile.email,
  password: '',
  role: profile.role,
  companyName: profile.company_name ?? undefined,
  isAdmin: profile.is_admin,
  createdAt: profile.created_at,
});

export const registerAccount = async (input: Omit<AccountRecord, 'id' | 'createdAt' | 'isAdmin'>) => {
  const email = normalizeEmail(input.email);

  if (!isSupabaseConfigured || !supabase) {
    const accounts = getLocalAccounts();
    if (accounts.some((account) => normalizeEmail(account.email) === email)) {
      throw new Error('Já existe uma conta com esse e-mail.');
    }

    const account: AccountRecord = {
      ...input,
      email,
      isAdmin: getLocalAdminEmails().includes(email),
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    accounts.unshift(account);
    saveLocalAccounts(accounts);
    return account;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password: input.password,
    options: {
      emailRedirectTo: undefined,
      data: {
        full_name: input.name,
        role: input.role,
        company_name: input.companyName ?? null,
      },
    },
  });

  if (error) throw new Error(error.message);
  if (!data.user) throw new Error('Não foi possível criar a conta.');

  const isAdmin = DEFAULT_ADMIN_EMAILS.includes(email);

  const { error: profileError } = await supabase.from('profiles').upsert({
    id: data.user.id,
    full_name: input.name,
    email,
    role: input.role,
    company_name: input.companyName ?? null,
    is_admin: isAdmin,
  });

  if (profileError) throw new Error(profileError.message);

  return {
    id: data.user.id,
    name: input.name,
    email,
    password: '',
    role: input.role,
    companyName: input.companyName,
    isAdmin,
    createdAt: new Date().toISOString(),
  };
};

export const loginAccount = async (email: string, password: string) => {
  const normalized = normalizeEmail(email);

  if (!isSupabaseConfigured || !supabase) {
    const account = getLocalAccounts().find((item) => normalizeEmail(item.email) === normalized);
    if (!account || account.password !== password) {
      throw new Error('E-mail ou senha inválidos.');
    }

    setLocalSession(account.email);
    return { ...account, isAdmin: getLocalAdminEmails().includes(account.email) };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalized,
    password,
  });

  if (error) throw new Error(error.message);
  if (!data.user) throw new Error('Não foi possível iniciar sessão.');

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('id, full_name, email, role, company_name, is_admin, created_at')
    .eq('id', data.user.id)
    .single();

  if (profileError || !profile) throw new Error(profileError?.message ?? 'Perfil não encontrado.');
  return mapSupabaseProfile(profile);
};

export const getCurrentAccount = async (): Promise<AccountRecord | null> => {
  if (!isSupabaseConfigured || !supabase) {
    const session = getLocalSession();
    if (!session) return null;

    const account = getLocalAccounts().find((item) => normalizeEmail(item.email) === session.email) ?? null;
    return account ? { ...account, isAdmin: getLocalAdminEmails().includes(account.email) } : null;
  }

  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;
  if (!user) return null;

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('id, full_name, email, role, company_name, is_admin, created_at')
    .eq('id', user.id)
    .single();

  if (error || !profile) return null;
  return mapSupabaseProfile(profile);
};

export const clearCurrentSession = async () => {
  if (!isSupabaseConfigured || !supabase) {
    clearLocalSession();
    return;
  }

  await supabase.auth.signOut();
};

export const currentUserCanAccessAdmin = async () => {
  const account = await getCurrentAccount();
  return Boolean(account?.isAdmin || DEFAULT_ADMIN_EMAILS.includes(normalizeEmail(account?.email ?? '')));
};

export const getAccounts = async (): Promise<AccountRecord[]> => {
  if (!isSupabaseConfigured || !supabase) {
    return getLocalAccounts().map((account) => ({
      ...account,
      isAdmin: getLocalAdminEmails().includes(account.email),
    }));
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('id, full_name, email, role, company_name, is_admin, created_at')
    .order('created_at', { ascending: false });

  if (error || !data) throw new Error(error?.message ?? 'Não foi possível carregar as contas.');
  return data.map(mapSupabaseProfile);
};

export const getAdminEmails = async (): Promise<string[]> => {
  if (!isSupabaseConfigured || !supabase) {
    return getLocalAdminEmails();
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('email')
    .eq('is_admin', true);

  if (error || !data) throw new Error(error?.message ?? 'Não foi possível carregar os admins.');
  return Array.from(new Set([...DEFAULT_ADMIN_EMAILS, ...data.map((item) => normalizeEmail(item.email))]));
};

export const grantAdminAccess = async (email: string) => {
  const normalized = normalizeEmail(email);

  if (!isSupabaseConfigured || !supabase) {
    const admins = new Set(getLocalAdminEmails());
    admins.add(normalized);
    saveLocalAdminEmails(Array.from(admins));
    return;
  }

  const { error } = await supabase
    .from('profiles')
    .update({ is_admin: true })
    .eq('email', normalized);

  if (error) throw new Error(error.message);
};

export const revokeAdminAccess = async (email: string) => {
  const normalized = normalizeEmail(email);
  if (DEFAULT_ADMIN_EMAILS.includes(normalized)) return;

  if (!isSupabaseConfigured || !supabase) {
    const admins = getLocalAdminEmails().filter((adminEmail) => adminEmail !== normalized);
    saveLocalAdminEmails(admins);
    return;
  }

  const { error } = await supabase
    .from('profiles')
    .update({ is_admin: false })
    .eq('email', normalized);

  if (error) throw new Error(error.message);
};

export const saveReport = async (report: Omit<AssessmentReportRecord, 'id' | 'submittedAt'>) => {
  syncLastResult(report.result);

  if (!isSupabaseConfigured || !supabase) {
    const reports = getLocalReports();
    const nextReport: AssessmentReportRecord = {
      ...report,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
    };

    reports.unshift(nextReport);
    saveLocalReports(reports);
    return nextReport;
  }

  const account = await getCurrentAccount();
  if (!account) throw new Error('Conta não encontrada para salvar o relatório.');

  const { data, error } = await supabase
    .from('assessment_reports')
    .insert({
      user_id: account.id,
      questionnaire_type: report.questionnaireType,
      primary_profile: report.result.primaryProfile,
      secondary_profile: report.result.secondaryProfile,
      total_answers: report.result.totalAnswers,
      result: report.result,
    })
    .select('id, submitted_at')
    .single();

  if (error || !data) throw new Error(error?.message ?? 'Não foi possível salvar o relatório.');

  return {
    ...report,
    id: data.id,
    submittedAt: data.submitted_at,
  };
};

export const getReports = async (): Promise<AssessmentReportRecord[]> => {
  if (!isSupabaseConfigured || !supabase) {
    return getLocalReports();
  }

  const { data, error } = await supabase
    .from('assessment_reports')
    .select(`
      id,
      submitted_at,
      questionnaire_type,
      result,
      profiles:user_id (
        email,
        full_name,
        company_name,
        role
      )
    `)
    .order('submitted_at', { ascending: false });

  if (error || !data) throw new Error(error?.message ?? 'Não foi possível carregar os relatórios.');

  return data.map((item: any) => ({
    id: item.id,
    submittedAt: item.submitted_at,
    questionnaireType: item.questionnaire_type,
    accountEmail: item.profiles?.email ?? '',
    accountName: item.profiles?.role === 'company' && item.profiles?.company_name
      ? item.profiles.company_name
      : item.profiles?.full_name ?? '',
    result: item.result as AssessmentResult,
  }));
};

export const getReportsForEmail = async (email: string) => {
  const normalized = normalizeEmail(email);
  const reports = await getReports();
  return reports.filter((report) => normalizeEmail(report.accountEmail) === normalized);
};

export const getLastResult = () => readJson<AssessmentResult | null>(LAST_RESULT_KEY, null);

import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { clearCurrentSession, currentUserCanAccessAdmin, getAccounts, getAdminEmails, getReports, grantAdminAccess, revokeAdminAccess } from '@/lib/auth';
import { Building2, Download, FileText, LogOut, Search, ShieldCheck, Users } from 'lucide-react';

const csvEscape = (value: string | number) => `"${String(value ?? '').replace(/"/g, '""')}"`;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [accounts, setAccounts] = useState<Awaited<ReturnType<typeof getAccounts>>>([]);
  const [adminEmails, setAdminEmails] = useState<string[]>([]);
  const [reports, setReports] = useState<Awaited<ReturnType<typeof getReports>>>([]);

  useEffect(() => {
    const loadAdminData = async () => {
      if (!(await currentUserCanAccessAdmin())) {
        navigate('/login');
        return;
      }

      setAccounts(await getAccounts());
      setAdminEmails(await getAdminEmails());
      setReports(await getReports());
    };

    void loadAdminData();
  }, [navigate]);

  const filteredReports = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return reports;

    return reports.filter((report) =>
      [report.accountName, report.accountEmail, report.questionnaireType, report.result.primaryProfile]
        .join(' ')
        .toLowerCase()
        .includes(term),
    );
  }, [query, reports]);

  const reportSummary = useMemo(() => {
    return {
      total: reports.length,
      uniqueAccounts: new Set(reports.map((report) => report.accountEmail)).size,
      admins: adminEmails.length,
      companies: accounts.filter((account) => account.role === 'company').length,
    };
  }, [accounts, adminEmails, reports]);

  const exportReports = () => {
    if (filteredReports.length === 0) {
      window.alert('Nao ha relatorios para exportar com esse filtro.');
      return;
    }

    const maxAnswers = filteredReports.reduce((highest, report) => Math.max(highest, report.answers.length), 0);
    const scoreColumns = ['propulsor', 'articulador', 'consolidador', 'estrategista'];
    const headers = [
      'Nome',
      'Email',
      'Questionario',
      'Enviado em',
      'Perfil principal',
      'Perfil secundario',
      'Total de respostas',
      ...scoreColumns.map((column) => `${column} (%)`),
      ...Array.from({ length: maxAnswers }, (_, index) => `Pergunta ${index + 1}`),
      ...Array.from({ length: maxAnswers }, (_, index) => `Resposta ${index + 1}`),
      ...Array.from({ length: maxAnswers }, (_, index) => `Letra ${index + 1}`),
    ];

    const rows = filteredReports.map((report) => {
      const scoreMap = Object.fromEntries(report.result.scores.map((score) => [score.key, score.percentage]));
      const orderedAnswers = [...report.answers].sort((left, right) => left.questionId - right.questionId);

      return [
        report.accountName,
        report.accountEmail,
        report.questionnaireType,
        new Date(report.submittedAt).toLocaleString('pt-BR'),
        report.result.primaryProfile,
        report.result.secondaryProfile,
        report.result.totalAnswers,
        ...scoreColumns.map((column) => scoreMap[column] ?? ''),
        ...Array.from({ length: maxAnswers }, (_, index) => orderedAnswers[index]?.questionText ?? ''),
        ...Array.from({ length: maxAnswers }, (_, index) => orderedAnswers[index]?.selectedText ?? ''),
        ...Array.from({ length: maxAnswers }, (_, index) => orderedAnswers[index]?.selectedLetter ?? ''),
      ];
    });

    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => csvEscape(cell)).join(';'))
      .join('\n');

    const blob = new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);

    link.href = url;
    link.download = `relatorios-pace-${date}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(12,33,84,0.1),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(199,45,62,0.1),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)]">
      <nav className="border-b border-white/70 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Brand title="PACE ADMIN" iconClassName="h-7 w-7" />
            <span className="rounded-full bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive">Administrador</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
              await clearCurrentSession();
              navigate('/');
            }}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </nav>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
            <CardContent className="p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">Controle geral</div>
              <h1 className="mt-2 font-display text-4xl font-bold text-slate-950">Relatorios, acessos e contas em um so lugar.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Este painel mostra quem respondeu, qual foi o perfil predominante e quais contas tem permissao administrativa para acessar os relatorios.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Relatorios salvos', reportSummary.total.toString()],
              ['Contas com resposta', reportSummary.uniqueAccounts.toString()],
              ['Admins liberados', reportSummary.admins.toString()],
              ['Empresas cadastradas', reportSummary.companies.toString()],
            ].map(([label, value]) => (
              <Card key={label} className="border-white/80 bg-white/88 shadow-lg shadow-slate-200/40">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
                  <div className="mt-2 text-3xl font-bold text-slate-950">{value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Tabs defaultValue="relatorios" className="space-y-6">
          <TabsList className="rounded-2xl bg-white/88 p-1 shadow-sm">
            <TabsTrigger value="relatorios" className="gap-2 rounded-xl"><FileText className="h-4 w-4" />Relatorios</TabsTrigger>
            <TabsTrigger value="acessos" className="gap-2 rounded-xl"><ShieldCheck className="h-4 w-4" />Acessos</TabsTrigger>
            <TabsTrigger value="contas" className="gap-2 rounded-xl"><Users className="h-4 w-4" />Contas</TabsTrigger>
            <TabsTrigger value="visao" className="gap-2 rounded-xl"><Building2 className="h-4 w-4" />Visao geral</TabsTrigger>
          </TabsList>

          <TabsContent value="relatorios" className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative max-w-md flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por nome, e-mail, tipo ou perfil..."
                  className="rounded-xl bg-white pl-9"
                />
              </div>

              <Button onClick={exportReports} disabled={filteredReports.length === 0} className="gap-2 rounded-xl shadow-lg shadow-primary/20">
                <Download className="h-4 w-4" />
                Baixar planilha CSV
              </Button>
            </div>

            <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
              <CardHeader>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <CardTitle>Relatorios recebidos</CardTitle>
                  <div className="text-sm text-slate-500">
                    A exportacao inclui dados principais e todas as respostas salvas.
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {filteredReports.length === 0 ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-6 text-sm text-slate-500">
                    Nenhum relatorio encontrado com esse filtro.
                  </div>
                ) : (
                  filteredReports.map((report) => (
                    <div key={report.id} className="rounded-2xl bg-slate-50 px-4 py-4">
                      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <div className="text-sm font-semibold text-slate-950">{report.accountName}</div>
                          <div className="text-xs text-slate-500">{report.accountEmail}</div>
                        </div>
                        <div className="text-sm text-slate-600">
                          {report.questionnaireType} - {new Date(report.submittedAt).toLocaleString('pt-BR')}
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {report.result.scores.slice(0, 2).map((score) => (
                          <span key={score.key} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                            {score.name}: {score.percentage}%
                          </span>
                        ))}
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                          Respostas salvas: {report.answers.length}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="acessos">
            <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
              <CardHeader>
                <CardTitle>Permissoes administrativas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {accounts.length === 0 ? (
                  <div className="rounded-2xl bg-slate-50 px-4 py-6 text-sm text-slate-500">
                    Ainda nao existem contas cadastradas.
                  </div>
                ) : (
                  accounts.map((account) => {
                    const isAdmin = adminEmails.includes(account.email);
                    return (
                      <div key={account.id} className="flex flex-col gap-3 rounded-2xl bg-slate-50 px-4 py-4 md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="text-sm font-semibold text-slate-950">{account.name}</div>
                          <div className="text-xs text-slate-500">{account.email}</div>
                        </div>
                        <Button
                          variant={isAdmin ? 'outline' : 'default'}
                          size="sm"
                          className="rounded-xl"
                          onClick={async () => {
                            if (isAdmin) {
                              await revokeAdminAccess(account.email);
                            } else {
                              await grantAdminAccess(account.email);
                            }
                            setAdminEmails(await getAdminEmails());
                            setAccounts(await getAccounts());
                          }}
                        >
                          {isAdmin ? 'Remover admin' : 'Liberar admin'}
                        </Button>
                      </div>
                    );
                  })
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contas">
            <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
              <CardHeader>
                <CardTitle>Contas cadastradas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {accounts.map((account) => (
                  <div key={account.id} className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-950">{account.name}</div>
                        <div className="text-xs text-slate-500">{account.email}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                          {account.role === 'company' ? 'Empresa' : 'Pessoa fisica'}
                        </span>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                          Criada em {new Date(account.createdAt).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visao">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
                <CardHeader><CardTitle>Tipos de conta</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    Pessoa fisica: {accounts.filter((account) => account.role === 'user').length}
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    Empresa: {accounts.filter((account) => account.role === 'company').length}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
                <CardHeader><CardTitle>Indicadores rapidos</CardTitle></CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    Relatorios com perfil principal definido: {reports.filter((report) => report.result.primaryProfile).length}
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
                    Acesso admin pronto para voce liberar outras contas quando quiser.
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

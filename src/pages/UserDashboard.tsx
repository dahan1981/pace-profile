import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Brand from '@/components/Brand';
import ProfileMark from '@/components/ProfileMark';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PROFILES } from '@/data/profiles';
import { QUESTIONNAIRES } from '@/data/questions';
import { clearCurrentSession, getCurrentAccount, getReportsForEmail } from '@/lib/auth';
import { downloadResultPdf } from '@/lib/pdf';
import { AssessmentResult } from '@/lib/scoring';
import { BarChart3, Clock, Download, FileText, LogOut, PlayCircle, User } from 'lucide-react';

const UserDashboard = () => {
  const [lastResult, setLastResult] = useState<AssessmentResult | null>(null);
  const [history, setHistory] = useState<ReturnType<typeof getReportsForEmail>>([]);
  const [accountName, setAccountName] = useState('Sua conta');
  const navigate = useNavigate();

  useEffect(() => {
    const loadDashboard = async () => {
      const account = await getCurrentAccount();

      if (!account) {
        navigate('/login');
        return;
      }

      const reports = await getReportsForEmail(account.email);
      setHistory(reports);
      setLastResult(reports[0]?.result ?? null);
      setAccountName(account.name);
    };

    void loadDashboard();
  }, [navigate]);

  const primary = lastResult ? PROFILES[lastResult.primaryProfile] : null;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(12,33,84,0.1),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(199,45,62,0.1),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)]">
      <nav className="border-b border-white/70 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Brand iconClassName="h-7 w-7" />
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">Pessoa física</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              {accountName}
            </Button>
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
        </div>
      </nav>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
            <CardContent className="p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">Seu espaço</div>
              <h1 className="mt-2 font-display text-4xl font-bold text-slate-950">Acompanhe sua evolução sem esforço.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Aqui você começa novas avaliações, revisita seus resultados e acompanha sua leitura comportamental com mais clareza.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ['Avaliações', Object.values(QUESTIONNAIRES).length.toString()],
                  ['Resultados salvos', history.length.toString()],
                  ['Último perfil', primary?.name ?? 'Ainda não definido'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {lastResult && primary ? (
            <Card className="overflow-hidden border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
              <div className="h-2" style={{ backgroundColor: primary.color }} />
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <ProfileMark profile={primary} size="md" />
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Último resultado</div>
                    <h2 className="mt-2 font-display text-3xl font-bold" style={{ color: primary.color }}>
                      {primary.name}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">{lastResult.scores[0].percentage}% de predominância</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{primary.shortDescription}</p>
                <div className="mt-6 flex gap-2">
                  <Link to="/resultado">
                    <Button variant="outline" size="sm" className="gap-2 rounded-xl bg-white">
                      <BarChart3 className="h-4 w-4" />
                      Ver detalhes
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    onClick={() => lastResult && downloadResultPdf(lastResult)}
                    className="gap-2 rounded-xl shadow-lg shadow-primary/20"
                  >
                    <Download className="h-4 w-4" />
                    PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
              <CardContent className="flex h-full flex-col justify-center p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">Primeiro passo</div>
                <h2 className="mt-2 font-display text-3xl font-bold text-slate-950">Você ainda não tem um resultado salvo.</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Faça sua primeira avaliação para destravar seu painel com devolutiva, histórico e leitura completa do perfil.
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {Object.values(QUESTIONNAIRES).map((questionnaire) => (
            <Card key={questionnaire.type} className="border-white/80 bg-white/88 shadow-lg shadow-slate-200/40 transition-transform hover:-translate-y-1">
              <Link to={`/avaliacao?type=${questionnaire.type}`}>
                <CardContent className="p-6">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <PlayCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">{questionnaire.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{questionnaire.description}</p>
                  <div className="mt-4 text-sm font-medium text-primary">Começar avaliação</div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5" />
              Histórico de avaliações
            </CardTitle>
          </CardHeader>
          <CardContent>
            {history.length === 0 ? (
              <div className="py-10 text-center text-muted-foreground">
                <FileText className="mx-auto mb-3 h-10 w-10 opacity-40" />
                <p>Nenhuma avaliação realizada ainda.</p>
                <p className="mt-1 text-sm">Assim que você concluir a primeira, ela aparece aqui.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map((entry) => {
                  const profile = PROFILES[entry.result.primaryProfile];
                  return (
                    <div key={entry.id} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4">
                      <div className="flex items-center gap-4">
                        <ProfileMark profile={profile} size="sm" />
                        <div>
                          <p className="text-sm font-semibold text-slate-950">{profile.name} - {entry.result.scores[0].percentage}%</p>
                          <p className="text-xs text-slate-500">
                            {QUESTIONNAIRES[entry.questionnaireType]?.title} - {new Date(entry.submittedAt).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1 rounded-xl">
                        <BarChart3 className="h-3 w-3" />
                        Ver
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { QUESTIONNAIRES } from '@/data/questions';
import { PROFILES } from '@/data/profiles';
import { AssessmentResult } from '@/lib/scoring';
import { PlayCircle, Clock, FileText, Download, LogOut, BarChart3, User } from 'lucide-react';

const UserDashboard = () => {
  const [lastResult, setLastResult] = useState<AssessmentResult | null>(null);
  const [history, setHistory] = useState<{ date: string; type: string; result: AssessmentResult }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const r = localStorage.getItem('pace_last_result');
    if (r) setLastResult(JSON.parse(r));
    const h = JSON.parse(localStorage.getItem('pace_history') || '[]');
    setHistory(h);
  }, []);

  const primary = lastResult ? PROFILES[lastResult.primaryProfile] : null;

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-primary">MÉTODO PACE</span>
            <span className="text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">Pessoa Física</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" /> Meu Perfil
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="gap-2">
              <LogOut className="h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="font-display text-2xl md:text-3xl font-bold">Bem-vindo(a) 👋</h1>
          <p className="text-muted-foreground mt-1">Gerencie suas avaliações do Método PACE.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.values(QUESTIONNAIRES).map(q => (
            <Card key={q.type} className="hover:shadow-md transition-shadow cursor-pointer group">
              <Link to={`/avaliacao?type=${q.type}`}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <PlayCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{q.title}</h3>
                    <p className="text-xs text-muted-foreground">40 perguntas</p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Last Result */}
        {lastResult && primary && (
          <Card className="mb-8 overflow-hidden" style={{ borderLeft: `4px solid ${primary.color}` }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{primary.emoji}</span>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Último resultado</div>
                    <h3 className="font-display text-xl font-bold" style={{ color: primary.color }}>{primary.name}</h3>
                    <p className="text-sm text-muted-foreground">{lastResult.scores[0].percentage}% predominante</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link to="/resultado">
                    <Button variant="outline" size="sm" className="gap-2">
                      <BarChart3 className="h-4 w-4" /> Ver detalhes
                    </Button>
                  </Link>
                  <Button size="sm" className="gap-2">
                    <Download className="h-4 w-4" /> PDF
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5" /> Histórico de Avaliações
            </CardTitle>
          </CardHeader>
          <CardContent>
            {history.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-10 w-10 mx-auto mb-3 opacity-40" />
                <p>Nenhuma avaliação realizada ainda.</p>
                <p className="text-sm mt-1">Inicie sua primeira avaliação acima.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map((h, i) => {
                  const p = PROFILES[h.result.primaryProfile];
                  return (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{p.emoji}</span>
                        <div>
                          <p className="text-sm font-medium">{p.name} — {h.result.scores[0].percentage}%</p>
                          <p className="text-xs text-muted-foreground">
                            {QUESTIONNAIRES[h.type as keyof typeof QUESTIONNAIRES]?.title} • {new Date(h.date).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <BarChart3 className="h-3 w-3" /> Ver
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

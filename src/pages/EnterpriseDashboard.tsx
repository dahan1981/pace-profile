import { useNavigate } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { BarChart3, CheckCircle, Clock, CreditCard, Download, Link as LinkIcon, LogOut, Send, UserPlus, Users } from 'lucide-react';

const mockTeamData = [
  { name: 'Propulsor', value: 35, color: 'hsl(0, 84%, 60%)' },
  { name: 'Articulador', value: 28, color: 'hsl(38, 92%, 50%)' },
  { name: 'Consolidador', value: 22, color: 'hsl(142, 72%, 40%)' },
  { name: 'Estrategista', value: 15, color: 'hsl(215, 80%, 50%)' },
];

const mockCollaborators = [
  { id: 1, name: 'Maria Silva', email: 'maria@empresa.com', status: 'completed', profile: 'Propulsor', percentage: 42 },
  { id: 2, name: 'João Santos', email: 'joao@empresa.com', status: 'completed', profile: 'Estrategista', percentage: 38 },
  { id: 3, name: 'Ana Costa', email: 'ana@empresa.com', status: 'pending', profile: null, percentage: null },
  { id: 4, name: 'Pedro Lima', email: 'pedro@empresa.com', status: 'pending', profile: null, percentage: null },
  { id: 5, name: 'Carla Oliveira', email: 'carla@empresa.com', status: 'completed', profile: 'Articulador', percentage: 35 },
];

const EnterpriseDashboard = () => {
  const navigate = useNavigate();
  const totalCredits = 50;
  const usedCredits = 12;
  const availableCredits = totalCredits - usedCredits;
  const completedCount = mockCollaborators.filter((collaborator) => collaborator.status === 'completed').length;
  const pendingCount = mockCollaborators.filter((collaborator) => collaborator.status === 'pending').length;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(12,33,84,0.1),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(199,45,62,0.1),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)]">
      <nav className="border-b border-white/70 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Brand iconClassName="h-7 w-7" />
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">Empresarial</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground md:block">Empresa Demo LTDA</span>
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="gap-2">
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
            <CardContent className="p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">Painel empresarial</div>
              <h1 className="mt-2 font-display text-4xl font-bold text-slate-950">Uma visão clara da equipe, sem atrito operacional.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Convide colaboradores, acompanhe a taxa de conclusão e visualize a distribuição dos perfis de forma rápida e apresentável.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ['Créditos disponíveis', availableCredits.toString()],
                  ['Avaliações concluídas', completedCount.toString()],
                  ['Pendências abertas', pendingCount.toString()],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-950">{value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Uso do pacote</div>
                  <h2 className="mt-2 font-display text-3xl font-bold text-slate-950">{usedCredits}/{totalCredits}</h2>
                </div>
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <CreditCard className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Você ainda tem margem para convidar mais pessoas sem gerar complexidade na operação.
              </p>
              <Progress value={(usedCredits / totalCredits) * 100} className="mt-6 h-3" />
              <div className="mt-6 flex gap-2">
                <Button className="gap-2 rounded-xl shadow-lg shadow-primary/20">
                  <CreditCard className="h-4 w-4" />
                  Comprar mais créditos
                </Button>
                <Button variant="outline" className="gap-2 rounded-xl bg-white">
                  <Download className="h-4 w-4" />
                  Exportar dados
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="equipe" className="space-y-6">
          <TabsList className="rounded-2xl bg-white/88 p-1 shadow-sm">
            <TabsTrigger value="equipe" className="gap-2 rounded-xl"><Users className="h-4 w-4" />Equipe</TabsTrigger>
            <TabsTrigger value="relatorios" className="gap-2 rounded-xl"><BarChart3 className="h-4 w-4" />Relatórios</TabsTrigger>
            <TabsTrigger value="pacote" className="gap-2 rounded-xl"><CreditCard className="h-4 w-4" />Pacote</TabsTrigger>
          </TabsList>

          <TabsContent value="equipe" className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2 rounded-xl"><UserPlus className="h-4 w-4" />Adicionar colaborador</Button>
              <Button variant="outline" className="gap-2 rounded-xl bg-white"><LinkIcon className="h-4 w-4" />Gerar link</Button>
              <Button variant="outline" className="gap-2 rounded-xl bg-white"><Send className="h-4 w-4" />Enviar convites</Button>
              <Button variant="outline" className="gap-2 rounded-xl bg-white"><Download className="h-4 w-4" />Exportar</Button>
            </div>

            <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px]">
                    <thead>
                      <tr className="border-b bg-slate-50">
                        <th className="p-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Colaborador</th>
                        <th className="p-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">E-mail</th>
                        <th className="p-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Status</th>
                        <th className="p-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Perfil</th>
                        <th className="p-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockCollaborators.map((collaborator) => (
                        <tr key={collaborator.id} className="border-b last:border-0 hover:bg-slate-50/70">
                          <td className="p-4 text-sm font-semibold text-slate-950">{collaborator.name}</td>
                          <td className="p-4 text-sm text-slate-500">{collaborator.email}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                              collaborator.status === 'completed' ? 'bg-consolidador/10 text-consolidador' : 'bg-secondary/10 text-secondary'
                            }`}>
                              {collaborator.status === 'completed' ? <><CheckCircle className="h-3 w-3" />Concluído</> : <><Clock className="h-3 w-3" />Pendente</>}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-slate-700">
                            {collaborator.profile ? `${collaborator.profile} (${collaborator.percentage}%)` : '—'}
                          </td>
                          <td className="p-4">
                            {collaborator.status === 'completed' ? (
                              <Button variant="ghost" size="sm" className="rounded-xl text-xs">Ver devolutiva</Button>
                            ) : (
                              <Button variant="ghost" size="sm" className="rounded-xl text-xs">Reenviar</Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="relatorios">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
                <CardHeader><CardTitle>Distribuição dos perfis</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart data={mockTeamData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" unit="%" />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                        {mockTeamData.map((entry, index) => (
                          <Cell key={index} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
                <CardHeader><CardTitle>Taxa de conclusão</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">{Math.round((completedCount / mockCollaborators.length) * 100)}%</div>
                    <p className="mt-3 text-sm text-slate-600">
                      {completedCount} de {mockCollaborators.length} avaliações concluídas
                    </p>
                    <Progress value={(completedCount / mockCollaborators.length) * 100} className="mt-6 h-3" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pacote">
            <div className="grid gap-6 md:grid-cols-4">
              {[10, 25, 50, 100].map((quantity) => (
                <Card key={quantity} className="border-white/80 bg-white/88 shadow-lg shadow-slate-200/40 transition-transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-primary">{quantity}</div>
                    <p className="mt-1 text-sm text-slate-500">avaliações</p>
                    <Button variant="outline" size="sm" className="mt-5 w-full rounded-xl bg-white">Selecionar</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;

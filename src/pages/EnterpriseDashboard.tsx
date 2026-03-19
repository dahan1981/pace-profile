import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Building2, Users, CreditCard, BarChart3, UserPlus, Link as LinkIcon, Download, LogOut, CheckCircle, Clock, Send } from 'lucide-react';

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
  const completedCount = mockCollaborators.filter(c => c.status === 'completed').length;
  const pendingCount = mockCollaborators.filter(c => c.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-primary">MÉTODO PACE</span>
            <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full font-medium">Empresarial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden md:block">Empresa Demo LTDA</span>
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="gap-2">
              <LogOut className="h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-2xl md:text-3xl font-bold">Painel Empresarial</h1>
          <p className="text-muted-foreground mt-1">Gerencie avaliações e equipes.</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10"><CreditCard className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Créditos</p>
                  <p className="text-2xl font-bold">{availableCredits}<span className="text-sm text-muted-foreground font-normal">/{totalCredits}</span></p>
                </div>
              </div>
              <Progress value={(usedCredits / totalCredits) * 100} className="mt-3 h-1.5" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-consolidador/10"><Users className="h-5 w-5 text-consolidador" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Colaboradores</p>
                  <p className="text-2xl font-bold">{mockCollaborators.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-consolidador/10"><CheckCircle className="h-5 w-5 text-consolidador" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Concluídas</p>
                  <p className="text-2xl font-bold">{completedCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10"><Clock className="h-5 w-5 text-secondary" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Pendentes</p>
                  <p className="text-2xl font-bold">{pendingCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="equipe" className="space-y-6">
          <TabsList>
            <TabsTrigger value="equipe" className="gap-2"><Users className="h-4 w-4" />Equipe</TabsTrigger>
            <TabsTrigger value="relatorios" className="gap-2"><BarChart3 className="h-4 w-4" />Relatórios</TabsTrigger>
            <TabsTrigger value="pacote" className="gap-2"><CreditCard className="h-4 w-4" />Pacote</TabsTrigger>
          </TabsList>

          <TabsContent value="equipe" className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button className="gap-2"><UserPlus className="h-4 w-4" /> Adicionar colaborador</Button>
              <Button variant="outline" className="gap-2"><LinkIcon className="h-4 w-4" /> Gerar link</Button>
              <Button variant="outline" className="gap-2"><Send className="h-4 w-4" /> Enviar convites</Button>
              <Button variant="outline" className="gap-2"><Download className="h-4 w-4" /> Exportar</Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/30">
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">COLABORADOR</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">E-MAIL</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">STATUS</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">PERFIL</th>
                        <th className="text-left p-4 text-xs font-medium text-muted-foreground">AÇÕES</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockCollaborators.map(c => (
                        <tr key={c.id} className="border-b last:border-0 hover:bg-muted/20">
                          <td className="p-4 font-medium text-sm">{c.name}</td>
                          <td className="p-4 text-sm text-muted-foreground">{c.email}</td>
                          <td className="p-4">
                            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                              c.status === 'completed' ? 'bg-consolidador/10 text-consolidador' : 'bg-secondary/10 text-secondary'
                            }`}>
                              {c.status === 'completed' ? <><CheckCircle className="h-3 w-3" /> Concluído</> : <><Clock className="h-3 w-3" /> Pendente</>}
                            </span>
                          </td>
                          <td className="p-4 text-sm">{c.profile ? `${c.profile} (${c.percentage}%)` : '—'}</td>
                          <td className="p-4">
                            {c.status === 'completed' && (
                              <Button variant="ghost" size="sm" className="text-xs">Ver devolutiva</Button>
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

          <TabsContent value="relatorios" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader><CardTitle className="text-lg">Distribuição de Perfis da Equipe</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={mockTeamData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" unit="%" />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {mockTeamData.map((e, i) => <Cell key={i} fill={e.color} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle className="text-lg">Taxa de Conclusão</CardTitle></CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {Math.round((completedCount / mockCollaborators.length) * 100)}%
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {completedCount} de {mockCollaborators.length} avaliações concluídas
                    </p>
                    <div className="mt-4">
                      <Progress value={(completedCount / mockCollaborators.length) * 100} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pacote" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-lg">Seu Pacote</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-xl bg-muted/50">
                    <p className="text-4xl font-bold text-primary">{totalCredits}</p>
                    <p className="text-sm text-muted-foreground mt-1">Créditos contratados</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-muted/50">
                    <p className="text-4xl font-bold text-consolidador">{usedCredits}</p>
                    <p className="text-sm text-muted-foreground mt-1">Utilizados</p>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-muted/50">
                    <p className="text-4xl font-bold text-secondary">{availableCredits}</p>
                    <p className="text-sm text-muted-foreground mt-1">Disponíveis</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button className="gap-2"><CreditCard className="h-4 w-4" /> Adquirir mais créditos</Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-4 gap-4">
              {[10, 25, 50, 100].map(qty => (
                <Card key={qty} className="text-center hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-primary mb-1">{qty}</p>
                    <p className="text-sm text-muted-foreground mb-4">avaliações</p>
                    <Button variant="outline" size="sm" className="w-full">Selecionar</Button>
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

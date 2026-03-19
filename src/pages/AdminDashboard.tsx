import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Building2, Users, CreditCard, FileText, Settings, LogOut, Search, Plus, Edit, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const mockEmpresas = [
    { id: 1, name: 'Empresa Alpha', credits: 50, used: 12, users: 15 },
    { id: 2, name: 'Tech Solutions', credits: 100, used: 87, users: 92 },
    { id: 3, name: 'Startup Beta', credits: 25, used: 3, users: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo-ilac.png" alt="ILAC" className="h-7 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="font-display text-xl font-bold text-primary">PACE ADMIN</span>
            <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full font-medium">Administrador</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="gap-2">
            <LogOut className="h-4 w-4" /> Sair
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">Painel Administrativo</h1>
        <p className="text-muted-foreground mb-8">Gerencie a plataforma Método PACE.</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Empresas</p><p className="text-2xl font-bold">3</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Usuários PF</p><p className="text-2xl font-bold">47</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Avaliações</p><p className="text-2xl font-bold">156</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Créditos em uso</p><p className="text-2xl font-bold">175</p></CardContent></Card>
        </div>

        <Tabs defaultValue="empresas" className="space-y-6">
          <TabsList>
            <TabsTrigger value="empresas" className="gap-2"><Building2 className="h-4 w-4" />Empresas</TabsTrigger>
            <TabsTrigger value="usuarios" className="gap-2"><Users className="h-4 w-4" />Usuários</TabsTrigger>
            <TabsTrigger value="conteudo" className="gap-2"><FileText className="h-4 w-4" />Conteúdo</TabsTrigger>
            <TabsTrigger value="config" className="gap-2"><Settings className="h-4 w-4" />Config</TabsTrigger>
          </TabsList>

          <TabsContent value="empresas">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar empresa..." className="pl-9" />
              </div>
              <Button className="gap-2"><Plus className="h-4 w-4" /> Nova empresa</Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead><tr className="border-b bg-muted/30">
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">EMPRESA</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">CRÉDITOS</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">USADOS</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">USUÁRIOS</th>
                    <th className="text-left p-4 text-xs font-medium text-muted-foreground">AÇÕES</th>
                  </tr></thead>
                  <tbody>
                    {mockEmpresas.map(e => (
                      <tr key={e.id} className="border-b last:border-0 hover:bg-muted/20">
                        <td className="p-4 font-medium text-sm">{e.name}</td>
                        <td className="p-4 text-sm">{e.credits}</td>
                        <td className="p-4 text-sm">{e.used}</td>
                        <td className="p-4 text-sm">{e.users}</td>
                        <td className="p-4 flex gap-1">
                          <Button variant="ghost" size="sm"><Edit className="h-3 w-3" /></Button>
                          <Button variant="ghost" size="sm"><CreditCard className="h-3 w-3" /></Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usuarios">
            <Card><CardContent className="p-8 text-center text-muted-foreground">
              <Users className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p>Gestão de usuários pessoa física.</p>
              <p className="text-sm mt-1">Arquitetura pronta para expansão com Lovable Cloud.</p>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="conteudo">
            <Card><CardContent className="p-8 text-center text-muted-foreground">
              <FileText className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p>Editor de perguntas, perfis e textos de devolutiva.</p>
              <p className="text-sm mt-1">Arquitetura pronta para expansão.</p>
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="config">
            <Card><CardContent className="p-8 text-center text-muted-foreground">
              <Settings className="h-10 w-10 mx-auto mb-3 opacity-40" />
              <p>Configurações gerais da plataforma.</p>
            </CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

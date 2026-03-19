import { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, User, ArrowLeft } from 'lucide-react';

const Cadastro = () => {
  const [searchParams] = useSearchParams();
  const isEmpresa = searchParams.get('type') === 'empresa';
  const [tab, setTab] = useState(isEmpresa ? 'empresa' : 'usuario');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    navigate(type === 'empresa' ? '/empresa' : '/usuario');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" /> Voltar ao início
          </Link>
          <h1 className="font-display text-3xl font-bold text-primary">MÉTODO PACE</h1>
          <p className="text-muted-foreground mt-1">Crie sua conta</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="usuario" className="gap-2"><User className="h-4 w-4" />Pessoa Física</TabsTrigger>
                <TabsTrigger value="empresa" className="gap-2"><Building2 className="h-4 w-4" />Empresa</TabsTrigger>
              </TabsList>

              <TabsContent value="usuario">
                <form onSubmit={(e) => handleSignup(e, 'usuario')} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nome completo</Label>
                    <Input placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label>E-mail</Label>
                    <Input type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Mín. 8 caracteres" required />
                  </div>
                  <Button type="submit" className="w-full">Criar conta</Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Já tem conta? <Link to="/login" className="text-primary hover:underline">Entrar</Link>
                  </p>
                </form>
              </TabsContent>

              <TabsContent value="empresa">
                <form onSubmit={(e) => handleSignup(e, 'empresa')} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nome da empresa</Label>
                    <Input placeholder="Empresa LTDA" required />
                  </div>
                  <div className="space-y-2">
                    <Label>CNPJ</Label>
                    <Input placeholder="00.000.000/0000-00" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Nome do responsável</Label>
                    <Input placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label>E-mail corporativo</Label>
                    <Input type="email" placeholder="admin@empresa.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label>Senha</Label>
                    <Input type="password" placeholder="Mín. 8 caracteres" required />
                  </div>
                  <Button type="submit" className="w-full">Cadastrar empresa</Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Já tem conta? <Link to="/login?type=empresa" className="text-primary hover:underline">Entrar</Link>
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cadastro;

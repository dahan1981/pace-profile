import { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, User, ArrowLeft } from 'lucide-react';

const Login = () => {
  const [searchParams] = useSearchParams();
  const isEmpresa = searchParams.get('type') === 'empresa';
  const [tab, setTab] = useState(isEmpresa ? 'empresa' : 'usuario');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent, type: string) => {
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
          <img src="/src/assets/logo-ilac.png" alt="ILAC" className="h-12 w-auto mx-auto mb-2" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <h1 className="font-display text-3xl font-bold text-primary">MÉTODO PACE</h1>
          <p className="text-xs text-muted-foreground">ILAC — Instituto Latino Americano de Coaching</p>
          <p className="text-muted-foreground mt-1">Acesse sua conta</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <Tabs value={tab} onValueChange={setTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="usuario" className="gap-2"><User className="h-4 w-4" />Pessoa Física</TabsTrigger>
                <TabsTrigger value="empresa" className="gap-2"><Building2 className="h-4 w-4" />Empresa</TabsTrigger>
              </TabsList>

              <TabsContent value="usuario">
                <form onSubmit={(e) => handleLogin(e, 'usuario')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-u">E-mail</Label>
                    <Input id="email-u" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pass-u">Senha</Label>
                    <Input id="pass-u" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full">Entrar</Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Não tem conta? <Link to="/cadastro" className="text-primary hover:underline">Cadastre-se</Link>
                  </p>
                </form>
              </TabsContent>

              <TabsContent value="empresa">
                <form onSubmit={(e) => handleLogin(e, 'empresa')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-e">E-mail corporativo</Label>
                    <Input id="email-e" type="email" placeholder="admin@empresa.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pass-e">Senha</Label>
                    <Input id="pass-e" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full">Entrar</Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Não tem conta? <Link to="/cadastro?type=empresa" className="text-primary hover:underline">Cadastre sua empresa</Link>
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

export default Login;

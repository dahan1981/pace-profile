import { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Building2, User } from 'lucide-react';
import { currentUserCanAccessAdmin, loginAccount } from '@/lib/auth';

const Login = () => {
  const [searchParams] = useSearchParams();
  const isEmpresa = searchParams.get('type') === 'empresa';
  const [tab, setTab] = useState(isEmpresa ? 'empresa' : 'usuario');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent, type: 'usuario' | 'empresa') => {
    e.preventDefault();

    try {
      const email = type === 'usuario' ? userEmail : companyEmail;
      const password = type === 'usuario' ? userPassword : companyPassword;
      const account = await loginAccount(email, password);

      if (await currentUserCanAccessAdmin()) {
        navigate('/admin');
        return;
      }

      navigate(account.role === 'company' ? '/empresa' : '/usuario');
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Não foi possível entrar.');
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(12,33,84,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(199,45,62,0.14),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 lg:grid lg:grid-cols-[0.95fr_0.75fr]">
        <div className="hidden lg:block">
          <div className="max-w-xl">
            <Brand iconClassName="h-10 w-10" titleClassName="text-2xl" subtitle="ILAC • Instituto Latino Americano de Coaching" />
            <h1 className="mt-8 font-display text-5xl font-bold leading-tight text-slate-950">
              Entre e retome sua jornada com clareza.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Uma experiência leve, elegante e direta ao ponto. Sem excesso de elementos, sem aparência de template, só o que ajuda você a entrar e seguir.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="mb-6 text-center lg:hidden">
            <Brand stacked iconClassName="h-12 w-12" titleClassName="text-3xl" subtitle="ILAC • Instituto Latino Americano de Coaching" />
          </div>
          <Card className="overflow-hidden border-white/80 bg-white/88 shadow-2xl shadow-slate-200/70 backdrop-blur">
            <CardContent className="p-7 md:p-8">
              <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao início
              </Link>

              <div className="mb-6">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">Acesso</div>
                <h2 className="mt-2 font-display text-4xl font-bold text-slate-950">Entre na sua conta</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Se a sua conta tiver permissão administrativa, o acesso será direcionado automaticamente ao painel admin.
                </p>
              </div>

              <Tabs value={tab} onValueChange={setTab}>
                <TabsList className="mb-6 grid w-full grid-cols-2 rounded-2xl bg-slate-100 p-1">
                  <TabsTrigger value="usuario" className="gap-2 rounded-xl"><User className="h-4 w-4" />Pessoa física</TabsTrigger>
                  <TabsTrigger value="empresa" className="gap-2 rounded-xl"><Building2 className="h-4 w-4" />Empresa</TabsTrigger>
                </TabsList>

                <TabsContent value="usuario">
                  <form onSubmit={(e) => handleLogin(e, 'usuario')} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-u">E-mail</Label>
                      <Input id="email-u" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="seu@email.com" required className="h-11 rounded-xl bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pass-u">Senha</Label>
                      <Input id="pass-u" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder="Digite sua senha" required className="h-11 rounded-xl bg-white" />
                    </div>
                    <Button type="submit" className="h-11 w-full rounded-xl shadow-lg shadow-primary/20">Entrar</Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Ainda não tem conta? <Link to="/cadastro" className="font-medium text-primary hover:underline">Criar acesso</Link>
                    </p>
                  </form>
                </TabsContent>

                <TabsContent value="empresa">
                  <form onSubmit={(e) => handleLogin(e, 'empresa')} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-e">E-mail corporativo</Label>
                      <Input id="email-e" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} type="email" placeholder="time@empresa.com" required className="h-11 rounded-xl bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pass-e">Senha</Label>
                      <Input id="pass-e" value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)} type="password" placeholder="Digite sua senha" required className="h-11 rounded-xl bg-white" />
                    </div>
                    <Button type="submit" className="h-11 w-full rounded-xl shadow-lg shadow-primary/20">Entrar como empresa</Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Ainda não tem acesso? <Link to="/cadastro?type=empresa" className="font-medium text-primary hover:underline">Cadastrar empresa</Link>
                    </p>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;

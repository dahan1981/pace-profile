import { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Building2, MailCheck, User } from 'lucide-react';
import { currentUserCanAccessAdmin, registerAccount } from '@/lib/auth';

const Cadastro = () => {
  const [searchParams] = useSearchParams();
  const isEmpresa = searchParams.get('type') === 'empresa';
  const [tab, setTab] = useState(isEmpresa ? 'empresa' : 'usuario');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyDocument, setCompanyDocument] = useState('');
  const [companyOwner, setCompanyOwner] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyPassword, setCompanyPassword] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent, type: 'usuario' | 'empresa') => {
    e.preventDefault();

    try {
      const { account, requiresEmailConfirmation } = await (type === 'usuario'
        ? registerAccount({
            name: userName,
            email: userEmail,
            password: userPassword,
            role: 'user',
          })
        : registerAccount({
            name: companyOwner,
            email: companyEmail,
            password: companyPassword,
            role: 'company',
            companyName: `${companyName} - ${companyDocument}`,
          }));

      if (requiresEmailConfirmation) {
        setConfirmationEmail(account.email);
        return;
      }

      if (await currentUserCanAccessAdmin()) {
        navigate('/admin');
        return;
      }

      navigate(account.role === 'company' ? '/empresa' : '/usuario');
    } catch (error) {
      window.alert(error instanceof Error ? error.message : 'Nao foi possivel criar a conta.');
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(12,33,84,0.12),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(199,45,62,0.15),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)] px-4 py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 lg:grid lg:grid-cols-[0.9fr_0.78fr]">
        <div className="hidden lg:block">
          <Brand iconClassName="h-10 w-10" titleClassName="text-2xl" subtitle="ILAC - Instituto Latino Americano de Coaching" />
          <h1 className="mt-8 max-w-xl font-display text-5xl font-bold leading-tight text-slate-950">
            Crie seu acesso sem friccao e comece a descobrir seu perfil.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            As contas criadas aqui passam a existir de verdade na aplicacao, com sessao, historico de avaliacoes e possibilidade de acesso administrativo quando liberado.
          </p>
        </div>

        <div className="w-full">
          <div className="mb-6 text-center lg:hidden">
            <Brand stacked iconClassName="h-12 w-12" titleClassName="text-3xl" subtitle="ILAC - Instituto Latino Americano de Coaching" />
          </div>
          <Card className="overflow-hidden border-white/80 bg-white/88 shadow-2xl shadow-slate-200/70 backdrop-blur">
            <CardContent className="p-7 md:p-8">
              <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao inicio
              </Link>

              {confirmationEmail ? (
                <div className="rounded-3xl border border-primary/10 bg-[linear-gradient(180deg,_rgba(12,33,84,0.03),_rgba(12,33,84,0.01))] p-6 md:p-8">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <MailCheck className="h-6 w-6" />
                  </div>
                  <div className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">Confirme seu e-mail</div>
                  <h2 className="mt-2 font-display text-4xl font-bold text-slate-950">Falta so mais um passo.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Enviamos um link de confirmacao para <span className="font-semibold text-slate-900">{confirmationEmail}</span>.
                    Abra esse e-mail, confirme sua conta e depois volte para entrar normalmente.
                  </p>
                  <div className="mt-5 rounded-2xl bg-white px-4 py-4 text-sm leading-7 text-slate-600 shadow-sm">
                    Se nao encontrar na caixa principal, verifique spam, promocoes ou lixo eletronico.
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button onClick={() => navigate('/login')} className="rounded-xl shadow-lg shadow-primary/20">
                      Ir para login
                    </Button>
                    <Button variant="outline" onClick={() => setConfirmationEmail(null)} className="rounded-xl">
                      Voltar ao cadastro
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">Cadastro</div>
                    <h2 className="mt-2 font-display text-4xl font-bold text-slate-950">Crie sua conta</h2>
                  </div>

                  <Tabs value={tab} onValueChange={setTab}>
                    <TabsList className="mb-6 grid w-full grid-cols-2 rounded-2xl bg-slate-100 p-1">
                      <TabsTrigger value="usuario" className="gap-2 rounded-xl"><User className="h-4 w-4" />Pessoa fisica</TabsTrigger>
                      <TabsTrigger value="empresa" className="gap-2 rounded-xl"><Building2 className="h-4 w-4" />Empresa</TabsTrigger>
                    </TabsList>

                    <TabsContent value="usuario">
                      <form onSubmit={(e) => handleSignup(e, 'usuario')} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome completo</Label>
                          <Input id="name" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Seu nome" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-mail</Label>
                          <Input id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="seu@email.com" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">Senha</Label>
                          <Input id="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" placeholder="Minimo de 8 caracteres" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <Button type="submit" className="h-11 w-full rounded-xl shadow-lg shadow-primary/20">Criar conta</Button>
                        <p className="text-center text-sm text-muted-foreground">
                          Ja tem acesso? <Link to="/login" className="font-medium text-primary hover:underline">Entrar</Link>
                        </p>
                      </form>
                    </TabsContent>

                    <TabsContent value="empresa">
                      <form onSubmit={(e) => handleSignup(e, 'empresa')} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Nome da empresa</Label>
                          <Input id="company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Empresa LTDA" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cnpj">CNPJ</Label>
                          <Input id="cnpj" value={companyDocument} onChange={(e) => setCompanyDocument(e.target.value)} placeholder="00.000.000/0000-00" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="owner">Responsavel</Label>
                          <Input id="owner" value={companyOwner} onChange={(e) => setCompanyOwner(e.target.value)} placeholder="Nome do responsavel" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-company">E-mail corporativo</Label>
                          <Input id="email-company" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} type="email" placeholder="time@empresa.com" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-company">Senha</Label>
                          <Input id="password-company" value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)} type="password" placeholder="Minimo de 8 caracteres" required className="h-11 rounded-xl bg-white" />
                        </div>
                        <Button type="submit" className="h-11 w-full rounded-xl shadow-lg shadow-primary/20">Cadastrar empresa</Button>
                        <p className="text-center text-sm text-muted-foreground">
                          Ja tem acesso? <Link to="/login?type=empresa" className="font-medium text-primary hover:underline">Entrar</Link>
                        </p>
                      </form>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;

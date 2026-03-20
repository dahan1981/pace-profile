import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProfileMark from '@/components/ProfileMark';
import { PROFILES, PROFILE_ORDER } from '@/data/profiles';
import { ArrowRight, Building2, Target, Users, Wand2 } from 'lucide-react';

const profileColors: Record<string, string> = {
  propulsor: 'bg-propulsor',
  articulador: 'bg-articulador',
  consolidador: 'bg-consolidador',
  estrategista: 'bg-estrategista',
};

const profileHighlights: Record<string, string> = {
  propulsor: 'Move o jogo para frente e acelera decisões.',
  articulador: 'Cria conexão, engaja pessoas e abre caminhos.',
  consolidador: 'Sustenta consistência e transforma intenção em entrega.',
  estrategista: 'Lê cenários, organiza ideias e antecipa rotas.',
};

const steps = [
  {
    title: 'Responda no seu ritmo',
    description: 'Perguntas curtas, claras e com navegação leve para você não se perder no meio do caminho.',
  },
  {
    title: 'Entenda seu padrão',
    description: 'Você enxerga sua forma dominante de agir, decidir, colaborar e reagir sob pressão.',
  },
  {
    title: 'Leve isso para a prática',
    description: 'O resultado vira orientação concreta para desenvolvimento pessoal, liderança e equipe.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(199,45,62,0.12),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(12,33,84,0.12),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)]">
      <nav className="fixed top-0 z-50 w-full border-b border-white/60 bg-background/75 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Brand title="ILAC" subtitle="Instituto Latino Americano de Coaching" titleClassName="text-lg" iconClassName="h-8 w-8" />
          <div className="hidden items-center gap-6 md:flex">
            <a href="#perfis" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Perfis</a>
            <a href="#como-funciona" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Como funciona</a>
            <a href="#solucoes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Soluções</a>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link to="/cadastro?type=empresa">
              <Button size="sm" className="shadow-lg shadow-primary/20">Sou empresa</Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative px-4 pb-20 pt-28">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-slate-950 md:text-6xl">
              Um diagnóstico comportamental com cara de marca, não de formulário genérico.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              O Método PACE traduz comportamento em linguagem simples, visual e útil.
              Você responde rápido, entende seu perfil com clareza e sai com insights que realmente fazem sentido.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/cadastro">
                <Button size="lg" className="h-12 gap-2 px-8 shadow-xl shadow-primary/20">
                  Quero fazer minha avaliação
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/cadastro?type=empresa">
                <Button size="lg" variant="outline" className="h-12 gap-2 border-primary/20 bg-white/70 px-8">
                  <Building2 className="h-4 w-4" />
                  Levar para minha equipe
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['4 perfis', 'uma leitura clara do seu padrão dominante'],
                ['40 perguntas', 'objetivas, leves e fáceis de responder'],
                ['resultado acionável', 'com forças, alertas e próximos passos'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-white to-secondary/10 blur-2xl" />
            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">Perfis PACE</div>
                  <h2 className="mt-1 font-display text-2xl text-slate-950">Quatro energias, um retrato mais humano</h2>
                </div>
                <Wand2 className="h-5 w-5 text-primary/60" />
              </div>
              <div className="grid gap-4">
                {PROFILE_ORDER.map((key) => {
                  const profile = PROFILES[key];
                  return (
                    <div key={key} className="rounded-2xl border border-slate-200/70 bg-slate-50/85 p-4 transition-transform duration-200 hover:-translate-y-0.5">
                      <div className="flex items-start gap-4">
                        <ProfileMark profile={profile} size="md" />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="font-display text-xl font-bold text-slate-950">{profile.name}</h3>
                            <span className={`h-1.5 w-10 rounded-full ${profileColors[key]}`} />
                          </div>
                          <p className="mt-2 text-sm font-medium text-slate-700">{profileHighlights[key]}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-500">{profile.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Como funciona</div>
            <h2 className="font-display text-4xl font-bold text-slate-950">Intuitivo para quem responde. Útil para quem aplica.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <Card key={step.title} className="border-white/70 bg-white/80 shadow-lg shadow-slate-200/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="perfis" className="px-4 py-16">
        <div className="container mx-auto rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/30 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Leitura comportamental</div>
              <h2 className="mt-3 font-display text-4xl font-bold">Cada perfil tem uma força que aparece no dia a dia.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
                Em vez de caricaturas ou rótulos duros, a proposta aqui é mostrar como você se move, se conecta,
                sustenta e pensa. O resultado fica mais elegante, mais claro e muito mais útil.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {PROFILE_ORDER.map((key) => {
                const profile = PROFILES[key];
                return (
                  <div key={key} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <ProfileMark profile={profile} size="sm" />
                    <h3 className="mt-4 font-display text-2xl">{profile.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/72">{profile.shortDescription}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Soluções</div>
            <h2 className="font-display text-4xl font-bold text-slate-950">Uma experiência boa para a pessoa. Melhor ainda para a equipe.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden border-white/70 bg-white/85 shadow-xl shadow-slate-200/50">
              <CardContent className="p-8">
                <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold text-slate-950">Para você</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  Um fluxo rápido e agradável para descobrir seu perfil predominante, entender combinações e transformar isso em ação.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-700">
                  <div className="rounded-xl bg-slate-50 px-4 py-3">Leitura clara do seu padrão de ação</div>
                  <div className="rounded-xl bg-slate-50 px-4 py-3">Resultado mais humano e menos burocrático</div>
                  <div className="rounded-xl bg-slate-50 px-4 py-3">Sugestões de desenvolvimento com foco prático</div>
                </div>
                <Link to="/cadastro" className="mt-8 inline-flex">
                  <Button className="gap-2">
                    Começar agora
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-white/70 bg-[linear-gradient(135deg,_rgba(12,33,84,1)_0%,_rgba(25,53,120,1)_58%,_rgba(199,45,62,0.95)_100%)] text-white shadow-xl shadow-slate-300/30">
              <CardContent className="p-8">
                <div className="inline-flex rounded-2xl bg-white/12 p-3 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold">Para empresas</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/78">
                  Uma interface fácil de operar com leitura rápida de equipe, convites, histórico e visão consolidada dos perfis.
                </p>
                <div className="mt-6 space-y-3 text-sm text-white/90">
                  <div className="rounded-xl border border-white/12 bg-white/10 px-4 py-3">Experiência de marca mais madura e confiável</div>
                  <div className="rounded-xl border border-white/12 bg-white/10 px-4 py-3">Aplicação intuitiva para RH, líderes e consultores</div>
                  <div className="rounded-xl border border-white/12 bg-white/10 px-4 py-3">Resultados visualmente mais elegantes para apresentação</div>
                </div>
                <Link to="/cadastro?type=empresa" className="mt-8 inline-flex">
                  <Button variant="secondary" className="gap-2">
                    Falar com a equipe
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-10 pt-6">
        <div className="container mx-auto rounded-[1.75rem] border border-white/70 bg-white/80 px-6 py-8 text-center shadow-lg shadow-slate-200/40">
          <Brand stacked iconClassName="h-12 w-12" titleClassName="text-lg" />
          <p className="mt-2 text-sm text-muted-foreground">ILAC • Instituto Latino Americano de Coaching</p>
          <p className="mt-1 text-xs text-muted-foreground">Padrões de Ação e Comportamento Essencial © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

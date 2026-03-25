import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProfileMark from '@/components/ProfileMark';
import { PROFILES, PROFILE_ORDER } from '@/data/profiles';
import { ArrowRight, BrainCircuit, Building2, ShieldCheck } from 'lucide-react';

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

const experiencePillars = [
  {
    title: 'Leve para responder',
    description: 'A experiência não parece prova nem formulário duro. Ela conduz a pessoa com clareza e ritmo.',
    note: 'ritmo bom',
    tone: 'bg-[rgba(199,45,62,0.14)] text-[rgb(145,36,49)]',
  },
  {
    title: 'Elegante para apresentar',
    description: 'O resultado chega limpo, visual e fácil de explicar para indivíduos, líderes ou equipes.',
    note: 'boa leitura',
    tone: 'bg-[rgba(12,33,84,0.12)] text-[rgb(21,58,134)]',
  },
  {
    title: 'Útil de verdade',
    description: 'A leitura vira repertório prático para desenvolvimento, liderança, comunicação e composição de time.',
    note: 'vai para a prática',
    tone: 'bg-[rgba(176,118,20,0.12)] text-[rgb(145,99,20)]',
  },
];

const journeySteps = [
  {
    eyebrow: '01',
    title: 'A pessoa entra sem fricção',
    description: 'Antes de responder, ela entende o valor do processo, o clima da marca e o que vai receber no final.',
  },
  {
    eyebrow: '02',
    title: 'A entrevista acontece com naturalidade',
    description: 'Perguntas curtas, andamento fluido e sensação de descoberta, não de burocracia.',
  },
  {
    eyebrow: '03',
    title: 'O resultado entrega leitura e direção',
    description: 'A devolutiva mostra força dominante, pontos de atenção, combinação de perfis e próximos passos.',
  },
];

const useCases = [
  {
    title: 'Para a pessoa',
    description: 'Um retrato mais claro da forma de agir, decidir, se relacionar e se posicionar sob pressão.',
    note: 'individual',
    tone: 'bg-[rgba(46,112,181,0.12)] text-[rgb(35,97,161)]',
  },
  {
    title: 'Para coaches e consultores',
    description: 'Uma ferramenta mais bonita e mais fácil de aplicar em programas, turmas e processos individuais.',
    note: 'aplicação',
    tone: 'bg-[rgba(199,45,62,0.12)] text-[rgb(145,36,49)]',
  },
  {
    title: 'Para equipes',
    description: 'Leitura rápida de composição comportamental, histórico e visão mais madura para RH e liderança.',
    note: 'coletivo',
    tone: 'bg-[rgba(43,124,84,0.12)] text-[rgb(38,108,73)]',
  },
];

const deliverables = [
  'Perfil predominante com leitura clara e sem caricatura.',
  'Combinação entre perfis para entender nuance, não só rótulo.',
  'Pontos fortes, alertas e áreas de desenvolvimento.',
  'Material útil tanto para devolutiva individual quanto para equipe.',
];

const trustSignals = [
  'Leitura visual mais humana',
  'Diagnóstico com linguagem simples',
  'Fluxo pronto para pessoa e empresa',
];

const Marker = ({ note, tone }: { note: string; tone: string }) => (
  <div className="mb-5 flex items-center gap-3">
    <div className="relative h-8 w-12">
      <span className={`absolute left-0 top-3 h-2.5 w-2.5 rounded-full ${tone}`} />
      <span className="absolute left-3 top-4 h-px w-9 bg-slate-300" />
      <span className="absolute left-7 top-1 h-4 w-4 rounded-full border border-slate-200 bg-white/80" />
    </div>
    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{note}</span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(199,45,62,0.15),_transparent_25%),radial-gradient(circle_at_top_right,_rgba(12,33,84,0.14),_transparent_30%),linear-gradient(180deg,_#f7f7f4_0%,_#eef2f7_48%,_#f8fafc_100%)]">
      <nav className="fixed top-0 z-50 w-full border-b border-white/60 bg-background/78 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Brand
            title="ILAC"
            subtitle="Instituto Latino Americano de Coaching"
            titleClassName="text-lg"
            iconClassName="h-8 w-8"
          />
          <div className="hidden items-center gap-6 md:flex">
            <a href="#experiencia" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Experiência</a>
            <a href="#perfis" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Perfis</a>
            <a href="#solucoes" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Soluções</a>
            <Link to="/ademir-soares" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Ademir Soares</Link>
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

      <section className="relative px-4 pb-16 pt-28 md:pb-20">
        <div className="container mx-auto grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/78 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Diagnóstico comportamental com estética de marca e devolutiva clara
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-slate-950 md:text-6xl">
              Um site que convida a descobrir.
              <span className="block text-primary">Não só a entrar, responder e sair.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              O Método PACE transforma uma entrevista comportamental em uma experiência mais bonita, mais intuitiva
              e mais memorável. A pessoa entende o que está fazendo, se sente conduzida e recebe uma leitura que vale a pena guardar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/cadastro">
                <Button size="lg" className="h-12 gap-2 px-8 shadow-xl shadow-primary/20">
                  Explorar minha leitura
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/ademir-soares">
                <Button size="lg" variant="outline" className="h-12 gap-2 border-primary/20 bg-white/70 px-8">
                  Conhecer Ademir Soares
                </Button>
              </Link>
              <a href="#experiencia">
                <Button size="lg" variant="outline" className="h-12 gap-2 border-primary/20 bg-white/70 px-8">
                  Ver como funciona
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="rounded-full border border-white/80 bg-white/74 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur"
                >
                  {signal}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ['4 perfis', 'um mapa simples para ler a energia dominante'],
                ['entrevista leve', 'sem cara de questionário corporativo pesado'],
                ['devolutiva útil', 'para desenvolvimento pessoal e leitura de equipe'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.5rem] border border-white/75 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/12 via-white/30 to-secondary/12 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/84 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="border-b border-slate-200/70 px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/65">Painel de leitura</div>
                    <h2 className="mt-2 font-display text-3xl text-slate-950">O site precisa ter mundo próprio.</h2>
                  </div>
                  <BrainCircuit className="mt-1 h-5 w-5 text-primary/60" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Em vez de empurrar a pessoa direto para a entrevista, a página apresenta contexto, valor, clima e segurança.
                </p>
              </div>

              <div className="grid gap-4 p-5">
                {PROFILE_ORDER.map((key) => {
                  const profile = PROFILES[key];
                  return (
                    <div key={key} className="rounded-[1.5rem] border border-slate-200/70 bg-slate-50/90 p-4 transition-transform duration-200 hover:-translate-y-0.5">
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

      <section id="experiencia" className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Experiência</div>
            <h2 className="font-display text-4xl font-bold text-slate-950">Antes da entrevista, a pessoa precisa querer continuar.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Uma boa landing prepara emocionalmente a entrada. Ela mostra propósito, reduz estranhamento e faz a experiência parecer valiosa desde o primeiro scroll.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {experiencePillars.map((item) => (
              <Card key={item.title} className="border-white/70 bg-white/82 shadow-lg shadow-slate-200/45 backdrop-blur">
                <CardContent className="p-6">
                  <Marker note={item.note} tone={item.tone} />
                  <h3 className="font-display text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-16">
        <div className="container mx-auto rounded-[2rem] border border-slate-200/70 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/30 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">Ritmo da jornada</div>
              <h2 className="mt-3 font-display text-4xl font-bold">O processo precisa parecer guiado, não apressado.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
                A landing agora pode trabalhar melhor expectativa, entendimento e desejo antes da ação. Isso deixa o clique mais natural e qualifica melhor quem entra.
              </p>
            </div>

            <div className="grid gap-4">
              {journeySteps.map((step) => (
                <div key={step.eyebrow} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">{step.eyebrow}</div>
                  <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="perfis" className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Perfis PACE</div>
            <h2 className="font-display text-4xl font-bold text-slate-950">Quatro forças, combinadas de forma mais humana.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              O foco não é reduzir a pessoa a uma etiqueta. É mostrar a força que mais aparece, o apoio que vem do segundo perfil e o que isso cria no cotidiano.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {PROFILE_ORDER.map((key) => {
              const profile = PROFILES[key];
              return (
                <Card key={key} className="border-white/70 bg-white/84 shadow-lg shadow-slate-200/45">
                  <CardContent className="p-6">
                    <ProfileMark profile={profile} size="sm" />
                    <h3 className="mt-4 font-display text-2xl text-slate-950">{profile.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{profile.shortDescription}</p>
                    <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {profileHighlights[key]}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="solucoes" className="px-4 py-16">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Soluções</div>
            <h2 className="font-display text-4xl font-bold text-slate-950">Não é só para responder. É para aplicar.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              O site precisa mostrar que a experiência serve tanto para quem quer se entender melhor quanto para quem quer operar isso com método em contextos profissionais.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {useCases.map((item) => (
              <Card key={item.title} className="border-white/70 bg-white/84 shadow-lg shadow-slate-200/45">
                <CardContent className="p-6">
                  <Marker note={item.note} tone={item.tone} />
                  <h3 className="font-display text-2xl text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Card className="overflow-hidden border-white/70 bg-white/84 shadow-xl shadow-slate-200/50">
              <CardContent className="p-8">
                <Marker note="entrega" tone="bg-[rgba(176,118,20,0.12)] text-[rgb(145,99,20)]" />
                <h3 className="font-display text-3xl font-bold text-slate-950">O que a pessoa recebe</h3>
                <div className="mt-5 space-y-3">
                  {deliverables.map((item) => (
                    <div key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
                <Link to="/cadastro" className="mt-8 inline-flex">
                  <Button className="gap-2">
                    Quero viver essa experiência
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-white/70 bg-[linear-gradient(135deg,_rgba(12,33,84,1)_0%,_rgba(25,53,120,1)_58%,_rgba(199,45,62,0.95)_100%)] text-white shadow-xl shadow-slate-300/30">
              <CardContent className="p-8">
                <div className="inline-flex rounded-2xl bg-white/12 p-3 text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-bold">Levar para equipes</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
                  Para o ILAC, essa experiência também precisa funcionar como ferramenta de operação: com leitura de relatórios, visão consolidada e interface mais confiável para uso profissional.
                </p>
                <div className="mt-6 space-y-3 text-sm text-white/90">
                  <div className="rounded-xl border border-white/12 bg-white/10 px-4 py-3">Aplicação mais segura para RH, líderes e consultores</div>
                  <div className="rounded-xl border border-white/12 bg-white/10 px-4 py-3">Visual mais maduro na apresentação dos resultados</div>
                  <div className="rounded-xl border border-white/12 bg-white/10 px-4 py-3">Uma marca que parece método, não ferramenta improvisada</div>
                </div>
                <Link to="/cadastro?type=empresa" className="mt-8 inline-flex">
                  <Button variant="secondary" className="gap-2">
                    Conhecer a frente empresarial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-10 pt-6">
        <div className="container mx-auto rounded-[1.75rem] border border-white/70 bg-white/82 px-6 py-8 text-center shadow-lg shadow-slate-200/40">
          <Brand stacked iconClassName="h-12 w-12" titleClassName="text-lg" title="ILAC" subtitle="Instituto Latino Americano de Coaching" />
          <p className="mt-3 text-sm text-muted-foreground">Padrões de Ação e Comportamento Essencial © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

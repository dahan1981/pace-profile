import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';
import ProfileMark from '@/components/ProfileMark';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PROFILES, PROFILE_ORDER } from '@/data/profiles';
import { ArrowRight } from 'lucide-react';

const profileHighlights: Record<string, string> = {
  propulsor: 'Move o jogo para frente e acelera decisões.',
  articulador: 'Cria conexão, engaja pessoas e abre caminhos.',
  consolidador: 'Sustenta consistência e transforma intenção em entrega.',
  estrategista: 'Lê cenários, organiza ideias e antecipa rotas.',
};

const journeys = [
  {
    eyebrow: 'Pessoa',
    title: 'Descobrir com clareza a forma de agir, decidir e se posicionar.',
    description:
      'Uma experiência leve para quem quer autoconhecimento sem cair em linguagem fria ou caricata.',
  },
  {
    eyebrow: 'Coaches e consultores',
    title: 'Conduzir devolutivas mais bonitas, claras e aplicáveis.',
    description:
      'O método foi desenhado para funcionar bem na experiência individual e em processos profissionais.',
  },
  {
    eyebrow: 'Equipes',
    title: 'Ler composição comportamental com maturidade e utilidade real.',
    description:
      'Uma base mais elegante para liderança, RH, desenvolvimento e conversas de alinhamento.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'A entrada já faz sentido',
    description:
      'A pessoa entende o valor da leitura antes de responder. Não entra num formulário seco; entra numa experiência.',
  },
  {
    number: '02',
    title: 'A entrevista flui com naturalidade',
    description:
      'As perguntas conduzem com ritmo, clareza e leveza. O processo parece descoberta, não burocracia.',
  },
  {
    number: '03',
    title: 'O resultado entrega leitura e direção',
    description:
      'O relatório mostra perfil predominante, combinações, pontos fortes, atenção e caminhos de desenvolvimento.',
  },
];

const heroSupports = [
  {
    title: 'Leitura clara',
    description:
      'Sem excesso de jargão e sem visual genérico. A proposta é traduzir comportamento em algo legível e memorável.',
  },
  {
    title: 'Aplicação real',
    description:
      'O que a pessoa recebe precisa servir para devolutiva individual, conversas de liderança e leitura de equipe.',
  },
];

const deliverables = [
  'Perfil predominante com leitura clara e sem caricatura.',
  'Combinação entre perfis para entender nuance, não só rótulo.',
  'Pontos fortes, pontos de atenção e áreas de desenvolvimento.',
  'Material útil para clareza pessoal e aplicação profissional.',
];

const stats = [
  ['4', 'forças essenciais para leitura do comportamento'],
  ['1', 'experiência fluida, sem quebra entre marca e método'],
  ['100%', 'pensado para pessoa, coach, consultor e equipe'],
];

const SectionLabel = ({ children, light = false }: { children: string; light?: boolean }) => (
  <div className={`text-sm font-semibold uppercase tracking-[0.24em] ${light ? 'text-white/55' : 'text-primary/72'}`}>
    {children}
  </div>
);

const Index = () => {
  const [processApi, setProcessApi] = useState<CarouselApi>();
  const [processIndex, setProcessIndex] = useState(0);

  useEffect(() => {
    if (!processApi) return;

    const updateIndex = () => {
      setProcessIndex(processApi.selectedScrollSnap());
    };

    updateIndex();
    processApi.on('select', updateIndex);
    processApi.on('reInit', updateIndex);

    return () => {
      processApi.off('select', updateIndex);
    };
  }, [processApi]);

  useEffect(() => {
    if (!processApi) return;

    const interval = window.setInterval(() => {
      const snaps = processApi.scrollSnapList().length;
      const nextIndex = processApi.selectedScrollSnap() + 1;

      if (nextIndex >= snaps) {
        processApi.scrollTo(0);
        return;
      }

      processApi.scrollTo(nextIndex);
    }, 4800);

    return () => window.clearInterval(interval);
  }, [processApi]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f1ea] text-slate-950">
      <nav className="fixed top-0 z-50 w-full border-b border-white/60 bg-background/82 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Brand
            title="ILAC"
            subtitle="Instituto Latino Americano de Coaching"
            titleClassName="text-lg"
            iconClassName="h-8 w-8"
          />
          <div className="hidden items-center gap-6 md:flex">
            <a href="#jornada" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Jornada</a>
            <a href="#processo" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Processo</a>
            <a href="#perfis" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Perfis</a>
            <Link to="/sobre" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Sobre</Link>
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

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#f6f1ea_0%,_#f3eee7_100%)] px-4 pb-24 pt-28 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(199,45,62,0.14),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(12,33,84,0.1),_transparent_30%)]" />
        <div className="container relative mx-auto grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="max-w-4xl animate-reveal-up">
            <SectionLabel>Método PACE</SectionLabel>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.01] text-slate-950 md:text-7xl">
              Uma leitura comportamental que começa antes da resposta.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              O ILAC transforma entrada, entrevista e devolutiva em uma experiência mais humana.
              A pessoa entende o processo, responde com mais presença e sai com uma leitura que faz sentido guardar.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/cadastro">
                <Button size="lg" className="gap-2 px-8 shadow-xl shadow-primary/20">
                  Quero descobrir meu perfil
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="border-primary/20 bg-white/75 px-8">
                  Conhecer o ILAC
                </Button>
              </Link>
            </div>
            <div className="mt-12 max-w-2xl border-l border-primary/15 pl-6 text-sm leading-7 text-slate-600">
              O ILAC apresenta o método com clareza, presença e profundidade antes mesmo da primeira resposta.
            </div>
          </div>

          <div className="grid gap-5 animate-fade-in-soft">
            <div className="flow-card rounded-[2.2rem] border border-white/80 bg-white/92 p-8 shadow-xl shadow-slate-200/50">
              <SectionLabel>Ponto de partida</SectionLabel>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-slate-950">
                O método precisa parecer marca. Não ferramenta improvisada.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Aqui, a forma sustenta o valor da leitura. A leitura, por sua vez, sustenta o valor do método.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="grid gap-5">
                {heroSupports.map((item) => (
                  <div key={item.title} className="flow-card rounded-[1.9rem] border border-white/75 bg-white/84 p-6 shadow-lg shadow-slate-200/35">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/68">{item.title}</div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="flow-card rounded-[2rem] border border-white/75 bg-[linear-gradient(135deg,_rgba(12,33,84,0.96)_0%,_rgba(28,58,128,0.94)_100%)] p-7 text-white shadow-lg shadow-slate-300/30">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Estrutura</div>
                <h3 className="mt-4 max-w-sm font-display text-3xl font-bold leading-tight">
                  Clareza visual e método no mesmo idioma.
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/78">
                  Leitura visual mais humana, linguagem simples e um fluxo pensado tanto para pessoa quanto para empresa.
                </p>
                <div className="mt-8 h-px w-full bg-white/12" />
                <p className="mt-5 max-w-md text-sm leading-7 text-white/66">
                  Um mapa simples para ler energia dominante, sem perder nuance nem parecer ferramenta genérica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" className="relative bg-[linear-gradient(180deg,_#162347_0%,_#0f172a_100%)] px-4 py-24 text-white">
        <div className="section-divider-light absolute left-0 top-0 h-24 w-full" />
        <div className="container relative mx-auto grid gap-14 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="animate-reveal-up">
            <SectionLabel light>Para quem essa experiência existe</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              O mesmo método, com relevância para contextos diferentes.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/72">
              O ILAC atende quem busca autoconhecimento, quem conduz processos de desenvolvimento e quem precisa
              compreender equipes com mais profundidade.
            </p>
          </div>

          <div className="grid gap-4 animate-fade-in-soft">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="flow-card liquid-glass-blue rounded-[2rem] p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">{journeys[0].eyebrow}</div>
                <h3 className="mt-3 font-display text-3xl font-bold">{journeys[0].title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{journeys[0].description}</p>
              </div>
                <div className="flow-card liquid-glass-blue rounded-[2rem] p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">{journeys[1].eyebrow}</div>
                <h3 className="mt-3 font-display text-3xl font-bold">{journeys[1].title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{journeys[1].description}</p>
              </div>
            </div>

              <div className="flow-card liquid-glass-blue rounded-[2rem] p-7 md:max-w-[70%]">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">{journeys[2].eyebrow}</div>
              <h3 className="mt-3 font-display text-3xl font-bold">{journeys[2].title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{journeys[2].description}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="relative bg-[linear-gradient(180deg,_#ffffff_0%,_#faf7f2_100%)] px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl animate-reveal-up">
            <SectionLabel>Como a experiência se move</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Um percurso claro, envolvente e natural do início ao resultado.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              O método se apresenta em ritmo leve, com contexto, clareza e uma leitura que sustenta a decisão de continuar.
            </p>
          </div>

          <div className="mt-14 animate-fade-in-soft">
            <Carousel
              setApi={setProcessApi}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-0">
                {processSteps.map((step, index) => (
                  <CarouselItem key={step.number} className="pl-0 md:basis-[78%] lg:basis-[68%]">
                    <div
                      className={`flow-card min-h-[320px] rounded-[2rem] border p-8 md:p-10 ${
                        index === 1
                          ? 'border-primary/10 bg-[#f4eee6]'
                          : index === 2
                            ? 'border-slate-200 bg-slate-50'
                            : 'border-slate-200 bg-white'
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/60">{step.number}</div>
                      <h3 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                        {step.title}
                      </h3>
                      <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {processSteps.map((step, index) => (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => processApi?.scrollTo(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      processIndex === index ? 'w-10 bg-primary' : 'w-2.5 bg-slate-300'
                    }`}
                    aria-label={`Ir para etapa ${step.number}`}
                  />
                ))}
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Etapa {String(processIndex + 1).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="perfis" className="relative bg-[linear-gradient(180deg,_#efe7dc_0%,_#ebe2d4_100%)] px-4 py-24">
        <div className="section-divider-warm absolute inset-x-0 top-0 h-24" />
        <div className="container relative mx-auto">
          <div className="max-w-3xl animate-reveal-up">
            <SectionLabel>Perfis PACE</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Quatro forças para ler comportamento com mais nuance.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              O foco não é reduzir a pessoa a um tipo. É mostrar a predominância que mais aparece, o apoio que vem do segundo perfil
              e a leitura que isso produz no cotidiano.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-12 animate-fade-in-soft">
            {PROFILE_ORDER.map((key, index) => {
              const profile = PROFILES[key];
              const span = index === 0 ? 'xl:col-span-5' : index === 1 ? 'xl:col-span-7' : index === 2 ? 'xl:col-span-7' : 'xl:col-span-5';
              const tone = index % 2 === 0 ? 'bg-white/88' : 'bg-[#f7f3ed]';
              const accent = profile.color;

              return (
                <div key={key} className={`flow-card overflow-hidden rounded-[2rem] border border-white/70 shadow-lg shadow-slate-200/30 ${span} ${tone}`}>
                  <div className="h-1.5 w-full" style={{ backgroundColor: accent }} />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <ProfileMark profile={profile} size="sm" />
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Perfil PACE</div>
                          <h3 className="mt-2 font-display text-2xl font-bold text-slate-950">{profile.name}</h3>
                        </div>
                      </div>
                      <div className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 md:block">
                        {profile.letter}
                      </div>
                    </div>

                    <div className="mt-5 max-w-xl border-l-2 pl-4 text-sm leading-7 text-slate-700" style={{ borderColor: accent }}>
                      {profileHighlights[key]}
                    </div>

                    <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                      <p className="text-sm leading-7 text-slate-600">{profile.fullDescription}</p>
                      <div className="rounded-[1.35rem] bg-white/72 px-4 py-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Leitura rápida</div>
                        <p className="mt-3 text-sm leading-7 text-slate-700">{profile.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_rgba(12,33,84,1)_0%,_rgba(26,52,114,0.98)_54%,_rgba(160,39,51,0.95)_100%)] px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),_transparent_34%)]" />
        <div className="container relative mx-auto grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="animate-reveal-up">
            <SectionLabel light>O que a pessoa leva</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              A devolutiva precisa ser bonita de ver e útil de aplicar.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/78">
              O resultado não pode parecer um relatório genérico. Ele precisa organizar a leitura, sustentar conversa e abrir caminhos de desenvolvimento.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 animate-fade-in-soft">
              {stats.map(([value, text], index) => (
                <div
                  key={value + text}
                  className={`flow-card rounded-[1.6rem] border border-white/10 px-5 py-5 ${
                    index === 1 ? 'bg-white/10 lg:ml-6' : 'bg-white/6'
                  }`}
                >
                  <div className="font-display text-4xl font-bold">{value}</div>
                  <p className="mt-2 text-sm leading-7 text-white/72">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 animate-fade-in-soft">
            {deliverables.map((item, index) => (
              <div
                key={item}
                className={`flow-card rounded-[1.5rem] border border-white/10 px-5 py-5 text-sm leading-7 text-white/80 ${
                  index === 0 ? 'bg-white/10 lg:col-span-2' : index === 3 ? 'bg-white/10 lg:col-span-2' : 'bg-white/6'
                }`}
              >
                {item}
              </div>
            ))}
            <div className="pt-2 lg:col-span-2">
              <Link to="/cadastro">
                <Button variant="secondary" size="lg" className="gap-2">
                  Quero viver essa experiência
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(180deg,_#f2ebe1_0%,_#f7f4ef_100%)] px-4 py-24">
        <div className="section-divider-dark absolute inset-x-0 top-0 h-20 opacity-20" />
        <div className="container mx-auto grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flow-card rounded-[2rem] border border-white/80 bg-white/88 p-9 shadow-xl shadow-slate-200/45 animate-reveal-up">
            <SectionLabel>Sobre o ILAC</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Um método fica mais forte quando a história por trás dele também aparece.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              Conheça a trajetória, a visão e a base humana que sustentam o ILAC e o método aplicado no projeto.
            </p>
            <div className="mt-8">
              <Link to="/sobre">
                <Button size="lg" className="gap-2">
                  Conhecer a história
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 animate-fade-in-soft">
            <div className="flow-card rounded-[2rem] border border-slate-200 bg-white/74 p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Formação</div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                O ILAC organiza formação, leitura comportamental e desenvolvimento humano em uma experiência mais clara, madura e aplicável.
              </p>
            </div>
            <div className="flow-card rounded-[2rem] border border-slate-200 bg-[#efe6da] p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Aplicação</div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                O método serve tanto para quem busca autoconhecimento quanto para coaches, consultores, liderança e equipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-white">
        <div className="container mx-auto rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-8 text-center">
          <Brand
            stacked
            iconClassName="h-12 w-12"
            titleClassName="text-lg text-white"
            title="ILAC"
            subtitle="Instituto Latino Americano de Coaching"
          />
          <p className="mt-4 text-sm text-white/55">Padrões de Ação e Comportamento Essencial © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

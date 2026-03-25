import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';
import ProfileMark from '@/components/ProfileMark';
import { Button } from '@/components/ui/button';
import { PROFILES, PROFILE_ORDER } from '@/data/profiles';
import { ArrowRight } from 'lucide-react';

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

const valueBlocks = [
  {
    title: 'Leitura clara',
    description:
      'Sem excesso de jargão e sem visual genérico. A proposta é traduzir comportamento em algo legível e memorável.',
    tone: 'bg-white/90',
    span: 'lg:col-span-7',
  },
  {
    title: 'Experiência bonita',
    description:
      'A forma também comunica valor. O site precisa passar segurança, método e presença desde o primeiro scroll.',
    tone: 'bg-[#f4eee6]',
    span: 'lg:col-span-5',
  },
  {
    title: 'Aplicação real',
    description:
      'O que a pessoa recebe precisa servir para devolutiva individual, conversas de liderança e leitura de equipe.',
    tone: 'bg-white/84',
    span: 'lg:col-span-4',
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
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f3ee] text-slate-950">
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

      <section className="relative overflow-hidden px-4 pb-24 pt-28 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(199,45,62,0.15),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(12,33,84,0.12),_transparent_28%)]" />
        <div className="container relative mx-auto grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="max-w-4xl">
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
              Uma boa página de entrada cria clima, contexto e vontade de continuar. Não basta abrir a porta da avaliação.
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <div className="rounded-[2.2rem] border border-white/80 bg-white/90 p-8 shadow-xl shadow-slate-200/50 lg:col-span-12">
              <SectionLabel>Ponto de partida</SectionLabel>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-slate-950">
                O método precisa parecer marca. Não ferramenta improvisada.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                Aqui, a forma sustenta o valor da leitura. A leitura, por sua vez, sustenta o valor do método.
              </p>
            </div>

            {valueBlocks.map((item) => (
              <div
                key={item.title}
                className={`rounded-[1.9rem] border border-white/75 p-6 shadow-lg shadow-slate-200/35 ${item.tone} ${item.span}`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/68">{item.title}</div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}

            <div className="rounded-[1.9rem] border border-white/75 bg-[linear-gradient(135deg,_rgba(12,33,84,0.94)_0%,_rgba(28,58,128,0.92)_100%)] p-6 text-white shadow-lg shadow-slate-300/30 lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Clareza</div>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/78">
                Leitura visual mais humana, linguagem simples e um fluxo pensado tanto para pessoa quanto para empresa.
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-white/75 bg-white/80 p-6 shadow-lg shadow-slate-200/35 lg:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/68">Estrutura</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Um mapa simples para ler energia dominante, sem perder nuance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" className="relative bg-slate-950 px-4 py-24 text-white">
        <div className="absolute left-0 top-0 h-24 w-full bg-[linear-gradient(180deg,_rgba(245,243,238,1)_0%,_rgba(15,23,42,0)_100%)]" />
        <div className="container relative mx-auto grid gap-14 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <SectionLabel light>Para quem essa experiência existe</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              O mesmo método, com relevância para contextos diferentes.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/72">
              A home precisa mostrar amplitude sem ficar difusa. O ILAC fala com quem busca autoconhecimento,
              com quem conduz processos e com quem precisa ler equipes de forma madura.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/6 p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">{journeys[0].eyebrow}</div>
                <h3 className="mt-3 font-display text-3xl font-bold">{journeys[0].title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{journeys[0].description}</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.12)_0%,_rgba(255,255,255,0.04)_100%)] p-7">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">{journeys[1].eyebrow}</div>
                <h3 className="mt-3 font-display text-3xl font-bold">{journeys[1].title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{journeys[1].description}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-7 md:max-w-[70%]">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">{journeys[2].eyebrow}</div>
              <h3 className="mt-3 font-display text-3xl font-bold">{journeys[2].title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{journeys[2].description}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="relative bg-white px-4 py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <SectionLabel>Como a experiência se move</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Um fluxo em sequência, não uma tela jogada com botões.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Cada seção prepara a próxima: apresenta, envolve, explica, mostra possibilidades e só então chama para a ação.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr_0.9fr]">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`rounded-[2rem] border p-8 ${
                  index === 1
                    ? 'border-primary/10 bg-[#f4eee6] lg:translate-y-8'
                    : index === 2
                      ? 'border-slate-200 bg-slate-50'
                      : 'border-slate-200 bg-white'
                }`}
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/60">{step.number}</div>
                <h3 className="mt-4 font-display text-3xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="perfis" className="relative bg-[#eee6dc] px-4 py-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,_rgba(255,255,255,1)_0%,_rgba(238,230,220,0)_100%)]" />
        <div className="container relative mx-auto">
          <div className="max-w-3xl">
            <SectionLabel>Perfis PACE</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Quatro forças para ler comportamento com mais nuance.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              O foco não é reduzir a pessoa a um tipo. É mostrar a predominância que mais aparece, o apoio que vem do segundo perfil
              e a leitura que isso produz no cotidiano.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
            {PROFILE_ORDER.map((key, index) => {
              const profile = PROFILES[key];
              const span = index === 0 ? 'xl:col-span-5' : index === 1 ? 'xl:col-span-7' : index === 2 ? 'xl:col-span-7' : 'xl:col-span-5';
              const tone = index % 2 === 0 ? 'bg-white/88' : 'bg-[#f7f3ed]';

              return (
                <div key={key} className={`rounded-[2rem] border border-white/70 p-6 shadow-lg shadow-slate-200/30 ${span} ${tone}`}>
                  <ProfileMark profile={profile} size="sm" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">{profile.name}</h3>
                  <p className="mt-3 text-sm font-medium text-slate-700">{profile.shortDescription}</p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{profile.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_rgba(12,33,84,1)_0%,_rgba(24,50,112,1)_56%,_rgba(199,45,62,0.93)_100%)] px-4 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_28%)]" />
        <div className="container relative mx-auto grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel light>O que a pessoa leva</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              A devolutiva precisa ser bonita de ver e útil de aplicar.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/78">
              O resultado não pode parecer um relatório genérico. Ele precisa organizar a leitura, sustentar conversa e abrir caminhos de desenvolvimento.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map(([value, text], index) => (
                <div
                  key={value + text}
                  className={`rounded-[1.6rem] border border-white/10 px-5 py-5 ${
                    index === 1 ? 'bg-white/10 lg:ml-6' : 'bg-white/6'
                  }`}
                >
                  <div className="font-display text-4xl font-bold">{value}</div>
                  <p className="mt-2 text-sm leading-7 text-white/72">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {deliverables.map((item, index) => (
              <div
                key={item}
                className={`rounded-[1.5rem] border border-white/10 px-5 py-5 text-sm leading-7 text-white/80 ${
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

      <section className="bg-[#f3eee7] px-4 py-24">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2rem] border border-white/80 bg-white/88 p-9 shadow-xl shadow-slate-200/45">
            <SectionLabel>Sobre o ILAC</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Um método fica mais forte quando a história por trás dele também aparece.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              A página Sobre abre espaço para apresentar a visão, a origem e a trajetória por trás do projeto.
              Ela não concorre com a landing principal; ela aprofunda a confiança.
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

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-slate-200 bg-white/74 p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Próximo passo</div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                A home agora conduz com mais respiro, alterna temperatura visual entre seções e cria uma jornada mais contínua.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-[#efe6da] p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Mais presença</div>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Quando você mandar as fotos do Ademir, a página Sobre vai ganhar o peso humano que falta para fechar o conjunto.
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

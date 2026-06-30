import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Layers3,
  MessageSquareMore,
  MonitorSmartphone,
  Rocket,
  ServerCog,
} from 'lucide-react';
import Brand from '@/components/Brand';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const serviceTracks = [
  {
    title: 'Sites institucionais e comerciais',
    description:
      'Landing pages, páginas de venda, sites institucionais e estruturas de captação com identidade forte e foco em conversão.',
    icon: Globe,
    tag: 'Presença digital',
  },
  {
    title: 'Aplicativos e plataformas',
    description:
      'Apps, áreas logadas, painéis internos e produtos digitais desenhados para operação, escala e experiência limpa.',
    icon: MonitorSmartphone,
    tag: 'Produto',
  },
  {
    title: 'Sistemas sob medida',
    description:
      'Fluxos internos, gestão, cadastros, dashboards e automações conectadas ao funcionamento real do negócio.',
    icon: ServerCog,
    tag: 'Operação',
  },
  {
    title: 'IAs e automações',
    description:
      'Assistentes, agentes, automações inteligentes e integração com dados para reduzir atrito e aumentar velocidade.',
    icon: Bot,
    tag: 'Inteligência',
  },
];

const processSteps = [
  {
    title: 'Diagnóstico',
    text: 'Entendimento do objetivo, gargalo operacional, fluxo de atendimento e maturidade digital do projeto.',
    icon: MessageSquareMore,
  },
  {
    title: 'Arquitetura',
    text: 'Definição de estrutura, stack, escopo de telas, integrações e prioridade de entrega antes de construir.',
    icon: Layers3,
  },
  {
    title: 'Entrega aplicada',
    text: 'Desenvolvimento, refinamento visual, testes e publicação com foco em uso real, não em demo bonita.',
    icon: Rocket,
  },
];

const productRows = [
  ['Sites', 'Institucionais, páginas comerciais, páginas de captura e presença digital com linguagem de marca.'],
  ['Apps', 'Aplicativos, áreas de cliente, jornadas mobile e experiências digitais com lógica de produto.'],
  ['Sistemas', 'Operação interna, CRM leve, dashboards, cadastros, relatórios e rotinas administrativas.'],
  ['IAs', 'Agentes, automações, copilots e experiências assistidas com IA integradas ao negócio.'],
];

const proofPoints = [
  'Design com presença de marca e leitura profissional.',
  'Código voltado para uso real, não template genérico.',
  'Estrutura técnica pensada para crescimento futuro.',
  'Execução guiada por clareza de negócio e não só estética.',
];

const executionRows = [
  ['Sites & landing pages', 'Presença forte', 'Marca, conversão e clareza comercial.'],
  ['Apps & áreas logadas', 'Fluxo utilizável', 'Jornadas pensadas para uso recorrente.'],
  ['Sistemas & painéis', 'Rotina organizada', 'Processos internos com dados visíveis.'],
  ['IA & automações', 'Escala operacional', 'Atendimento, análise e tarefas assistidas.'],
];

const architectureItems = [
  { icon: Layers3, title: 'Arquitetura de produto', text: 'Escopo, prioridade e estrutura antes da implementação.' },
  { icon: LayoutDashboard, title: 'Experiência de uso', text: 'Fluxos limpos, legibilidade e hierarquia visual de verdade.' },
  { icon: Database, title: 'Dados e integrações', text: 'Banco, automações, serviços externos e operação conectada.' },
  { icon: Code2, title: 'Código evolutivo', text: 'Base preparada para manutenção, expansão e continuidade.' },
];

const Technology = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#07111f] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <div className="container mx-auto flex min-w-0 items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="/" className="min-w-0 flex-shrink">
            <Brand
              title="ILAC Tec"
              subtitle="Tecnologia aplicada a negócio"
              titleClassName="text-base text-white sm:text-2xl"
              subtitleClassName="mt-0 hidden max-w-[220px] text-[0.56rem] font-bold uppercase leading-[1.35] tracking-[0.16em] text-white/55 lg:block lg:max-w-none lg:text-[0.6rem] lg:tracking-[0.2em]"
              iconClassName="h-8 w-8 brightness-0 invert sm:h-10 sm:w-10"
            />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#entregas" className="text-sm font-semibold text-white/72 transition hover:text-white">
              Entregas
            </a>
            <a href="#processo" className="text-sm font-semibold text-white/72 transition hover:text-white">
              Processo
            </a>
            <a href="#estrutura" className="text-sm font-semibold text-white/72 transition hover:text-white">
              Estrutura
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a href="/" className="hidden sm:block">
              <Button
                variant="outline"
                className="rounded-full border-white/15 bg-transparent px-5 text-white hover:bg-white/8 hover:text-white"
              >
                Voltar ao ILAC
              </Button>
            </a>
            <a href="https://wa.me/5521979951415" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-primary px-5 text-white hover:bg-primary/90 sm:px-6">
                Falar sobre um projeto
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 px-4 pb-20 pt-24 sm:pb-28 sm:pt-28">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,22,39,0.98),rgba(5,9,16,1)_58%,rgba(10,28,46,0.98))]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

          <div className="container relative z-10 mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-6xl"
            >
              <motion.div variants={fadeInUp} className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                <div className="space-y-8">
                  <div className="editorial-heading-block border-primary/80 pl-4 sm:pl-6">
                    <h1 className="max-w-[10ch] font-display text-[2.45rem] font-bold leading-[0.92] text-white sm:max-w-none sm:text-6xl lg:text-[5.5rem]">
                      Tecnologia com forma de marca e estrutura de negócio.
                    </h1>
                  </div>

                  <p className="max-w-[22rem] text-base leading-8 text-white/72 sm:max-w-3xl sm:text-2xl sm:leading-relaxed">
                    O ILAC Tec desenvolve <strong className="text-white">sites, IAs, sistemas e apps</strong> para empresas que precisam de presença digital forte, operação mais inteligente e produto mais bem resolvido.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a href="https://wa.me/5521979951415" target="_blank" rel="noopener noreferrer">
                      <Button className="h-14 w-full rounded-full bg-primary px-7 text-base text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 sm:w-auto">
                        Conversar sobre tecnologia
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#entregas">
                      <Button
                        variant="outline"
                        className="h-14 w-full rounded-full border-white/12 bg-transparent px-7 text-base text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white sm:w-auto"
                      >
                        Ver frentes de entrega
                      </Button>
                    </a>
                  </div>
                </div>

                <motion.div variants={fadeInUp} className="border-y border-white/16 py-5">
                  <div className="mb-5 flex items-end justify-between gap-4 border-b border-white/12 pb-5">
                    <div>
                      <div className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white/40">
                        Painel de execução
                      </div>
                      <div className="mt-2 text-xl font-semibold text-white">Entrega com direção</div>
                    </div>
                    <div className="border border-emerald-400/25 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Operação ativa
                    </div>
                  </div>

                  <div className="divide-y divide-white/12">
                    {executionRows.map(([label, value, detail]) => (
                      <div key={label} className="grid gap-3 py-4 sm:grid-cols-[0.7fr_0.7fr_1fr] sm:items-center">
                        <div className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/42">
                          {label}
                        </div>
                        <div className="text-lg font-semibold text-white">{value}</div>
                        <p className="text-sm leading-6 text-white/58">{detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="entregas" className="border-t border-slate-200 bg-white px-4 py-20 text-slate-950 sm:py-28">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
            >
              <div className="max-w-xl">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/72">Frentes</div>
                <div className="editorial-heading-block mt-5 max-w-xl">
                  <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
                    O que o ILAC Tec constrói na prática.
                  </h2>
                </div>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl lg:pt-1">
                Não é um braço experimental. É uma frente pensada para desenvolver presença digital, estrutura de produto e inteligência operacional com o mesmo critério de clareza e consistência do ILAC principal.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid border-t border-slate-200 md:grid-cols-2"
            >
              {serviceTracks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="group border-b border-slate-200 py-9 md:px-8 md:odd:border-r"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary/68">
                          {item.tag}
                        </div>
                        <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">{item.title}</h3>
                      </div>
                      <Icon className="h-7 w-7 shrink-0 text-primary" />
                    </div>
                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section id="estrutura" className="border-t border-white/10 bg-[#091524] px-4 py-20 text-white sm:py-28">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid gap-14 lg:grid-cols-[1fr_1fr]"
            >
              <motion.div variants={fadeInUp}>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">Estrutura</div>
                <div className="editorial-heading-block mt-5 border-white/24">
                  <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                    Design claro na frente. Base técnica sólida por trás.
                  </h2>
                </div>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  A referência visual é forte, mas a entrega não para na estética. O ILAC Tec organiza interface, lógica, dados, integrações e evolução futura em uma mesma conversa.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="border-y border-white/14">
                <div className="divide-y divide-white/12">
                  {architectureItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="grid gap-5 py-6 sm:grid-cols-[3rem_1fr]">
                        <Icon className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-white/62">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="processo" className="border-t border-slate-200 bg-[#f7f9fc] px-4 py-20 text-slate-950 sm:py-28">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="mb-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"
            >
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/72">Processo</div>
                <div className="editorial-heading-block mt-5">
                  <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
                    Como o ILAC Tec conduz um projeto.
                  </h2>
                </div>
              </div>
              <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                O projeto precisa fazer sentido no negócio antes de virar tela. Por isso a entrega passa por leitura, estruturação e execução aplicada.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="editorial-grid-light grid gap-8 py-2 md:grid-cols-3 md:gap-0"
            >
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div key={step.title} variants={fadeInUp} className="editorial-grid-cell-light md:px-8">
                    <Icon className="h-7 w-7 text-primary" />
                    <div className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary/68">
                      Etapa {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-4 text-base leading-8 text-slate-600">{step.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white px-4 py-20 text-slate-950 sm:py-28">
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <motion.div variants={fadeInUp}>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/72">Cobertura</div>
                <div className="editorial-heading-block mt-5 max-w-2xl">
                  <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
                    Uma frente para construir do site até a inteligência de operação.
                  </h2>
                </div>

                <div className="mt-10 space-y-4">
                  {proofPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-base leading-8 text-slate-700 sm:text-lg">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="border-y border-slate-200">
                <div className="divide-y divide-slate-200">
                  {productRows.map(([label, text]) => (
                    <div key={label} className="grid gap-4 py-6 sm:grid-cols-[8rem_1fr]">
                      <div className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary/68">
                        {label}
                      </div>
                      <p className="text-base leading-8 text-slate-700">{text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-4 py-20 text-white sm:py-28">
          <div aria-hidden="true" className="absolute -right-40 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="container mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="relative grid gap-12 border-y border-white/12 py-12 lg:grid-cols-[1.08fr_0.92fr]"
            >
              <motion.div variants={fadeInUp}>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">Próximo passo</div>
                <div className="editorial-heading-block mt-5 border-white/24">
                  <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
                    Se a tecnologia precisa sustentar a presença ou a operação, o ILAC Tec entra.
                  </h2>
                </div>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                  A conversa certa aqui não é “qual ferramenta usar”, mas sim “o que o projeto precisa resolver e como estruturar isso bem”.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col justify-between gap-8">
                <div className="editorial-rail-dark py-3">
                  <div className="editorial-rail-item-dark pb-5">
                    <div className="marketing-kicker text-white/42">Contato</div>
                    <p className="mt-3 text-base leading-8 text-white/78">
                      Projetos sob medida para presença digital, sistemas internos, automações e soluções com IA.
                    </p>
                  </div>
                  <div className="editorial-rail-item-dark py-5">
                    <div className="marketing-kicker text-primary/80">Canal direto</div>
                    <p className="mt-3 text-xl font-semibold text-white">(21) 97995-1415</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="https://wa.me/5521979951415" target="_blank" rel="noopener noreferrer">
                    <Button className="h-14 w-full rounded-full bg-primary px-7 text-base text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 sm:w-auto">
                      Falar com o ILAC Tec
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="/">
                    <Button
                      variant="outline"
                      className="h-14 w-full rounded-full border-white/12 bg-transparent px-7 text-base text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white sm:w-auto"
                    >
                      Voltar ao ILAC
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Technology;

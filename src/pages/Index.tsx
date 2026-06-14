import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Shield, Zap } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const stats = [
  ['20+', 'Anos de experiência no desenvolvimento de negócios'],
  ['1', 'Foco único: transformar comportamento em resultado'],
  ['100%', 'Aplicação direta no ambiente e rotina da sua empresa'],
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico',
    icon: <Target className="h-6 w-6" />,
    description:
      'Análise do cenário atual para identificar os pontos que impactam diretamente a performance.',
  },
  {
    number: '02',
    title: 'Intervenção',
    icon: <Zap className="h-6 w-6" />,
    description:
      'Aplicação prática com foco em comportamento, tomada de decisão e execução real diária.',
  },
  {
    number: '03',
    title: 'Consolidação',
    icon: <Shield className="h-6 w-6" />,
    description:
      'Acompanhamento estruturado para garantir que a mudança seja sustentada no dia a dia da operação.',
  },
];

const solutionTracks = [
  {
    label: 'B2B / Corporativo',
    title: 'ILAC InCompany',
    description:
      'Treinamentos diretos aos times, lideranças e diretorias. Intervenções personalizadas para destravar gargalos de execução dentro do negócio real.',
    bullets: [
      'Sessões executivas de alta performance',
      'Alinhamento prático de gestores',
      'Perfis e contratação com Método PACE',
    ],
    supportTitle: 'Quando faz sentido',
    supportText:
      'Para operações que já têm talento, mas ainda perdem ritmo, clareza e consistência na execução.',
    href: '/incompany',
    cta: 'Construir Projeto Corporativo',
    cardTone: 'border-white/10 bg-white/6',
    panelTone: 'border-white/8 bg-black/18',
  },
  {
    label: 'B2C / Carreira',
    title: 'Formações & Certificações',
    description:
      'Desenvolvimento de carreira com metodologia internacional, aplicação prática e estrutura suficiente para formar profissionais mais sólidos.',
    bullets: [
      'Formação de coaches internacionais',
      'Oratória, apresentação e influência',
      'Aprofundamento no Método das 7 Habilidades',
    ],
    supportTitle: 'O que a pessoa encontra',
    supportText:
      'Formação consistente, direção técnica e repertório aplicável para quem quer crescer com base real, não só discurso.',
    href: '/programas',
    cta: 'Explorar Grade de Formações',
    cardTone: 'border-primary/20 bg-primary/10',
    panelTone: 'border-white/8 bg-white/6',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const SectionLabel = ({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) => (
  <motion.div
    variants={fadeInUp}
    className={`text-sm font-semibold uppercase tracking-[0.24em] ${
      light ? 'text-white/55' : 'text-primary/72'
    }`}
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f9fa] text-slate-950">
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-black px-4 py-16 text-white sm:py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1C3A80]/60 via-black/90 to-black" />
        </div>

        <div className="container relative z-10 mx-auto grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <SectionLabel light>Instituto Latino Americano de Coaching</SectionLabel>
            <motion.h1
              variants={fadeInUp}
              className="mt-6 font-display text-[2.85rem] font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Transformação em Performance Empresarial.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:mt-8 sm:text-xl sm:leading-8"
            >
              Empresas contratam pela promessa. Mas demitem pela realidade. O ILAC
              atua onde a maioria das soluções não alcança:{' '}
              <strong>o comportamento que sustenta a performance.</strong>
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/cadastro?type=empresa">
                <Button
                  size="lg"
                  className="w-full gap-2 rounded-full bg-primary px-6 py-6 text-base text-white shadow-2xl shadow-primary/30 transition-transform hover:scale-105 sm:w-auto sm:px-8 sm:py-7 sm:text-lg"
                >
                  Conversar com especialista
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-white/20 bg-white/5 px-6 py-6 text-base backdrop-blur-sm hover:bg-white/10 hover:text-white sm:w-auto sm:px-8 sm:py-7 sm:text-lg"
                >
                  Conhecer o Instituto
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white px-4 py-20 sm:py-32">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                className="text-sm font-bold uppercase tracking-widest text-destructive"
              >
                O Erro
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="border-l-4 border-destructive pl-5 font-display text-3xl font-bold leading-tight text-slate-900 sm:pl-6 sm:text-5xl"
              >
                Empresas tratam sintomas. Mas ignoram a causa.
              </motion.h2>
              <motion.p variants={fadeInUp} className="pl-7 text-lg leading-8 text-slate-600">
                Treinamentos técnicos, substituição constante de profissionais e
                ajustes operacionais geram melhora momentânea.
                <strong> Mas não sustentam resultado.</strong> Porque não atuam no
                comportamento estratégico e de grupo que de fato alavanca a execução.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="space-y-6 lg:mt-24"
            >
              <motion.div
                variants={fadeInUp}
                className="text-sm font-bold uppercase tracking-widest text-orange-500"
              >
                O Custo
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="border-l-4 border-orange-500 pl-5 font-display text-3xl font-bold leading-tight text-slate-900 sm:pl-6 sm:text-5xl"
              >
                O impacto financeiro silencioso.
              </motion.h2>
              <motion.ul
                variants={staggerContainer}
                className="space-y-3 pl-7 text-lg leading-8 text-slate-600"
              >
                {[
                  'Queda contínua de produtividade e retrabalho.',
                  'Falhas críticas na comunicação interna.',
                  'Decisões desalinhadas com a macroestratégia.',
                ].map((item) => (
                  <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                    <span className="mt-1 font-bold text-orange-500">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p variants={fadeInUp} className="pl-7 text-lg font-medium text-slate-900">
                Melhorar pessoas é mais eficiente e mais econômico do que
                substituí-las continuamente.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-4 py-20 sm:py-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <SectionLabel>O Método ILAC</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl"
            >
              Como transformamos cenários de estagnação.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-xl text-slate-600">
              Cada empresa tem um cenário distinto. Mas a lógica estruturada de
              transformação é a mesma.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="relative grid gap-8 md:grid-cols-3"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute left-10 right-10 top-[40px] z-0 hidden h-0.5 origin-left bg-slate-200 md:block"
            />

            {processSteps.map((step) => (
              <motion.div
                variants={fadeInUp}
                key={step.number}
                className="group relative z-10 flex flex-col items-center bg-transparent text-center"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  {step.icon}
                </div>
                <div className="mb-3 text-sm font-bold tracking-widest text-primary">
                  PASSO {step.number}
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="max-w-sm text-lg leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050b14] py-32 text-white">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050b14] to-[#050b14]" />
        <div className="container relative z-10 mx-auto space-y-10">
          {solutionTracks.map((track) => (
            <motion.div
              key={track.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className={`grid gap-8 rounded-[2rem] border p-8 shadow-2xl lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12 ${track.cardTone}`}
            >
              <motion.div variants={fadeInUp} className="space-y-8">
                <SectionLabel light>{track.label}</SectionLabel>
                <h3 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
                  {track.title}
                </h3>
                <p className="text-lg font-light leading-relaxed text-white/72 sm:text-2xl">
                  {track.description}
                </p>
                <ul className="space-y-4 text-base font-medium text-white/82 sm:text-lg">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link to={track.href}>
                    <Button
                      size="lg"
                      className="group w-full rounded-full bg-primary px-8 py-6 text-base shadow-2xl shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/80 sm:w-auto sm:px-10 sm:py-8 sm:text-lg"
                    >
                      {track.cta}
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid content-start gap-4 self-stretch">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    {track.supportTitle}
                  </div>
                  <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg">
                    {track.supportText}
                  </p>
                </div>
                {track.bullets.map((bullet, index) => (
                  <div
                    key={`${track.title}-${index}`}
                    className={`rounded-[1.5rem] border p-5 ${track.panelTone}`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                      Frente {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="mt-3 text-base font-medium leading-7 text-white/82">
                      {bullet}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-20 sm:py-32">
        <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 relative flex justify-center lg:order-1"
          >
            <div className="absolute inset-0 scale-75 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
              <img src="/ademir.jpeg" alt="Ademir Soares" className="h-full w-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <SectionLabel>Quem Conduz</SectionLabel>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl"
            >
              Ademir Soares
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="mb-6 mt-2 text-sm font-semibold uppercase tracking-wide text-primary"
            >
              CEO e Master Coach
            </motion.div>
            <motion.p variants={fadeInUp} className="mb-6 text-lg leading-8 text-slate-600">
              Com mais de duas décadas de experiência atuando diretamente no
              desenvolvimento de pessoas e empresas, Ademir possui um histórico
              focado em transformação de comportamento no ambiente corporativo.
            </motion.p>
            <motion.p variants={fadeInUp} className="mb-10 text-lg leading-8 text-slate-600">
              Ao longo de 20 anos, o trabalho foi direcionado para um único
              objetivo: transformar comportamento em performance real e escalável
              dentro de empresas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/sobre">
                <Button size="lg" className="gap-2 rounded-full px-8 py-6">
                  Conhecer a história <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="container relative z-10 mx-auto max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-8 font-display text-3xl font-bold text-white sm:text-6xl"
          >
            Performance não se resolve com mais teoria. Resolve-se com Ação
            Direcionada.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-12 text-xl text-white/70">
            O objetivo não é ensinar. É gerar transformação aplicável que ressoe
            em toda a sua cadeia de negócios.
          </motion.p>
          <motion.div
            variants={staggerContainer}
            className="mb-16 grid grid-cols-1 gap-6 text-left md:grid-cols-3"
          >
            {stats.map(([value, text], index) => (
              <motion.div
                variants={fadeInUp}
                key={index}
                className="border-l-2 border-primary/50 py-2 pl-6"
              >
                <div className="mb-2 font-display text-4xl font-bold text-white">{value}</div>
                <div className="text-sm leading-relaxed text-white/60">{text}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link to="/cadastro?type=empresa">
              <Button
                size="lg"
                className="w-full rounded-full px-12 py-8 text-xl font-bold shadow-2xl shadow-primary/20 md:w-auto"
              >
                Vamos Conversar
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;

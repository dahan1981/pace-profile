import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const PROGRAMAS = [
  {
    id: 'plc',
    tag: 'Certificação Internacional',
    title: 'PLC - Professional Life Coach',
    description:
      'Formação completa em coaching focada em desenvolvimento pessoal e transição de vida. Você dominará metodologias de intervenção atuais para alavancar vidas e promover mudanças estruturais duradouras.',
    highlights: [
      'Base metodológica sólida',
      'Aplicação prática desde o início',
      'Transição de vida com direção',
    ],
  },
  {
    id: 'alc',
    tag: 'Liderança',
    title: 'ALC - Advanced Leader Coach',
    description:
      'Programa de imersão avançado para líderes que buscam transformar equipes através da metodologia coaching, elevando a performance do setor com processos de autossuficiência e feedback prático.',
    highlights: [
      'Liderança aplicada ao cotidiano',
      'Feedback com estrutura',
      'Equipes mais autossuficientes',
    ],
  },
  {
    id: 'pec',
    tag: 'Executivos',
    title: 'PEC - Professional Executive Coach',
    description:
      'Certificação focada no ambiente corporativo e no desenvolvimento de executivos de alta performance, C-levels e diretorias de alto impacto.',
    highlights: [
      'Ambiente executivo real',
      'Decisão e posicionamento',
      'Leitura de contexto corporativo',
    ],
  },
  {
    id: 'pmc',
    tag: 'Maestria',
    title: 'PMC - Professional Master Coach',
    description:
      'A formação de mais alto nível para dominar técnicas e ferramentas avançadas de coaching. Para profissionais que já trilham a estrada e buscam excelência absoluta.',
    highlights: [
      'Profundidade técnica',
      'Maestria em condução',
      'Excelência profissional',
    ],
  },
  {
    id: 'pace',
    tag: 'Comportamental',
    title: 'Analista Comportamental PACE',
    description:
      'Certificação para mapeamento profundo de perfil focado em resultados empresariais. Uma ferramenta para recrutar, gerir e engajar com máxima precisão.',
    highlights: [
      'Leitura comportamental clara',
      'Aplicação em gestão',
      'Uso estratégico em seleção',
    ],
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

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Programas = () => {
  return (
    <div className="min-h-screen bg-[#f2f4f7] pb-0 text-slate-900">
      <section className="relative overflow-hidden bg-black px-4 pb-40 pt-32 text-white sm:pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/60 via-slate-950 to-black" />
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]"
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container relative z-10 mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
            Carreiras & Formações
          </div>
          <h1 className="mb-8 font-display text-[2.85rem] font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-[6rem]">
            Sua Próxima Evolução{' '}
            <span className="border-b-4 border-primary text-primary">Profissional.</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base font-light leading-7 text-white/70 sm:text-2xl sm:leading-relaxed">
            Esqueça apenas teoria. Desenvolva-se através de métodos certificados
            que entregam prática real.
          </p>
        </motion.div>
      </section>

      <section className="relative z-20">
        {PROGRAMAS.map((prog, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={prog.id}
              id={prog.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-150px' }}
              className="relative overflow-hidden"
            >
              <div className="container mx-auto grid items-start gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[30vw] font-bold text-slate-900/[0.03]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <motion.div
                  variants={isEven ? fadeLeft : fadeRight}
                  className={`relative z-10 space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
                    {prog.tag}
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    {prog.title}
                  </h2>
                  <p className="text-lg font-light leading-relaxed text-slate-600 sm:text-xl">
                    {prog.description}
                  </p>
                  <div className="pt-4">
                    <Link to="/cadastro?type=individual">
                      <Button
                        size="lg"
                        className="group h-14 w-full rounded-full bg-slate-900 px-8 text-base text-white shadow-xl shadow-slate-900/10 transition-all hover:scale-105 hover:bg-primary sm:h-16 sm:w-auto sm:px-10 sm:text-lg"
                      >
                        Tenho interesse
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  variants={isEven ? fadeRight : fadeLeft}
                  className={`marketing-card-light relative z-10 grid content-start gap-4 self-stretch rounded-[2rem] p-6 lg:rounded-[2.5rem] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="marketing-card-light rounded-[1.5rem] p-6 shadow-none">
                    <div className="marketing-kicker text-primary/70">
                      Leitura rápida
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-700">
                      Formação pensada para sair do conceito e entrar em aplicação
                      concreta, com direção mais madura sobre pessoas, processo e
                      desenvolvimento.
                    </p>
                  </div>
                  {prog.highlights.map((item, itemIndex) => (
                    <div
                      key={`${prog.id}-${itemIndex}`}
                      className="marketing-card-soft rounded-[1.35rem] p-5"
                    >
                      <div className="marketing-kicker text-slate-500">
                        Destaque {String(itemIndex + 1).padStart(2, '0')}
                      </div>
                      <p className="mt-3 text-base font-medium leading-7 text-slate-800">
                        {item}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {index < PROGRAMAS.length - 1 && (
                <div className="container mx-auto">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </div>
              )}
            </motion.div>
          );
        })}
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInUp}
        className="relative bg-slate-100 px-4 py-32"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Pronto para transformar sua carreira no ILAC?
          </h2>
          <p className="mb-12 text-lg font-light text-slate-600 sm:text-xl">
            Nossas turmas são estruturadas visando certificação sólida e extensões
            acadêmicas validadas em nível nacional.
          </p>
          <Link to="/cadastro?type=individual">
            <Button
              size="lg"
              className="w-full rounded-full bg-primary px-10 py-6 text-lg shadow-2xl shadow-primary/30 transition-transform hover:scale-105 sm:w-auto sm:px-12 sm:py-8 sm:text-xl"
            >
              Fale com um Consultor Especialista
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Programas;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const foundationPoints = [
  'Leitura de comportamento aplicada ao ambiente empresarial.',
  'Intervenção voltada para execução, clareza e consistência.',
  'Desenvolvimento humano com validação prática no campo.',
];

const milestones = [
  'Formação humanística e aprofundamento em escuta, desenvolvimento e comportamento humano.',
  'Atuação em abordagens clínicas e integrativas, ampliando a leitura sobre mente e processo humano.',
  'Especializações e certificações em coaching, inteligência emocional e análise comportamental.',
];

const finalPillars = [
  'Método para sustentar transformação no longo prazo.',
  'Escuta para identificar a raiz antes da intervenção.',
  'Direção para converter desenvolvimento em ação real.',
];

const AboutAdemir = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-0 text-slate-900">
      <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b-[12px] border-primary bg-slate-950 px-4 pb-24 pt-24 text-white sm:pt-40 md:pb-40 md:pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950 to-slate-950" />
          <div className="absolute right-0 top-0 z-10 h-full w-1/2 bg-[linear-gradient(90deg,_rgba(2,6,23,1)_0%,_rgba(255,255,255,0)_100%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container relative z-10 mx-auto"
        >
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-8 bg-white/30" /> A História
            </div>
            <h1 className="mb-10 font-display text-[2.85rem] font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
              O Poder do Comportamento <br />
              <span className="italic text-primary">Aplicado.</span>
            </h1>
            <p className="mb-12 max-w-2xl text-base font-light leading-7 text-white/70 sm:text-2xl sm:leading-relaxed">
              Transformar pessoas não é um fim em si mesmo. É o caminho validado para transformar
              os resultados de uma corporação inteira.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-10 right-8 hidden w-[30rem] lg:block"
        >
          <div className="editorial-rail-dark px-2">
            <div className="py-3 text-white/45">
              <div className="marketing-kicker">Em que a história se apoia</div>
            </div>
            {foundationPoints.map((point, index) => (
              <div key={point} className="editorial-rail-item-dark py-5">
                <div className="marketing-kicker text-primary/80">Base {String(index + 1).padStart(2, '0')}</div>
                <p className="mt-3 text-base leading-7 text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className="container mx-auto">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-28">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
              className="top-0 space-y-8 lg:sticky lg:top-32"
            >
              <div className="border-l-4 border-primary pl-6">
                <div className="marketing-kicker text-primary/65">Síntese institucional</div>
                <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                  Desenvolvimento humano com consequência prática.
                </h3>
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                  O ILAC foi estruturado para transformar comportamento em direção aplicável, tanto
                  para pessoas quanto para contextos organizacionais mais exigentes.
                </p>
              </div>

              <div className="editorial-rail-light max-w-[320px] py-5">
                <div className="marketing-kicker text-primary/60">Histórico</div>
                <h3 className="mt-4 font-display text-4xl font-bold text-primary sm:text-5xl">20+</h3>
                <p className="mt-3 text-base font-medium leading-7 text-slate-700">
                  Anos transformando comportamentos em escala.
                </p>
              </div>
            </motion.div>

            <div className="space-y-24 pt-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <div className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">A Fundação</div>
                <div className="editorial-heading-block mb-8 max-w-3xl">
                  <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
                    Uma tese construída nas trincheiras da rotina empresarial.
                  </h2>
                </div>
                <div className="space-y-6 text-lg font-light leading-relaxed text-slate-600 sm:text-xl">
                  <p>
                    Ao longo de mais de duas décadas, a atuação sempre foi pautada em observar um
                    denominador comum: a frustração corporativa em contratar talentos brilhantes no
                    currículo que ruíam na execução colaborativa.
                  </p>
                  <p>
                    O ILAC nasce como uma frente institucional focada em criar e homologar
                    metodologias reais para intervir nisso.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
              >
                <div className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Ademir Soares</div>
                <div className="editorial-heading-block mb-8 max-w-3xl">
                  <h2 className="font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
                    O Master Coach por trás da arquitetura do ILAC.
                  </h2>
                </div>
                <div className="space-y-6 text-lg font-light leading-relaxed text-slate-600 sm:text-xl">
                  <p>
                    Como CEO e Master Coach, Ademir consolidou experiência prática desenvolvendo
                    C-levels de empresas multinacionais e estruturando imersões profundas desenhadas
                    para quebrar vieses limitantes de equipes.
                  </p>
                  <p>
                    A crença é direta: teoria não muda resultado se não esbarrar na execução. Por
                    isso cada braço do ILAC carrega validação acadêmica e resultado de campo.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeInUp}
                className="editorial-grid-light grid gap-8 py-2 sm:grid-cols-3 sm:gap-0"
              >
                {milestones.map((item, index) => (
                  <div key={item} className="editorial-grid-cell-light sm:px-6">
                    <div className="marketing-kicker text-primary/70">Marco {index + 1}</div>
                    <p className="mt-4 text-lg leading-8 text-slate-700">{item}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-center sm:py-32 md:py-40">
        <div className="relative z-10 container mx-auto max-w-5xl">
          <h2 className="mb-12 font-display text-[2.8rem] font-bold leading-[1.02] text-white drop-shadow-2xl sm:text-6xl md:text-7xl">
            &quot;Para chegarmos a novos patamares, os velhos padrões precisam cair.&quot;
          </h2>
          <div className="editorial-grid-dark mx-auto mb-12 grid max-w-4xl gap-8 py-2 text-left sm:grid-cols-3 sm:gap-0">
            {finalPillars.map((item, index) => (
              <div key={item} className="editorial-grid-cell-dark sm:px-5">
                <div className="marketing-kicker text-primary/80">Pilar {index + 1}</div>
                <p className="mt-4 text-base leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
          <Link to="/programas">
            <Button className="w-full rounded-full bg-white px-10 py-6 text-lg font-bold text-slate-900 transition-all hover:scale-[1.02] hover:bg-primary hover:text-white sm:w-auto sm:px-12 sm:py-8 sm:text-xl">
              Venha conhecer nossas metodologias
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutAdemir;

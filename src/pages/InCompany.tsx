import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const INCOMPANY_SERVICES = [
  {
    id: 'lideranca',
    title: 'Desenvolvimento de Alta Liderança',
    subtitle: 'Diretorias e C-Levels',
    description:
      'Acompanhamento individual e coletivo voltado para o desenvolvimento de tomada de decisão e liderança de alta performance sob forte pressão de resultados.',
    bullets: [
      'Sessões de Coach Executivo',
      'Mapeamento Comportamental',
      'Estratégias de Posicionamento',
    ],
  },
  {
    id: 'times',
    title: 'Alinhamento em Larga Escala',
    subtitle: 'Treinamentos Setoriais',
    description:
      'Atuação direcionada para problemas específicos de um setor. Construímos dinâmicas e avaliações que rompem o viés comum para alinhar performance, clareza metrificada e execução contínua.',
    bullets: [
      'Treinamentos in-loco e imersões',
      'Dinâmicas de correção de fluxo',
      'Integração Pós-M&A',
    ],
  },
  {
    id: 'estrategia',
    title: 'Consultoria Estratégica Completa',
    subtitle: 'Marketing & Recrutamento',
    description:
      'Direcional prático para conectar o comportamento humano à máquina de negócios e vendas. Do recrutamento exato da pessoa certa até táticas de PNL e oratória corporativa.',
    bullets: [
      'Marketing Comportamental',
      'Recrutamento & Seleção Analítico PACE',
      'Engajamento Maciço em Palestras',
    ],
  },
];

const heroPoints = [
  'Correção de desalinhamentos entre liderança, time e operação.',
  'Diagnóstico comportamental aplicado ao contexto real da empresa.',
  'Planos de intervenção com prioridade prática, não palestra genérica.',
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const InCompany = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-0 text-slate-900">
      <section className="relative overflow-hidden border-b-8 border-primary bg-slate-950 px-4 pb-24 pt-24 text-white sm:pt-40 md:pb-40 md:pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950/90 to-slate-950" />
          <div
            className="absolute bottom-0 left-0 right-0 top-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent)',
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container relative z-10 mx-auto grid items-center gap-12 lg:grid-cols-2"
        >
          <div>
            <div className="mb-8 inline-block rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              B2B Corporativo
            </div>
            <h1 className="mb-8 font-display text-[2.85rem] font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
              Negócios Escaláveis Dependem de{' '}
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Pessoas.
              </span>
            </h1>
            <p className="mb-10 max-w-xl text-base font-light leading-7 text-white/70 sm:text-2xl sm:leading-relaxed">
              O ILAC InCompany entra onde as soluções tradicionais falham: na
              correção exata do comportamento que freia o faturamento.
            </p>
            <Link to="/cadastro?type=empresa">
              <Button
                size="lg"
                className="group w-full rounded-full bg-primary px-8 py-6 text-base transition-all hover:scale-105 hover:bg-primary/80 sm:w-auto sm:px-10 sm:py-7 sm:text-lg"
              >
                Desenvolver Minha Empresa
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                Como entra
              </div>
              <h3 className="mt-4 font-display text-4xl font-bold leading-tight text-white">
                Leitura precisa do cenário antes da intervenção.
              </h3>
              <div className="mt-8 space-y-4">
                {heroPoints.map((point, index) => (
                  <div key={point} className="rounded-[1.4rem] border border-white/8 bg-black/15 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                      Etapa {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="mt-3 text-base leading-7 text-white/76">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative bg-white pb-32 pt-20">
        <div className="container mx-auto">
          <div className="mb-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold text-slate-900 sm:text-5xl"
            >
              Arquitetura de Intervenção
            </motion.h2>
          </div>

          <div className="space-y-20">
            {INCOMPANY_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="grid items-center gap-10 rounded-[2rem] border border-slate-100 bg-slate-50 p-6 shadow-xl md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:rounded-[3rem] lg:p-16"
              >
                <div>
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-lg shadow-primary/30">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                      {service.subtitle}
                    </h4>
                  </div>
                  <h3 className="mb-6 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mb-10 text-lg font-light leading-relaxed text-slate-600 sm:text-xl">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-base font-medium text-slate-800 sm:text-lg">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-green-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                      Onde atua
                    </div>
                    <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
                      {service.subtitle}
                    </p>
                  </div>
                  {service.bullets.map((bullet, index) => (
                    <div
                      key={`${service.id}-${index}`}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-100/80 p-5"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Entrega {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="mt-3 text-base font-medium leading-7 text-slate-700">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 px-4 py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/30 via-slate-900 to-slate-900" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="container relative z-10 mx-auto max-w-4xl"
        >
          <div className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-white/40">
            Próximo Passo
          </div>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-white md:text-6xl">
            Vamos desenhar o projeto ideal para o seu corporativo.
          </h2>
          <p className="mb-12 text-lg font-light text-white/60 sm:text-xl">
            Nossos consultores analisarão o seu cenário para apresentar a proposta
            exata que alavanca sua métrica mais urgente através das suas pessoas.
          </p>
          <Link to="/cadastro?type=empresa">
            <Button
              size="lg"
              className="w-full rounded-full bg-white px-10 py-6 text-lg font-bold text-slate-900 shadow-2xl transition-transform hover:scale-105 hover:bg-slate-100 sm:w-auto sm:px-12 sm:py-8 sm:text-xl"
            >
              Solicitar Diagnóstico
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default InCompany;

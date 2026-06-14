import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const INCOMPANY_SERVICES = [
  { 
    id: 'lideranca', 
    title: 'Desenvolvimento de Alta Liderança', 
    subtitle: 'Diretorias e C-Levels',
    description: 'Acompanhamento individual e coletivo voltado para o desenvolvimento de tomada de decisão e liderança de alta performance sob forte pressão de resultados.',
    bullets: ["Sessões de Coach Executivo", "Mapeamento Comportamental", "Estratégias de Posicionamento"]
  },
  { 
    id: 'times', 
    title: 'Alinhamento em Larga Escala', 
    subtitle: 'Treinamentos Setoriais',
    description: 'Atuação direcionada para problemas específicos de um setor. Construímos dinâmicas e avaliações que rompem o viés comum para alinhar performance, clareza metrificada e execução contínua.',
    bullets: ["Treinamentos in-loco e imersões", "Dinâmicas de correção de fluxo", "Integração Pós-M&A"]
  },
  { 
    id: 'estrategia', 
    title: 'Consultoria Estratégica Completa', 
    subtitle: 'Marketing & Recrutamento',
    description: 'Direcional prático para conectar o comportamento humano à máquina de negócios e vendas. Do Recrutamento exato da pessoa certa até táticas de PNL e Oratória corporativa.',
    bullets: ["Marketing Comportamental", "Recrutamento & Seleção Analítico PACE", "Engajamento Maciço em Palestras"]
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const InCompany = () => {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen pb-0">
      
      {/* Hero Interativo */}
      <section className="relative overflow-hidden border-b-8 border-primary bg-slate-950 px-4 pb-24 pt-24 text-white sm:pt-40 md:pb-40 md:pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950/90 to-slate-950"></div>
          {/* Efeitos parallax no fundo (linhas corporativas) */}
          <div className="absolute left-0 right-0 top-0 bottom-0 opacity-10" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .3) 25%, rgba(255, 255, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .3) 75%, rgba(255, 255, 255, .3) 76%, transparent 77%, transparent)', backgroundSize: '100px 100px' }}></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-block border border-white/20 bg-white/5 backdrop-blur text-white text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-8">
              B2B Corporativo
            </div>
            <h1 className="mb-8 font-display text-[2.85rem] font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
              Negócios Escaláveis Dependem de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Pessoas.</span>
            </h1>
            <p className="mb-10 max-w-xl text-base font-light leading-7 text-white/70 sm:text-2xl sm:leading-relaxed">
              O ILAC InCompany entra onde as soluções tradicionais falham: na correção exata do comportamento que freia o faturamento.
            </p>
            <Link to="/cadastro?type=empresa">
              <Button size="lg" className="group w-full rounded-full bg-primary px-8 py-6 text-base transition-all hover:scale-105 hover:bg-primary/80 sm:w-auto sm:px-10 sm:py-7 sm:text-lg">
                Desenvolver Minha Empresa
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>

          <div className="hidden lg:block relative">
            {/* Bloco Gigante Abstrato como Placeholder para Video Corporativo/Equipes */}
            <div className="relative w-full aspect-[4/3] bg-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl flex items-center justify-center text-center p-8 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50"></div>
              <div className="relative z-10 text-white/40 group-hover:text-white/70 transition-colors">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="font-display text-xl uppercase tracking-widest border border-dashed border-white/20 p-4 rounded-xl">
                  [Adicione o Video InCompany ILAC]
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Serviços InCompany Layered */}
      <section className="relative bg-white pt-20 pb-32">
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

          <div className="space-y-32">
            {INCOMPANY_SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid items-center gap-10 rounded-[2rem] border border-slate-100 bg-slate-50 p-6 shadow-xl md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:rounded-[3rem] lg:p-16"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white font-display font-bold text-xl shadow-lg shadow-primary/30">
                      0{idx + 1}
                    </span>
                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm">
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
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-base font-medium text-slate-800 sm:text-lg">
                        <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Imagem Placeholder Gigante à Direita (Sem Cara de Grid) */}
                <div className="relative flex w-full aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-[#e2e8f0] lg:rounded-[2.5rem]">
                  <div className="text-center p-8 text-slate-400">
                    <p className="font-display font-medium text-lg border border-dashed border-slate-300 rounded-xl p-6">
                      [Espaço para Foto de {service.subtitle}]
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      
      {/* CTA Negro Final B2B */}
      <section className="relative bg-slate-900 px-4 py-32 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/30 via-slate-900 to-slate-900"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container mx-auto relative z-10 max-w-4xl"
        >
          <div className="text-sm font-bold uppercase tracking-[0.3em] text-white/40 mb-6">Próximo Passo</div>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-white md:text-6xl">
            Vamos desenhar o projeto ideal para o seu corporativo.
          </h2>
          <p className="mb-12 text-lg font-light text-white/60 sm:text-xl">
            Nossos consultores analisarão o seu cenário para apresentar a proposta exata que alavanca sua métrica mais urgente através das suas pessoas.
          </p>
          <Link to="/cadastro?type=empresa">
            <Button size="lg" className="w-full rounded-full bg-white px-10 py-6 text-lg font-bold text-slate-900 shadow-2xl transition-transform hover:scale-105 hover:bg-slate-100 sm:w-auto sm:px-12 sm:py-8 sm:text-xl">
              Solicitar Diagnóstico
            </Button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default InCompany;

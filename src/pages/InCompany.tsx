import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const INCOMPANY_SERVICES = [
  { id: 'coach', title: 'Sessões de Coach Executivo', description: 'Acompanhamento individual voltado para o desenvolvimento de tomada de decisão e liderança de alta performance.' },
  { id: 'times', title: 'Treinamentos de Times / Setores', description: 'Atuação direcionada para problemas específicos de um setor para alinhar performance, clareza e execução.' },
  { id: 'palestras', title: 'Palestras Corporativas', description: 'Intervenções pontuais para mobilizar a equipe, trazer insights sobre cultura comportamental e engajamento.' },
  { id: 'marketing', title: 'Consultoria de Marketing Estratégico', description: 'Direcional prático para conectar o comportamento de mercado à máquina de vendas.' },
  { id: 'pnl', title: 'PNL - Programação Neuro Linguística', description: 'Metodologias aplicadas ao contexto corporativo para destravar barreiras de comunicação e performance.' },
  { id: 'rs', title: 'Recrutamento e Seleção (RS)', description: 'Ajuda estruturada para contratar não apenas competência técnica, mas adequação comportamental usando Método PACE.' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const InCompany = () => {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950/90 to-slate-950"></div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto relative z-10 text-center max-w-4xl"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-6">
            ILAC InCompany
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Empresas não perdem performance por falta de capacidade técnica. Perdem por falhas comportamentais. O ILAC atua onde a maioria não alcança.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {INCOMPANY_SERVICES.map(service => (
            <motion.div variants={fadeInUp} key={service.id} id={service.id} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col pt-12 transition-transform hover:-translate-y-2 hover:shadow-primary/10 hover:shadow-2xl">
              <div className="text-primary/70 font-semibold uppercase tracking-wider text-xs mb-3">
                Solução Corporativa
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              
              <Link to="/cadastro?type=empresa">
                <Button className="w-full justify-between rounded-xl group bg-primary text-white hover:bg-primary/90 border-none">
                  Solicitar contato
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 mt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="bg-[linear-gradient(135deg,_rgba(12,33,84,1)_0%,_rgba(26,52,114,1)_100%)] rounded-[2rem] p-10 md:p-16 border border-slate-200 text-center max-w-5xl mx-auto shadow-2xl"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Performance não se resolve com mais teoria.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Se existe algo travando o resultado da sua empresa, o próximo passo é entender onde está o problema. Vamos conversar e estruturar um plano de ação InCompany.
          </p>
          <Link to="/cadastro?type=empresa">
            <Button size="lg" variant="secondary" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-black/20 hover:scale-105 transition-transform">
              Solicitar diagnóstico
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default InCompany;

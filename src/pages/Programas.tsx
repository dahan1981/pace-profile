import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const PROGRAMAS = [
  { id: 'plc', title: 'PLC - Professional Life Coach', description: 'Formação completa em coaching focada em desenvolvimento pessoal e transição de vida.' },
  { id: 'alc', title: 'ALC - Advanced Leader Coach', description: 'Programa de imersão avançado para líderes que buscam transformar equipes através da metodologia coaching.' },
  { id: 'pec', title: 'PEC - Professional Executive Coach', description: 'Certificação focada no ambiente corporativo e desenvolvimento de executivos de alta performance.' },
  { id: 'ptc', title: 'PTC - Professional Team Coach', description: 'Metodologia exclusiva para alinhamento e facilitação de times focados em grandes entregas.' },
  { id: 'pmc', title: 'PMC - Professional Master Coach', description: 'A formação de mais alto nível para dominar as técnicas e ferramentas mais avançadas de coaching.' },
  { id: 'pace', title: 'Analista Comportamental - Método PACE', description: 'Certificação para mapeamento de perfil comportamental focado em resultados empresariais imediatos.' },
  { id: 'm7ht', title: 'M7HT - Métodos das 7 Habilidades', description: 'Treinamento das 7 habilidades transformacionais para desbloqueio de performance.' },
  { id: 'oratoria', title: 'Oratória', description: 'Desenvolvimento prático e guiado para garantir influência e clareza ao falar em público.' },
  { id: 'comunicacao', title: 'Certificação em Comunicação', description: 'Entenda os modelos de linguagem que influenciam negociações, liderança e resultados no dia a dia.' },
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

const Programas = () => {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen pb-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,_rgba(12,33,84,1)_0%,_rgba(26,52,114,0.98)_54%,_rgba(160,39,51,0.95)_100%)] px-4 py-24 text-white sm:py-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto relative z-10 text-center max-w-4xl"
        >
          <motion.h1 variants={fadeInUp} className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-6">
            Formações e Certificações ILAC
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Não é sobre conteúdo. É sobre capacitação prática que vira resultado sustentável no dia a dia.
          </motion.p>
        </motion.div>
      </section>

      {/* Programas Grid */}
      <section className="container mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROGRAMAS.map(prog => (
            <motion.div variants={fadeInUp} key={prog.id} id={prog.id} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col pt-12 transition-transform hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-primary/70 font-semibold uppercase tracking-wider text-xs mb-3">
                Certificação
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">
                {prog.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                {prog.description}
              </p>
              
              <Link to="/cadastro">
                <Button className="w-full justify-between rounded-xl group bg-primary/5 text-primary hover:bg-primary/10 border-none">
                  Saiba mais
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
          className="bg-white rounded-[2rem] p-10 md:p-16 border border-slate-200 text-center max-w-5xl mx-auto shadow-2xl shadow-slate-200/50"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Pronto para transformar sua carreira?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Em parceria acadêmica com instituições fortes, garantimos extensão acadêmica e credibilidade nacional e internacional nas suas turmas.
          </p>
          <Link to="/cadastro">
            <Button size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Fale com um consultor
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Programas;

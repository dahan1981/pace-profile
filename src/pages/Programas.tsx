import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

const PROGRAMAS = [
  { id: 'plc', tag: 'Certificação Internacional', title: 'PLC - Professional Life Coach', description: 'Formação completa em coaching focada em desenvolvimento pessoal e transição de vida. Você dominará as metodologias de intervenção mais atuais do cenário internacional para alavancar vidas e promover mudanças estruturais duradouras.' },
  { id: 'alc', tag: 'Liderança', title: 'ALC - Advanced Leader Coach', description: 'Programa de imersão avançado para líderes que buscam transformar equipes através da metodologia coaching. Eleve a performance do seu setor implementando processos de autossuficiência e feedback prático.' },
  { id: 'pec', tag: 'Executivos', title: 'PEC - Professional Executive Coach', description: 'Certificação focada puramente no ambiente corporativo e desenvolvimento de executivos de alta performance, C-levels e diretorias de alto impacto.' },
  { id: 'pmc', tag: 'Maestria', title: 'PMC - Professional Master Coach', description: 'A formação de mais alto nível para dominar as técnicas e ferramentas mais avançadas de coaching. Para os profissionais que já trilham a estrada e buscam a excelência absoluta.' },
  { id: 'pace', tag: 'Comportamental', title: 'Analista Comportamental PACE', description: 'Certificação para mapeamento profundo de perfil focado em resultados empresariais. Uma ferramenta para recrutar, gerir e engajar a equipe com o máximo de precisão.' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const Programas = () => {
  return (
    <div className="bg-[#f2f4f7] text-slate-900 min-h-screen pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-4 pt-32 pb-40 text-white sm:pt-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-primary/60 via-slate-950 to-black"></div>
          {/* Abstract floating shape */}
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"
          />
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto relative z-10 text-center max-w-5xl"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50 mb-6">Carreiras & Formações</div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-tight mb-8">
            Sua Próxima Evolução <span className="text-primary border-b-4 border-primary">Profissional.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Esqueça apenas teoria. Desenvolva-se através de métodos certificados que entregam prática real.
          </p>
        </motion.div>
      </section>

      {/* Programas em Blocos Assimétricos */}
      <section className="relative z-20">
        {PROGRAMAS.map((prog, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={prog.id} 
              id={prog.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              className="relative overflow-hidden"
            >
              <div className={`container mx-auto px-4 py-24 sm:py-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
                
                {/* Background Large Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-slate-900/[0.03] select-none z-0 pointer-events-none font-display">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <motion.div 
                  variants={isEven ? fadeLeft : fadeRight}
                  className={`relative z-10 space-y-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="inline-block border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    {prog.tag}
                  </div>
                  <h2 className="font-display text-4xl sm:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
                    {prog.title}
                  </h2>
                  <p className="text-xl leading-relaxed text-slate-600 font-light">
                    {prog.description}
                  </p>
                  <div className="pt-4">
                    <Link to="/cadastro">
                      <Button size="lg" className="h-16 px-10 rounded-full bg-slate-900 hover:bg-primary text-white text-lg shadow-xl shadow-slate-900/10 transition-all hover:scale-105 group">
                        Tenho interesse
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Bloco de Imagem Placeholder */}
                <motion.div 
                  variants={isEven ? fadeRight : fadeLeft}
                  className={`relative z-10 w-full aspect-[4/5] md:aspect-square bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center border border-white ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,0,0,0.03)_0%,_rgba(0,0,0,0.1)_100%)]"></div>
                  
                  {/* TEXTO DE MARCAÇÃO PARA INSTRUIR O USUÁRIO (A SER SUBSTITUÍDO PELA IMAGEM DELE DEPOIS) */}
                  <div className="text-center p-8 relative z-10 text-slate-400">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-display font-medium text-lg border border-dashed border-slate-300 rounded-xl p-4">
                      [Adicione a foto do evento {prog.title} aqui]
                    </p>
                  </div>
                </motion.div>
                
              </div>
              
              {/* Linha separadora horizontal opcional */}
              {index < PROGRAMAS.length - 1 && (
                <div className="container mx-auto">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                </div>
              )}
            </motion.div>
          );
        })}
      </section>
      
      {/* CTA Final */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="relative px-4 py-32 bg-slate-100"
      >
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            Pronto para transformar sua carreira no ILAC?
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-light">
            Nossas turmas são estruturadas visando certificação sólida e extensões acadêmicas validadas em nível nacional.
          </p>
          <Link to="/cadastro">
            <Button size="lg" className="rounded-full px-12 py-8 text-xl shadow-2xl shadow-primary/30 transition-transform hover:scale-105 bg-primary">
              Fale com um Consultor Especialista
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Programas;

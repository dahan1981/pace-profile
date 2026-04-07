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
    description: 'Análise do cenário atual para identificar os pontos que impactam diretamente a performance.',
  },
  {
    number: '02',
    title: 'Intervenção',
    icon: <Zap className="h-6 w-6" />,
    description: 'Aplicação prática com foco em comportamento, tomada de decisão e execução real diária.',
  },
  {
    number: '03',
    title: 'Consolidação',
    icon: <Shield className="h-6 w-6" />,
    description: 'Acompanhamento estruturado para garantir que a mudança seja sustentada no dia a dia da operação.',
  },
];

// Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const SectionLabel = ({ children, light = false }: { children: string; light?: boolean }) => (
  <motion.div variants={fadeInUp} className={`text-sm font-semibold uppercase tracking-[0.24em] ${light ? 'text-white/55' : 'text-primary/72'}`}>
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f9fa] text-slate-950">
      
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-black text-white px-4 py-20 sm:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1C3A80]/60 via-black/90 to-black"></div>
        </div>
        
        <div className="container relative z-10 mx-auto grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <SectionLabel light>Instituto Latino Americano de Coaching</SectionLabel>
            <motion.h1 variants={fadeInUp} className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
              Transformação em Performance Empresarial.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Empresas contratam pela promessa. Mas demitem pela realidade.
              O ILAC atua onde a maioria das soluções não alcança: <strong>o comportamento que sustenta a performance.</strong>
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/cadastro?type=empresa">
                <Button size="lg" className="w-full gap-2 px-8 py-7 text-lg rounded-full shadow-2xl shadow-primary/30 sm:w-auto hover:scale-105 transition-transform bg-primary text-white">
                  Conversar com especialista
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="w-full px-8 py-7 text-lg rounded-full border-white/20 bg-white/5 backdrop-blur-sm sm:w-auto hover:bg-white/10 hover:text-white">
                  Conhecer o Instituto
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O Erro e o Custo */}
      <section className="relative bg-white px-4 py-20 sm:py-32">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="text-destructive font-bold tracking-widest uppercase text-sm">O Erro</motion.div>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl border-l-4 border-destructive pl-6">
                Empresas tratam sintomas. Mas ignoram a causa.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg leading-8 text-slate-600 pl-7">
                Treinamentos técnicos, substituição constante de profissionais e ajustes operacionais geram melhora momentânea.
                <strong> Mas não sustentam resultado.</strong> Porque não atuam no comportamento estratégico e de grupo que de fato alavanca a execução.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6 lg:mt-24"
            >
              <motion.div variants={fadeInUp} className="text-orange-500 font-bold tracking-widest uppercase text-sm">O Custo</motion.div>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl border-l-4 border-orange-500 pl-6">
                O impacto financeiro silencioso.
              </motion.h2>
              <motion.ul variants={staggerContainer} className="text-lg leading-8 text-slate-600 pl-7 space-y-3">
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span> Queda contínua de produtividade e retrabalho.
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span> Falhas críticas na comunicação interna.
                </motion.li>
                <motion.li variants={fadeInUp} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">•</span> Decisões desalinhadas com a macroestratégia.
                </motion.li>
              </motion.ul>
              <motion.p variants={fadeInUp} className="pl-7 font-medium text-slate-900 text-lg">
                Melhorar pessoas é mais eficiente — e mais econômico — do que substituí-las continuamente.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Como o ILAC Atua */}
      <section className="relative bg-slate-50 px-4 py-20 sm:py-32 border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <SectionLabel>O Método ILAC</SectionLabel>
            <motion.h2 variants={fadeInUp} className="mt-4 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Como transformamos cenários de estagnação.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-xl text-slate-600">
              Cada empresa tem um cenário distinto. Mas a lógica estruturada de transformação é a mesma.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-3 relative"
          >
            <motion.div 
              initial={{ scaleX: 0 }} 
              whileInView={{ scaleX: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 1.2, delay: 0.5 }}
              className="hidden md:block absolute top-[40px] left-10 right-10 h-0.5 bg-slate-200 z-0 origin-left"
            ></motion.div>
            
            {processSteps.map((step, index) => (
              <motion.div variants={fadeInUp} key={index} className="relative z-10 flex flex-col items-center text-center bg-transparent group">
                <div className="h-20 w-20 rounded-full bg-white border border-slate-200 shadow-xl flex items-center justify-center text-primary mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                  {step.icon}
                </div>
                <div className="text-primary font-bold tracking-widest text-sm mb-3">PASSO {step.number}</div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soluções (Sem Cards Padronizados) */}
      <section className="relative bg-[#050b14] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050b14] to-[#050b14] z-0"></div>
        <div className="container mx-auto relative z-10 space-y-32">
          
          {/* B2B Corporativo - Full Bleed Asymmetrical */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative w-full aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/5 hidden lg:flex items-center justify-center p-8 shadow-2xl">
                <p className="font-display font-medium text-lg text-white/30 border border-dashed border-white/20 p-8 rounded-xl text-center">
                  [Adicione Foto Equipe/Executivo]
                </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="order-1 lg:order-2 space-y-8">
              <SectionLabel light>B2B / Corporativo</SectionLabel>
              <h3 className="font-display text-5xl sm:text-7xl font-bold leading-tight">ILAC InCompany</h3>
              <p className="text-xl sm:text-2xl text-white/70 font-light leading-relaxed">
                Treinamentos diretos aos times, lideranças e diretorias. Intervenções altamente personalizadas para destravar gargalos de execução dentro do seu negócio real.
              </p>
              <ul className="space-y-4 text-white/80 font-medium text-lg">
                <li className="flex items-center gap-3"><span className="text-primary">•</span> Sessões Executivas de Alta Perfomance</li>
                <li className="flex items-center gap-3"><span className="text-primary">•</span> Alinhamento Prático de Gestores</li>
                <li className="flex items-center gap-3"><span className="text-primary">•</span> Perfis e Contratação (Método PACE)</li>
              </ul>
              <div className="pt-8">
                <Link to="/incompany">
                  <Button size="lg" className="rounded-full px-10 py-8 text-lg bg-primary hover:bg-primary/80 transition-all hover:scale-105 group shadow-2xl shadow-primary/20">
                    Construir Projeto Corporativo
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <div className="w-full h-px bg-white/5"></div>

          {/* B2C Carreira - Full Bleed Asymmetrical */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
               <SectionLabel light>B2C / Carreira</SectionLabel>
               <h3 className="font-display text-5xl sm:text-7xl font-bold leading-tight">Formações & Certificações</h3>
               <p className="text-xl sm:text-2xl text-white/70 font-light leading-relaxed">
                 O caminho definitivo para desenvolvimento de carreira através de metodologias internacionais estruturadas. Torne-se um agente de mudança credenciado.
               </p>
               <ul className="space-y-4 text-white/80 font-medium text-lg">
                 <li className="flex items-center gap-3"><span className="text-primary">•</span> Formação de Coaches Internacionais</li>
                 <li className="flex items-center gap-3"><span className="text-primary">•</span> Oratória, Apresentação e Influência</li>
                 <li className="flex items-center gap-3"><span className="text-primary">•</span> Aprofundamento no Método das 7 Habilidades</li>
               </ul>
               <div className="pt-8">
                 <Link to="/programas">
                   <Button size="lg" className="rounded-full px-10 py-8 text-lg bg-white text-slate-950 transition-all hover:scale-105 group shadow-2xl">
                     Explorar Grade de Formações
                     <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                   </Button>
                 </Link>
               </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative w-full aspect-[4/5] bg-white/5 rounded-3xl overflow-hidden border border-white/5 hidden lg:flex items-center justify-center p-8 shadow-2xl">
                <p className="font-display font-medium text-lg text-white/30 border border-dashed border-white/20 p-8 rounded-xl text-center">
                  [Adicione Foto Turma/Certificado]
                </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Quem conduz */}
      <section className="relative bg-white px-4 py-20 sm:py-32 overflow-hidden">
        <div className="container mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }} 
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative flex justify-center"
          >
             <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-75"></div>
             <div className="relative w-full max-w-md aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
               <img src="/ademir.jpg" alt="Ademir Soares" className="w-full h-full object-cover" />
             </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-1 lg:order-2"
          >
            <SectionLabel>Quem Conduz</SectionLabel>
            <motion.h2 variants={fadeInUp} className="mt-4 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Ademir Soares
            </motion.h2>
            <motion.div variants={fadeInUp} className="text-primary font-semibold tracking-wide uppercase text-sm mt-2 mb-6">CEO e Master Coach</motion.div>
            <motion.p variants={fadeInUp} className="text-lg leading-8 text-slate-600 mb-6">
              Com mais de duas décadas de experiência atuando diretamente no desenvolvimento de pessoas e empresas, Ademir possui um histórico focado em transformação de comportamento no ambiente corporativo.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg leading-8 text-slate-600 mb-10">
              Ao longo de 20 anos, o trabalho foi direcionado para um único objetivo: transformar comportamento em performance real e escalável dentro de empresas.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/sobre">
                <Button size="lg" className="rounded-full px-8 py-6 gap-2">
                  Conhecer a história <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative bg-slate-950 px-4 py-24 text-center overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="container mx-auto max-w-4xl relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white sm:text-6xl mb-8">
            Performance não se resolve com mais teoria. Resolve-se com Ação Direcionada.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/70 mb-12">
            O objetivo não é ensinar. É gerar transformação aplicável que ressoe em toda a sua cadeia de negócios.
          </motion.p>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
             {stats.map(([value, text], index) => (
                <motion.div variants={fadeInUp} key={index} className="border-l-2 border-primary/50 pl-6 py-2">
                  <div className="font-display text-4xl font-bold text-white mb-2">{value}</div>
                  <div className="text-white/60 text-sm leading-relaxed">{text}</div>
                </motion.div>
             ))}
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link to="/cadastro?type=empresa">
               <Button size="lg" className="w-full md:w-auto px-12 py-8 text-xl font-bold shadow-2xl shadow-primary/20 rounded-full">
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

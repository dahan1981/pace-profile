import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const AboutAdemir = () => {
  return (
    <div className="bg-[#f8f9fa] text-slate-900 min-h-screen pb-0">
      
      {/* Hero Interativo */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-slate-950 px-4 pt-32 pb-40 text-white sm:pt-48 border-b-[12px] border-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/60 via-slate-950 to-slate-950"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[linear-gradient(90deg,_rgba(2,6,23,1)_0%,_rgba(255,255,255,0)_100%)] z-10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto relative z-10"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-white/50 text-xs font-bold uppercase tracking-[0.3em] mb-8">
              <span className="w-8 h-px bg-white/30"></span> A História
            </div>
            <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight mb-10">
              O Poder do Comportamento <br/><span className="text-primary italic">Aplicado.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/70 max-w-2xl font-light leading-relaxed mb-12">
              Transformar pessoas não é um fim em si mesmo. É o único caminho validado para transformar os resultados de uma corporação inteira.
            </p>
          </div>
        </motion.div>

        {/* Floating placeholder for a Hero portrait/image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute right-0 bottom-0 w-2/5 h-[90%] hidden lg:flex items-end justify-end pointer-events-none"
        >
           <div className="w-full h-full bg-white/5 backdrop-blur-sm border-l border-t border-white/10 rounded-tl-[4rem] flex flex-col items-center justify-center p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                 <p className="font-display text-2xl text-white/30 border border-dashed border-white/20 p-8 rounded-3xl">
                   [Foto Hero Ademir Soares / ILAC]
                 </p>
              </div>
           </div>
        </motion.div>
      </section>

      {/* Visão e Origem (Timeline assimétrica) */}
      <section className="relative px-4 py-32 sm:py-48 bg-white overflow-hidden">
        <div className="container mx-auto">
           <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-32 items-start">
              
              {/* Esquerda: Imagem Fixa ou Grande Placeholder */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="relative lg:sticky top-32"
              >
                 <div className="w-full aspect-[3/4] bg-slate-100 rounded-[3rem] p-10 flex items-center justify-center border border-slate-200">
                    <p className="font-display text-xl text-slate-400 border border-dashed border-slate-300 p-6 rounded-2xl text-center">
                      [Foto Origem / Institucional]
                    </p>
                 </div>
                 
                 <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl max-w-xs">
                    <h3 className="font-display text-5xl font-bold mb-2">20+</h3>
                    <p className="font-medium text-white/80">Anos transformando comportamentos em escala global.</p>
                 </div>
              </motion.div>

              {/* Direita: Textos Densos / História */}
              <div className="space-y-32 pt-10">
                 <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-100px" }}
                   variants={fadeInUp}
                 >
                    <div className="text-primary font-bold uppercase tracking-widest text-sm mb-6">A Fundação</div>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-8">
                       Uma tese construída nas trincheiras da rotina empresarial.
                    </h2>
                    <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                       <p>Ao longo de mais de duas décadas, a atuação sempre foi pautada em observar um denominador comum: a frustração corporativa em contratar talentos brilhantes no currículo que ruíam na execução colaborativa.</p>
                       <p>O ILAC nasce não apenas como um observador passivo desse cenário, mas como um Instituto focado em criar e homologar metodologias reais para intervir nisso.</p>
                    </div>
                 </motion.div>

                 <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-100px" }}
                   variants={fadeInUp}
                 >
                    <div className="text-primary font-bold uppercase tracking-widest text-sm mb-6">Ademir Soares</div>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-8">
                       O Master Coach por trás da arquitetura do ILAC.
                    </h2>
                    <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                       <p>Como CEO e Master Coach, Ademir consolidou experiência prática desenvolvendo C-levels de empresas multi-nacionais e estruturando imersões profundas desenhadas para quebrar o viés limitante de equipes.</p>
                       <p>A crença é direta: teoria não muda o resultado de ninguém se não esbarrar na execução. Por isso cada braço do ILAC (Formações ou InCompany) possui o peso de validação acadêmica e selo garantido por resultados de campo.</p>
                    </div>
                 </motion.div>

                 <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, margin: "-100px" }}
                   variants={fadeInUp}
                 >
                    {/* Placeholder para bloco de diploma/certificado */}
                    <div className="w-full h-64 bg-slate-100 rounded-3xl flex items-center justify-center border border-slate-200 shadow-inner">
                       <p className="font-display text-lg text-slate-400 border border-dashed border-slate-300 p-4 rounded-xl">
                         [Foto Certificação/Logos Parceiros Mackenzie]
                       </p>
                    </div>
                 </motion.div>
              </div>

           </div>
        </div>
      </section>

      {/* Frase / Imagem Gigante de Fundo (Parallax Feel) */}
      <section className="relative px-4 py-40 bg-slate-950 text-center overflow-hidden">
         <motion.div 
           initial={{ scale: 1.1, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="absolute inset-0 z-0 bg-slate-900/50"
         >
           <div className="w-full h-full border-[20px] border-black flex items-center justify-center">
             <p className="font-display text-xl text-white/20 uppercase tracking-widest border border-dashed border-white/10 p-10 rounded-3xl">
                [Background Foto Wide / Turma Full]
             </p>
           </div>
         </motion.div>

         <div className="relative z-10 container mx-auto max-w-5xl">
            <h2 className="font-display text-5xl sm:text-7xl font-bold text-white leading-[1.1] mb-12 drop-shadow-2xl">
              "Para chegarmos a novos patamares, os velhos padrões precisam cair."
            </h2>
            <Link to="/programas">
               <Button className="rounded-full px-12 py-8 bg-white text-slate-900 font-bold text-xl hover:bg-primary hover:text-white transition-all hover:scale-105 shadow-2xl">
                 Venha conhecer nossas metodologias
               </Button>
            </Link>
         </div>
      </section>

    </div>
  );
};

export default AboutAdemir;

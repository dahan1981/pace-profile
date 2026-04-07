import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const Cadastro = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4 py-12 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[500px] bg-white rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl"
      >
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors p-2"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6 px-2 mt-4">
          <h2 className="text-slate-900 font-bold text-[1.05rem] leading-snug">
            Preencha seus dados com atenção e entraremos em contato com você por ligação e pelo WhatsApp para garantir seu atendimento personalizado!
          </h2>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input 
            required 
            placeholder="Nome completo" 
            className="bg-slate-50 border-slate-100 h-12 text-base rounded-xl placeholder:text-slate-500" 
          />
          
          <Input 
            required 
            type="email"
            placeholder="Seu melhor email" 
            className="bg-slate-50 border-slate-100 h-12 text-base rounded-xl placeholder:text-slate-500" 
          />
          
          <div className="flex bg-slate-50 border border-slate-100 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-primary h-12 items-center px-4">
             <span className="text-base mr-2 flex items-center gap-1 select-none text-slate-700">
               🇧🇷 <ChevronDownIcon className="w-3 h-3 text-slate-400" />
             </span>
             <input 
               required
               type="tel"
               placeholder="+55 (11) 96123-4567" 
               className="bg-transparent border-none outline-none flex-1 text-base placeholder:text-slate-500 w-full"
             />
          </div>

          <Input 
            placeholder="Empresa" 
            className="bg-slate-50 border-slate-100 h-12 text-base rounded-xl placeholder:text-slate-500" 
          />

          <Input 
            placeholder="Seu Cargo" 
            className="bg-slate-50 border-slate-100 h-12 text-base rounded-xl placeholder:text-slate-500" 
          />

          <Input 
            placeholder="Número de Funcionários" 
            className="bg-slate-50 border-slate-100 h-12 text-base rounded-xl placeholder:text-slate-500" 
          />

          <Textarea 
            placeholder="Qual Sua Principal Necessidade?" 
            className="bg-slate-50 border-slate-100 text-base rounded-xl placeholder:text-slate-500 min-h-[100px] resize-none" 
          />

          {/* Fake reCAPTCHA */}
          <div className="flex items-center justify-between border border-slate-200 bg-slate-50 rounded-lg p-3 mt-4 w-full max-w-[280px]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-slate-300 rounded-sm bg-white cursor-pointer hover:border-slate-400 transition-colors"></div>
              <span className="text-sm font-medium text-slate-700">Não sou um robô</span>
            </div>
            <div className="flex flex-col items-center justify-center opacity-60">
               <RefreshCcw className="w-6 h-6 text-blue-600 mb-1" />
               <span className="text-[10px] text-slate-500">reCAPTCHA</span>
            </div>
          </div>

          <div className="pt-2">
             <Button type="submit" size="lg" className="w-full h-[52px] bg-black text-white hover:bg-slate-800 text-lg font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
               Quero ser contatado
             </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}

export default Cadastro;

import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <Brand
              title="ILAC"
              subtitle="Instituto Latino Americano de Coaching"
              titleClassName="text-2xl text-white"
              subtitleClassName="mt-2 text-xs font-semibold tracking-widest text-slate-400 uppercase"
              iconClassName="h-10 w-10 brightness-0 invert"
            />
            <p className="mt-6 text-sm leading-7 text-slate-400 max-w-sm">
              Desenvolvimento comportamental aplicado à realidade empresarial. Transformamos comportamento em excelência de resultados através de método, prática e condução ativa.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-slate-400 transition hover:text-white">Início</Link></li>
              <li><Link to="/sobre" className="text-sm text-slate-400 transition hover:text-white">Sobre o ILAC</Link></li>
              <li><Link to="/programas" className="text-sm text-slate-400 transition hover:text-white">Formações e Certificações</Link></li>
              <li><Link to="/incompany" className="text-sm text-slate-400 transition hover:text-white">ILAC InCompany</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2 bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">Fale Conosco</h3>
            <p className="text-sm text-slate-400 mb-6">
              Se existe algo travando o resultado da sua empresa, o próximo passo é entender onde está o problema. Vamos conversar.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">Telefone / WhatsApp</div>
                  <div className="text-sm font-semibold text-white">(21) 97995-1415</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-slate-500">E-mail</div>
                  <div className="text-sm font-semibold text-white">contato@ilac.com.br</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Instituto Latino Americano de Coaching. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/termos" className="text-xs text-slate-500 hover:text-white transition">Termos de Uso</Link>
            <Link to="/privacidade" className="text-xs text-slate-500 hover:text-white transition">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

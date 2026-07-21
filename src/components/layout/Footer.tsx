import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pb-5 pt-8 text-white sm:pb-8 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-7 sm:gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <Brand
              title="ILAC"
              subtitle="Instituto Latino Americano de Coaching"
              titleClassName="text-lg text-white sm:text-2xl"
              subtitleClassName="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:mt-2 sm:text-xs sm:tracking-widest"
              iconClassName="h-8 w-8 brightness-0 invert sm:h-10 sm:w-10"
            />
            <p className="mt-4 max-w-sm text-xs leading-6 text-slate-400 sm:mt-6 sm:text-sm sm:leading-7">
              Desenvolvimento comportamental aplicado à realidade empresarial. Transformamos comportamento
              em excelência de resultados através de método, prática e condução ativa.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xs font-bold uppercase tracking-wider text-white sm:mb-6 sm:text-sm">
              Navegação
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:block sm:space-y-4">
              <li>
                <Link to="/" className="text-xs text-slate-400 transition hover:text-white sm:text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-xs text-slate-400 transition hover:text-white sm:text-sm">
                  Sobre o ILAC
                </Link>
              </li>
              <li>
                <Link to="/programas" className="text-xs text-slate-400 transition hover:text-white sm:text-sm">
                  Formações e Certificações
                </Link>
              </li>
              <li>
                <Link to="/incompany" className="text-xs text-slate-400 transition hover:text-white sm:text-sm">
                  ILAC InCompany
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:rounded-2xl sm:p-6 md:col-span-2 lg:col-span-2">
            <h3 className="mb-3 font-display text-xs font-bold uppercase tracking-wider text-white sm:mb-4 sm:text-sm">
              Fale conosco
            </h3>
            <p className="mb-4 text-xs leading-5 text-slate-400 sm:mb-6 sm:text-sm">
              Se existe algo travando o resultado da sua empresa, o próximo passo é entender onde está o
              problema. Vamos conversar.
            </p>
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary sm:h-10 sm:w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase tracking-widest text-slate-500 sm:text-xs">
                    Telefone / WhatsApp
                  </div>
                  <div className="text-xs font-semibold text-white sm:text-sm">(21) 97995-1415</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary sm:h-10 sm:w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-[0.62rem] uppercase tracking-widest text-slate-500 sm:text-xs">
                    E-mail
                  </div>
                  <div className="text-xs font-semibold text-white sm:text-sm">contato@ilac.com.br</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 sm:mt-16 sm:items-center sm:gap-4 sm:pt-8 md:flex-row">
          <p className="text-[0.65rem] leading-5 text-slate-500 sm:text-xs">
            © {new Date().getFullYear()} Instituto Latino Americano de Coaching. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/termos" className="text-[0.65rem] text-slate-500 transition hover:text-white sm:text-xs">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="text-[0.65rem] text-slate-500 transition hover:text-white sm:text-xs">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

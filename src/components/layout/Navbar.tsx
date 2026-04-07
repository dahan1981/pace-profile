import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';

const PROGRAMAS_LINKS = [
  { name: 'PLC - Professional Life Coach', href: '/programas#plc' },
  { name: 'ALC - Advanced Leader Coach', href: '/programas#alc' },
  { name: 'PEC - Professional Executive Coach', href: '/programas#pec' },
  { name: 'PTC - Professional Team Coach', href: '/programas#ptc' },
  { name: 'PMC - Professional Master Coach', href: '/programas#pmc' },
  { name: 'Analista Comportamental - Método PACE', href: '/programas#pace' },
  { name: 'M7HT - Métodos das 7 Habilidades', href: '/programas#m7ht' },
  { name: 'Oratória', href: '/programas#oratoria' },
  { name: 'Certificação em Comunicação', href: '/programas#comunicacao' },
];

const INCOMPANY_LINKS = [
  { name: 'Sessões de Coach', href: '/incompany#coach' },
  { name: 'Treinamentos dos times/setores', href: '/incompany#times' },
  { name: 'Palestras', href: '/incompany#palestras' },
  { name: 'Marketing Estratégico', href: '/incompany#marketing' },
  { name: 'PNL - Programação Neuro Linguística', href: '/incompany#pnl' },
  { name: 'Recrutamento e Seleção', href: '/incompany#rs' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-white shadow-xl border-slate-200 py-1'
          : 'bg-transparent border-white/10 py-3'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex-shrink-0">
          <Brand
            title="ILAC"
            subtitle="Instituto Latino Americano de Coaching"
            titleClassName={`text-lg sm:text-2xl transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            subtitleClassName={`hidden lg:block mt-0 text-[0.6rem] tracking-[0.2em] uppercase font-bold transition-colors ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}
            iconClassName={`h-8 w-8 sm:h-12 sm:w-12 transition-all ${!isScrolled && 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
          <Link to="/" className={`text-sm font-semibold tracking-wide transition-colors ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'}`}>
            Início
          </Link>
          <Link to="/sobre" className={`text-sm font-semibold tracking-wide transition-colors ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'}`}>
            Sobre
          </Link>

          {/* Programas Dropdown */}
          <div className="group relative py-6">
            <Link to="/programas" className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'}`}>
              Programas <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full mt-0 w-[340px] origin-top-left translate-y-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                {PROGRAMAS_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 hover:text-primary hover:pl-5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* InCompany Dropdown */}
          <div className="group relative py-6">
            <Link to="/incompany" className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white/90 hover:text-white'}`}>
              InCompany <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full mt-0 w-[340px] origin-top-left translate-y-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                {INCOMPANY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 hover:text-primary hover:pl-5"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden shrink-0 items-center gap-6 md:flex">
          <Link to="/login" className={`font-semibold tracking-wide transition-colors ${isScrolled ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'}`}>
            Membros
          </Link>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <Button className="font-semibold tracking-wide px-8 py-5 rounded-full shadow-2xl transition-all bg-[#25D366] hover:bg-[#20b958] text-white flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Começar
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-y-auto max-h-[85vh]">
          <div className="flex flex-col px-4 py-6 space-y-4">
            <Link to="/" className="block text-base font-semibold text-slate-800 py-2 border-b border-slate-50">Início</Link>
            <Link to="/sobre" className="block text-base font-semibold text-slate-800 py-2 border-b border-slate-50">Sobre</Link>
            
            <div className="py-2 border-b border-slate-50">
              <Link to="/programas" className="block text-base font-semibold text-slate-800 mb-2">Programas</Link>
              <div className="pl-4 border-l-2 border-slate-100 space-y-3 mt-3">
                {PROGRAMAS_LINKS.map(link => (
                  <Link key={link.href} to={link.href} className="block text-sm text-slate-600 font-medium">{link.name}</Link>
                ))}
              </div>
            </div>

            <div className="py-2 border-b border-slate-50">
              <Link to="/incompany" className="block text-base font-semibold text-slate-800 mb-2">InCompany</Link>
              <div className="pl-4 border-l-2 border-slate-100 space-y-3 mt-3">
                {INCOMPANY_LINKS.map(link => (
                  <Link key={link.href} to={link.href} className="block text-sm text-slate-600 font-medium">{link.name}</Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Link to="/login" className="w-full text-center py-2 text-slate-700 font-semibold mb-2">
                Membros
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full justify-center bg-[#25D366] hover:bg-[#20b958] text-white flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Começar
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

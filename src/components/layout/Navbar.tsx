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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-md backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex min-h-20 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex-shrink-0">
          <Brand
            title="ILAC"
            subtitle="Instituto Latino Americano de Coaching"
            titleClassName="text-lg sm:text-xl"
            subtitleClassName="hidden lg:block mt-0.5 text-[0.65rem] tracking-widest uppercase font-medium text-slate-500"
            iconClassName="h-8 w-8 sm:h-10 sm:w-10"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
          <Link to="/" className="text-sm font-semibold text-slate-700 transition hover:text-primary">
            Início
          </Link>
          <Link to="/sobre" className="text-sm font-semibold text-slate-700 transition hover:text-primary">
            Sobre
          </Link>

          {/* Programas Dropdown */}
          <div className="group relative py-6">
            <Link to="/programas" className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-primary">
              Programas <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full mt-0 w-72 origin-top-left translate-y-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-2xl">
                {PROGRAMAS_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* InCompany Dropdown */}
          <div className="group relative py-6">
            <Link to="/incompany" className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-primary">
              InCompany <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="pointer-events-none absolute left-0 top-full mt-0 w-72 origin-top-left translate-y-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-2xl">
                {INCOMPANY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link to="/login">
            <Button variant="ghost" className="font-semibold text-slate-600">
              Entrar
            </Button>
          </Link>
          <Link to="/cadastro">
            <Button className="font-semibold px-6 rounded-full shadow-lg shadow-primary/20">
              Assine Agora
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full justify-center">Entrar</Button>
              </Link>
              <Link to="/cadastro" className="w-full">
                <Button className="w-full justify-center">Assine Agora</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

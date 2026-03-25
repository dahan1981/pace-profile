import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import {
  ademirHero,
  ademirLegacy,
  ademirMilestones,
  ademirQuote,
  ademirSections,
} from '@/data/ademir';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PhotoPlaceholder = ({ label }: { label: string }) => (
  <div className="flow-card relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,_rgba(255,255,255,0.95)_0%,_rgba(238,242,247,0.92)_100%)] shadow-xl shadow-slate-200/45">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,45,62,0.12),_transparent_38%),radial-gradient(circle_at_bottom,_rgba(12,33,84,0.12),_transparent_42%)]" />
    <div className="relative flex min-h-[420px] flex-col justify-between p-8">
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/55">Espaço para foto</div>
      <div>
        <div className="font-display text-4xl font-bold text-slate-950">Ademir Soares</div>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{label}</p>
      </div>
    </div>
  </div>
);

const AboutAdemir = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,_#f6f1ea_0%,_#f3eee7_48%,_#f7f4ef_100%)] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-white/60 bg-background/82 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Brand
            title="ILAC"
            subtitle="Instituto Latino Americano de Coaching"
            titleClassName="text-lg"
            iconClassName="h-8 w-8"
          />
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar ao site
              </Button>
            </Link>
            <Link to="/cadastro">
              <Button size="sm" className="shadow-lg shadow-primary/20">
                Conhecer o método
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,_#f6f1ea_0%,_#f3eee7_100%)] px-4 pb-16 pt-20 md:pb-24 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(199,45,62,0.12),_transparent_26%),radial-gradient(circle_at_top_right,_rgba(12,33,84,0.1),_transparent_30%)]" />
        <div className="container mx-auto grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl animate-reveal-up">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">{ademirHero.eyebrow}</div>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.02] text-slate-950 md:text-7xl">
              {ademirHero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {ademirHero.subtitle}
            </p>
            <div className="mt-10 max-w-2xl border-l border-primary/15 pl-5 text-sm leading-7 text-slate-600">
              Esta página foi desenhada como um espaço institucional de história e origem. Quando você enviar as fotos do
              Ademir, os blocos visuais já estão preparados para receber retratos e imagens de trajetória sem refazer a estrutura.
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/cadastro">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                  Conhecer a experiência PACE
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="border-primary/20 bg-white/75">
                  Voltar para a landing principal
                </Button>
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-soft">
            <PhotoPlaceholder label="Aqui entra um retrato principal do Ademir, com presença mais institucional e humana." />
          </div>
        </div>
      </section>

      {ademirSections.map((section, index) => {
        const reverse = index % 2 === 1;
        const sectionTone = index % 2 === 1 ? 'bg-[linear-gradient(180deg,_#ffffff_0%,_#faf7f2_100%)]' : 'bg-[linear-gradient(180deg,_#f1e9de_0%,_#f6f0e7_100%)]';

        return (
          <section key={section.title} className={`relative px-4 py-14 md:py-20 ${sectionTone}`}>
            <div className={`absolute inset-x-0 top-0 h-20 ${index % 2 === 1 ? 'section-divider-light' : 'section-divider-warm'}`} />
            <div
              className={`container mx-auto grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] ${
                reverse ? 'lg:grid-cols-[1.08fr_0.92fr]' : ''
              }`}
            >
              <div className={`${reverse ? 'lg:order-2' : ''} animate-reveal-up`}>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">{section.eyebrow}</div>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-5 max-w-2xl text-base leading-8 text-slate-600">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className={`${reverse ? 'lg:order-1' : ''} animate-fade-in-soft`}>
                <PhotoPlaceholder label={`Espaço reservado para foto ${index + 1} da história do Ademir.`} />
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative bg-[linear-gradient(180deg,_#162347_0%,_#0f172a_100%)] px-4 py-14 text-white md:py-20">
        <div className="section-divider-light absolute inset-x-0 top-0 h-20 opacity-20" />
        <div className="container mx-auto rounded-[2.2rem] border border-white/70 bg-slate-950 px-8 py-10 text-white shadow-2xl shadow-slate-300/30 md:px-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="animate-reveal-up">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Visão</div>
              <blockquote className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
                “{ademirQuote}”
              </blockquote>
            </div>
            <div className="grid gap-3 animate-fade-in-soft">
              {ademirMilestones.map((item, index) => (
                <div key={item} className="flow-card rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Marco {index + 1}</div>
                  <p className="mt-2 text-sm leading-7 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[linear-gradient(180deg,_#f2ebe1_0%,_#f7f4ef_100%)] px-4 pb-20 pt-12">
        <div className="section-divider-dark absolute inset-x-0 top-0 h-20 opacity-15" />
        <div className="container mx-auto">
          <div className="max-w-2xl animate-reveal-up">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70">Legado</div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              O que essa trajetória entrega hoje ao ILAC.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 animate-fade-in-soft">
            {ademirLegacy.map((item) => (
              <div key={item.title} className="flow-card rounded-[2rem] border border-white/80 bg-white/84 p-8 shadow-xl shadow-slate-200/45">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/68">{item.title}</div>
                <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAdemir;


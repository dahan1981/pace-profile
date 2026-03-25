import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ademirAreas,
  ademirCredentials,
  ademirHero,
  ademirHighlights,
  ademirQuote,
  ademirStory,
  ademirTimeline,
} from '@/data/ademir';
import { ArrowLeft, ArrowRight, BookOpen, BriefcaseBusiness, GraduationCap } from 'lucide-react';

const AboutAdemir = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(199,45,62,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(12,33,84,0.12),_transparent_28%),linear-gradient(180deg,_#f7f6f2_0%,_#edf2f8_52%,_#f8fafc_100%)]">
      <nav className="sticky top-0 z-50 border-b border-white/60 bg-background/80 backdrop-blur-xl">
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

      <section className="px-4 pb-12 pt-20 md:pb-16 md:pt-24">
        <div className="container mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/72">{ademirHero.eyebrow}</div>
            <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.02] text-slate-950 md:text-6xl">
              {ademirHero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {ademirHero.description}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              {ademirHero.note}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {ademirHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/80 bg-white/82 p-4 shadow-sm backdrop-blur"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/65">Ademir Soares</div>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/12 via-white/30 to-secondary/12 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(160deg,_rgba(12,33,84,1)_0%,_rgba(22,47,109,0.96)_58%,_rgba(199,45,62,0.92)_100%)] text-white shadow-2xl shadow-slate-300/35">
              <div className="border-b border-white/10 px-7 py-6">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">Retrato profissional</div>
                <h2 className="mt-3 font-display text-4xl font-bold">Ademir Soares</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/76">
                  Formação, leitura comportamental e desenvolvimento humano aplicados a pessoas, líderes e equipes.
                </p>
              </div>

              <div className="grid gap-4 p-6">
                {[
                  ['Atuação', 'Desenvolvimento humano, coaching, inteligência emocional e análise comportamental.'],
                  ['Presença', 'Condução de treinamentos, programas, formações e processos de mentoria.'],
                  ['Método', 'Construção do Método PACE como instrumento de leitura e desenvolvimento aplicado.'],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">{label}</div>
                    <p className="mt-3 text-sm leading-7 text-white/82">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/75 bg-white/84 p-8 shadow-xl shadow-slate-200/45">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/68">Trajetória</div>
            <h2 className="mt-3 font-display text-4xl font-bold text-slate-950">Uma história guiada por formação, escuta e construção de método.</h2>
            <div className="mt-6 space-y-6">
              {ademirStory.map((item) => (
                <div key={item.title} className="border-l border-slate-200 pl-5">
                  <h3 className="font-display text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/75 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/30">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Visão</div>
            <blockquote className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight">
              “{ademirQuote}”
            </blockquote>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/72">
              Essa linha orienta tanto a atuação individual do Ademir quanto a maneira como o ILAC estrutura seus programas, ferramentas e experiências de formação.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {ademirTimeline.map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">{item.label}</div>
                  <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/74">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="border-white/75 bg-white/84 shadow-xl shadow-slate-200/45">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-5 w-5" />
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/68">Formação e credenciais</div>
              </div>
              <div className="mt-6 space-y-3">
                {ademirCredentials.map((item) => (
                  <div key={item} className="rounded-[1.2rem] bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="border-white/75 bg-white/84 shadow-xl shadow-slate-200/45">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 text-primary">
                  <BriefcaseBusiness className="h-5 w-5" />
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/68">Frentes de atuação</div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {ademirAreas.map((item) => (
                    <div key={item.title} className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/90 p-5">
                      <h3 className="font-display text-2xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-white/75 bg-[linear-gradient(135deg,_rgba(245,247,251,0.95)_0%,_rgba(255,255,255,0.88)_100%)] shadow-xl shadow-slate-200/45">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/68">O que essa página comunica</div>
                </div>
                <div className="mt-5 max-w-3xl text-sm leading-8 text-slate-600">
                  Ademir Soares aparece aqui não como um nome solto no rodapé, mas como a pessoa por trás da visão que sustenta o método.
                  A página posiciona sua trajetória, dá lastro ao trabalho do ILAC e cria um espaço institucional mais forte para quem quer conhecer
                  a origem, a credibilidade e o contexto humano do projeto.
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/cadastro">
                    <Button size="lg" className="gap-2 shadow-lg shadow-primary/20">
                      Conhecer a experiência PACE
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button size="lg" variant="outline" className="border-primary/20 bg-white/70">
                      Voltar para a landing principal
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAdemir;

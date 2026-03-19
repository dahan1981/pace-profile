import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PROFILES, PROFILE_ORDER } from '@/data/profiles';
import { ArrowRight, Building2, User, BarChart3, Target, Users, Zap } from 'lucide-react';

const profileColors: Record<string, string> = {
  propulsor: 'bg-propulsor',
  articulador: 'bg-articulador',
  consolidador: 'bg-consolidador',
  estrategista: 'bg-estrategista',
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-3">
            <img src="/src/assets/logo-ilac.png" alt="ILAC" className="h-8 w-auto" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <span className="font-display text-xl font-bold text-primary">MÉTODO PACE</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#perfis" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Perfis</a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#solucoes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Soluções</a>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link to="/login?type=empresa">
              <Button size="sm">Sou Empresa</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Padrões de Ação e Comportamento Essencial
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Descubra seu perfil comportamental com o{' '}
            <span className="text-primary">Método PACE</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Uma ferramenta cientificamente estruturada para mapear seus padrões de ação e comportamento, 
            revelando seus pontos fortes e áreas de desenvolvimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/cadastro">
              <Button size="lg" className="text-base px-8 h-12 gap-2">
                <User className="h-5 w-5" />
                Quero fazer minha avaliação
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/cadastro?type=empresa">
              <Button size="lg" variant="outline" className="text-base px-8 h-12 gap-2">
                <Building2 className="h-5 w-5" />
                Sou empresa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Profiles */}
      <section id="perfis" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Os 4 Perfis PACE</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cada pessoa possui uma combinação única desses perfis. Descubra qual é o seu predominante.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE_ORDER.map((key, i) => {
              const p = PROFILES[key];
              return (
                <Card key={key} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className={`h-2 ${profileColors[key]}`} />
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{p.emoji}</div>
                    <h3 className="font-display text-xl font-bold mb-2">{p.name}</h3>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      {p.letter} — {key.charAt(0).toUpperCase() + key.slice(1)}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.shortDescription}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground text-lg">Simples, rápido e transformador.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Responda', desc: '40 perguntas objetivas sobre seu comportamento em diferentes situações.' },
              { icon: BarChart3, title: 'Descubra', desc: 'Receba seu perfil detalhado com gráficos, ranking e devolutiva completa.' },
              { icon: Zap, title: 'Evolua', desc: 'Use os insights para potencializar pontos fortes e desenvolver novas habilidades.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solucoes" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Soluções para Cada Necessidade</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-2 hover:border-primary/30 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                <User className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Para Você</h3>
              <p className="text-muted-foreground mb-6">
                Faça sua avaliação individual e receba uma devolutiva completa com seu perfil comportamental, 
                pontos fortes, áreas de atenção e dicas de desenvolvimento.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-primary" />Avaliação completa com 40 perguntas</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-primary" />Devolutiva detalhada com gráficos</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-primary" />Download em PDF</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-primary" />Histórico de avaliações</li>
              </ul>
              <Link to="/cadastro">
                <Button className="w-full gap-2">
                  Fazer minha avaliação <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>

            <Card className="p-8 border-2 hover:border-secondary/30 transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-6">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Para Empresas</h3>
              <p className="text-muted-foreground mb-6">
                Pacotes de avaliações para equipes, com painel de gestão, relatórios consolidados 
                e visão completa dos perfis da equipe.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-secondary" />Pacotes de 10, 25, 50 e 100 avaliações</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-secondary" />Painel de gestão de equipes</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-secondary" />Relatórios consolidados</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-secondary" />Exportação de dados</li>
              </ul>
              <Link to="/cadastro?type=empresa">
                <Button variant="outline" className="w-full gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Users className="h-4 w-4" /> Solicitar proposta <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <span className="font-display text-lg font-bold text-primary">MÉTODO PACE</span>
          <p className="text-sm text-muted-foreground mt-2">
            Padrões de Ação e Comportamento Essencial © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

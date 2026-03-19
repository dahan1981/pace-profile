import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PROFILES } from '@/data/profiles';
import { AssessmentResult } from '@/lib/scoring';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ArrowLeft, Download, Printer, Trophy, TrendingUp, AlertTriangle, Target, MapPin } from 'lucide-react';

const Result = () => {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('pace_last_result');
    if (!data) { navigate('/'); return; }
    setResult(JSON.parse(data));
  }, [navigate]);

  if (!result) return null;

  const primary = PROFILES[result.primaryProfile];
  const secondary = PROFILES[result.secondaryProfile];

  const barData = result.scores.map(s => ({
    name: s.name,
    value: s.percentage,
    color: s.color,
  }));

  const radarData = result.scores.map(s => ({
    subject: s.name,
    value: s.percentage,
    fullMark: 100,
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/usuario" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Voltar ao painel
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-2">
              <Printer className="h-4 w-4" /> Imprimir
            </Button>
            <Button size="sm" className="gap-2">
              <Download className="h-4 w-4" /> PDF
            </Button>
          </div>
        </div>

        {/* Primary Profile Highlight */}
        <Card className="mb-8 overflow-hidden border-2" style={{ borderColor: primary.color }}>
          <div className="h-2" style={{ backgroundColor: primary.color }} />
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">{primary.emoji}</div>
            <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Seu Perfil Predominante</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2" style={{ color: primary.color }}>
              {primary.name}
            </h1>
            <div className="text-3xl font-bold text-foreground mb-4">
              {result.scores[0].percentage}%
            </div>
            {result.isTied && (
              <p className="text-sm text-muted-foreground bg-accent px-4 py-2 rounded-lg inline-block">
                Perfil combinado: {result.tiedProfiles.map(k => PROFILES[k].name).join(' + ')}
              </p>
            )}
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              {primary.fullDescription}
            </p>
          </CardContent>
        </Card>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Distribuição dos Perfis</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {barData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Mapa Comportamental</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                  <PolarRadiusAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                  <Radar dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Ranking */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-secondary" /> Ranking dos Perfis
            </h3>
            <div className="space-y-3">
              {result.scores.map((s, i) => (
                <div key={s.key} className="flex items-center gap-4">
                  <span className="text-lg font-bold text-muted-foreground w-6">{i + 1}º</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-sm font-semibold">{s.percentage}% ({s.points} pts)</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${s.percentage}%`, backgroundColor: s.color }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Devolutiva */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-consolidador" /> Pontos Fortes
              </h3>
              <ul className="space-y-2">
                {primary.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: primary.color }} />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-secondary" /> Pontos de Atenção
              </h3>
              <ul className="space-y-2">
                {primary.attentionPoints.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" /> Áreas de Desenvolvimento
              </h3>
              <ul className="space-y-2">
                {primary.developmentAreas.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-estrategista" /> Ambientes Ideais
              </h3>
              <ul className="space-y-2">
                {primary.idealEnvironments.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-estrategista shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Ideal Action */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="font-display text-lg font-semibold mb-3">Forma Ideal de Atuação</h3>
            <p className="text-muted-foreground leading-relaxed">{primary.idealAction}</p>
          </CardContent>
        </Card>

        {/* Secondary Profile */}
        <Card className="mb-8" style={{ borderLeft: `4px solid ${secondary.color}` }}>
          <CardContent className="p-6">
            <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-2xl">{secondary.emoji}</span>
              Segundo Perfil: {secondary.name} ({result.scores[1].percentage}%)
            </h3>
            <p className="text-muted-foreground leading-relaxed">{secondary.fullDescription}</p>
          </CardContent>
        </Card>

        {/* Interpretation */}
        <Card className="mb-8 bg-accent/30 border-primary/10">
          <CardContent className="p-6">
            <h3 className="font-display text-lg font-semibold mb-3">Interpretação do Resultado</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seu perfil principal <strong>{primary.name}</strong> ({result.scores[0].percentage}%) indica que você 
              é naturalmente orientado para {primary.shortDescription.toLowerCase()} 
              Combinado com seu segundo perfil <strong>{secondary.name}</strong> ({result.scores[1].percentage}%), 
              você traz uma rica complementaridade: {secondary.shortDescription.toLowerCase()}{' '}
              Essa combinação cria um profissional que equilibra {primary.name === 'Propulsor' ? 'ação e resultado' : primary.name === 'Articulador' ? 'relacionamento e influência' : primary.name === 'Consolidador' ? 'estabilidade e qualidade' : 'análise e estratégia'} com{' '}
              {secondary.name === 'Propulsor' ? 'iniciativa e velocidade' : secondary.name === 'Articulador' ? 'comunicação e empatia' : secondary.name === 'Consolidador' ? 'consistência e confiabilidade' : 'planejamento e visão sistêmica'}.
              Use esses insights como ponto de partida para seu desenvolvimento pessoal e profissional.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link to="/usuario">
            <Button size="lg" className="gap-2">Voltar ao painel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;

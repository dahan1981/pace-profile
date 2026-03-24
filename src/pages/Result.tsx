import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Brand from '@/components/Brand';
import ProfileMark from '@/components/ProfileMark';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getLastResult } from '@/lib/auth';
import { downloadResultPdf } from '@/lib/pdf';
import { AssessmentResult } from '@/lib/scoring';
import { PROFILES } from '@/data/profiles';
import { Bar, BarChart, CartesianGrid, Cell, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { ArrowLeft, Compass, Download, MapPin, Printer, ShieldAlert, Sparkles, Trophy } from 'lucide-react';

const Result = () => {
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = getLastResult();
    if (!data) {
      navigate('/');
      return;
    }
    setResult(data);
  }, [navigate]);

  if (!result) return null;

  const primary = PROFILES[result.primaryProfile];
  const secondary = PROFILES[result.secondaryProfile];

  const barData = result.scores.map((score) => ({
    name: score.name,
    value: score.percentage,
    color: score.color,
  }));

  const radarData = result.scores.map((score) => ({
    subject: score.name,
    value: score.percentage,
    fullMark: 100,
  }));

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(12,33,84,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(199,45,62,0.12),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)] px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Brand iconClassName="h-8 w-8" titleClassName="text-lg" />
            <Link to="/usuario" className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao painel
            </Link>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => window.print()} className="gap-2 rounded-xl bg-white/80">
              <Printer className="h-4 w-4" />
              Imprimir
            </Button>
            <Button
              size="sm"
              onClick={() => downloadResultPdf(result)}
              className="gap-2 rounded-xl shadow-lg shadow-primary/20"
            >
              <Download className="h-4 w-4" />
              PDF
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="overflow-hidden border-white/80 bg-white/88 shadow-2xl shadow-slate-200/60">
            <div className="h-2" style={{ backgroundColor: primary.color }} />
            <CardContent className="p-8">
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Sparkles className="h-4 w-4" />
                    Seu perfil predominante
                  </div>
                  <div className="mt-5 flex items-center gap-4">
                    <ProfileMark profile={primary} size="lg" />
                    <div>
                      <h1 className="font-display text-5xl font-bold" style={{ color: primary.color }}>
                        {primary.name}
                      </h1>
                      <p className="mt-2 text-lg font-medium text-slate-700">
                        {result.scores[0].percentage}% de predominância
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                    {primary.fullDescription}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Segundo perfil</div>
                    <div className="mt-3 flex items-center gap-3">
                      <ProfileMark profile={secondary} size="sm" />
                      <div>
                        <div className="font-semibold text-slate-900">{secondary.name}</div>
                        <div className="text-sm text-slate-500">{result.scores[1].percentage}% de afinidade</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Leitura rápida</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Você tende a agir a partir de {primary.shortDescription.toLowerCase()} com apoio de {secondary.shortDescription.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>

              {result.isTied && (
                <div className="mt-6 rounded-2xl bg-accent/70 px-4 py-3 text-sm text-accent-foreground">
                  Perfil combinado: {result.tiedProfiles.map((key) => PROFILES[key].name).join(' + ')}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-white/80 bg-slate-950 text-white shadow-2xl shadow-slate-300/30">
            <CardContent className="p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Síntese</div>
              <h2 className="mt-3 font-display text-3xl font-bold">Seu jeito de agir em poucas linhas.</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Você combina {primary.name.toLowerCase()} com {secondary.name.toLowerCase()}.
                Isso cria uma presença que equilibra ritmo, leitura de cenário e forma de se relacionar.
              </p>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <Trophy className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Força dominante</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">{primary.idealAction}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                  <div className="flex items-center gap-3 text-white">
                    <Compass className="h-5 w-5 text-secondary" />
                    <span className="font-semibold">Combinação mais rica</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    O perfil secundário ajuda você a compensar exageros e ampliar sua forma de decidir, comunicar e executar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
            <CardContent className="p-6">
              <h3 className="font-display text-2xl font-bold text-slate-950">Distribuição dos perfis</h3>
              <div className="mt-4 h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                    <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {barData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
            <CardContent className="p-6">
              <h3 className="font-display text-2xl font-bold text-slate-950">Mapa comportamental</h3>
              <div className="mt-4 h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                    <PolarRadiusAxis tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
                    <Radar dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="border-white/80 bg-white/88 shadow-lg shadow-slate-200/50">
            <CardContent className="p-6">
              <h3 className="font-display text-2xl font-bold text-slate-950">Pontos fortes</h3>
              <ul className="mt-4 space-y-3">
                {primary.strengths.map((item, index) => (
                  <li key={index} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/80 bg-white/88 shadow-lg shadow-slate-200/50">
            <CardContent className="p-6">
              <h3 className="font-display text-2xl font-bold text-slate-950">Pontos de atenção</h3>
              <ul className="mt-4 space-y-3">
                {primary.attentionPoints.map((item, index) => (
                  <li key={index} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/80 bg-white/88 shadow-lg shadow-slate-200/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <h3 className="font-display text-2xl font-bold text-slate-950">Áreas de desenvolvimento</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {primary.developmentAreas.map((item, index) => (
                  <li key={index} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-white/80 bg-white/88 shadow-lg shadow-slate-200/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-display text-2xl font-bold text-slate-950">Ambientes ideais</h3>
              </div>
              <ul className="mt-4 space-y-3">
                {primary.idealEnvironments.map((item, index) => (
                  <li key={index} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 border-white/80 bg-white/88 shadow-xl shadow-slate-200/50">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-display text-3xl font-bold text-slate-950">Interpretação do resultado</h3>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-slate-600 md:text-base">
              Seu perfil principal <strong>{primary.name}</strong> sugere uma inclinação natural para {primary.shortDescription.toLowerCase()}
              {' '}Quando essa força aparece combinada com <strong>{secondary.name}</strong>, o resultado costuma ser uma atuação mais completa:
              mais repertório para decidir, mais nuance para se relacionar e mais recursos para adaptar sua forma de agir ao contexto.
              Use essa leitura como um ponto de partida para ampliar o que já funciona bem e desenvolver o que ainda pode crescer.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Result;

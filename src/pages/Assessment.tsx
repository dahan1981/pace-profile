import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QUESTIONNAIRES, QuestionnaireType } from '@/data/questions';
import { calculateResults } from '@/lib/scoring';
import { getCurrentAccount, saveReport } from '@/lib/auth';
import { CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const optionTone: Record<string, string> = {
  A: 'border-propulsor/25 bg-propulsor/5 text-propulsor',
  B: 'border-articulador/25 bg-articulador/5 text-articulador',
  C: 'border-consolidador/25 bg-consolidador/5 text-consolidador',
  D: 'border-estrategista/25 bg-estrategista/5 text-estrategista',
};

const optionMeaning: Record<string, string> = {
  A: 'Ação',
  B: 'Conexão',
  C: 'Constância',
  D: 'Estratégia',
};

const Assessment = () => {
  const [searchParams] = useSearchParams();
  const type = (searchParams.get('type') as QuestionnaireType) || 'empresarial';
  const questionnaire = QUESTIONNAIRES[type];
  const questions = questionnaire.questions;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;
  const question = questions[current];
  const isAnswered = answers[question.id] !== undefined;
  const allAnswered = answeredCount === questions.length;

  const selectAnswer = (letter: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: letter }));
  };

  const finish = () => {
    const account = getCurrentAccount();

    if (!account) {
      window.alert('Faça login antes de finalizar a avaliação.');
      navigate('/login');
      return;
    }

    const result = calculateResults(answers);

    saveReport({
      questionnaireType: type,
      accountEmail: account.email,
      accountName: account.role === 'company' && account.companyName ? account.companyName : account.name,
      result,
    });

    navigate('/resultado');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(12,33,84,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(199,45,62,0.12),_transparent_30%),linear-gradient(180deg,_#f8fafc_0%,_#eef2f7_100%)]">
      <div className="sticky top-0 z-40 border-b border-white/70 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between gap-4">
              <Brand iconClassName="h-7 w-7" titleClassName="text-lg" />
              <div className="hidden rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm sm:block">
                {questionnaire.title}
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white/80 px-3 py-1 shadow-sm">
                {answeredCount} de {questions.length} respondidas
              </span>
              <span className="rounded-full bg-primary px-3 py-1 font-medium text-primary-foreground shadow-sm">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          <Progress value={progress} className="h-2 bg-white/70" />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-5">
            <Card className="border-white/80 bg-white/85 shadow-lg shadow-slate-200/50">
              <CardContent className="p-6">
                <div className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary/65">
                  Pergunta {current + 1}
                </div>
                <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-slate-950">
                  Responda pelo que mais parece natural em você.
                </h1>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Evite pensar no ideal. A resposta mais útil é a que mais combina com seu comportamento espontâneo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/80 bg-white/85 shadow-lg shadow-slate-200/50">
              <CardContent className="p-5">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Mapa rápido</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {questions.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrent(index)}
                      className={`h-10 w-10 rounded-xl text-xs font-semibold transition-all ${
                        index === current
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : answers[item.id]
                            ? 'bg-primary/12 text-primary'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <main>
            <Card className="border-white/80 bg-white/88 shadow-2xl shadow-slate-200/60">
              <CardContent className="p-6 md:p-8">
                <div className="mb-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/65">
                    {questionnaire.description}
                  </div>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                    {question.text}
                  </h2>
                </div>

                <div className="space-y-4">
                  {question.options.map((option) => {
                    const selected = answers[question.id] === option.letter;
                    return (
                      <button
                        key={option.letter}
                        onClick={() => selectAnswer(option.letter)}
                        className={`w-full rounded-2xl border p-4 text-left transition-all duration-200 ${
                          selected
                            ? `${optionTone[option.letter]} shadow-lg`
                            : 'border-slate-200 bg-slate-50/70 hover:border-primary/20 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
                            selected ? 'bg-white text-slate-950' : 'bg-white text-slate-500'
                          }`}>
                            {option.letter}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                              selected ? 'text-current' : 'text-slate-400'
                            }`}>
                              {optionMeaning[option.letter]}
                            </div>
                            <p className={`mt-2 text-sm leading-7 md:text-base ${
                              selected ? 'font-medium text-slate-900' : 'text-slate-600'
                            }`}>
                              {option.text}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrent((value) => Math.max(0, value - 1))}
                    disabled={current === 0}
                    className="gap-2 rounded-xl"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Anterior
                  </Button>

                  {current < questions.length - 1 ? (
                    <Button
                      onClick={() => setCurrent((value) => value + 1)}
                      disabled={!isAnswered}
                      className="gap-2 rounded-xl shadow-lg shadow-primary/20"
                    >
                      Próxima
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={finish}
                      disabled={!allAnswered}
                      className="gap-2 rounded-xl shadow-lg shadow-primary/20"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Ver meu resultado
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Assessment;

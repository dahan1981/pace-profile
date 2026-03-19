import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { QUESTIONNAIRES, QuestionnaireType } from '@/data/questions';
import { calculateResults } from '@/lib/scoring';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const Assessment = () => {
  const [searchParams] = useSearchParams();
  const type = (searchParams.get('type') as QuestionnaireType) || 'empresarial';
  const questionnaire = QUESTIONNAIRES[type];
  const questions = questionnaire.questions;

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const navigate = useNavigate();

  const progress = (Object.keys(answers).length / questions.length) * 100;
  const question = questions[current];
  const isAnswered = answers[question.id] !== undefined;
  const allAnswered = Object.keys(answers).length === questions.length;

  const selectAnswer = (letter: string) => {
    setAnswers(prev => ({ ...prev, [question.id]: letter }));
  };

  const finish = () => {
    const result = calculateResults(answers);
    const resultData = JSON.stringify(result);
    localStorage.setItem('pace_last_result', resultData);
    const history = JSON.parse(localStorage.getItem('pace_history') || '[]');
    history.unshift({ date: new Date().toISOString(), type, result });
    localStorage.setItem('pace_history', JSON.stringify(history));
    navigate('/resultado');
  };

  const letterLabels: Record<string, string> = { A: 'A', B: 'B', C: 'C', D: 'D' };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-display text-lg font-semibold text-primary">{questionnaire.title}</h2>
            <span className="text-sm text-muted-foreground font-medium">
              {Object.keys(answers).length}/{questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Question */}
        <div className="mb-2 text-sm font-medium text-muted-foreground">
          Pergunta {current + 1} de {questions.length}
        </div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8 leading-snug">
          {question.text}
        </h3>

        <div className="space-y-3 mb-10">
          {question.options.map(opt => {
            const selected = answers[question.id] === opt.letter;
            return (
              <button
                key={opt.letter}
                onClick={() => selectAnswer(opt.letter)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 ${
                  selected
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border hover:border-primary/30 hover:bg-accent/50'
                }`}
              >
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold shrink-0 ${
                  selected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {letterLabels[opt.letter]}
                </span>
                <span className={`text-sm md:text-base leading-relaxed pt-1 ${selected ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrent(c => Math.max(0, c - 1))}
            disabled={current === 0}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Anterior
          </Button>

          {current < questions.length - 1 ? (
            <Button
              onClick={() => setCurrent(c => c + 1)}
              disabled={!isAnswered}
              className="gap-2"
            >
              Próxima <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={finish}
              disabled={!allAnswered}
              className="gap-2"
            >
              <CheckCircle2 className="h-4 w-4" /> Finalizar
            </Button>
          )}
        </div>

        {/* Question dots */}
        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrent(i)}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                i === current
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : answers[q.id]
                    ? 'bg-primary/20 text-primary'
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assessment;

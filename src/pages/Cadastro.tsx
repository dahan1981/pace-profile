import { FormEvent, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { RefreshCcw, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type LeadType = "empresa" | "individual";

type FormState = {
  name: string;
  email: string;
  phone: string;
  context: string;
  role: string;
  extra: string;
  need: string;
};

const INITIAL_FORM_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  context: "",
  role: "",
  extra: "",
  need: "",
};

const Cadastro = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const formType: LeadType = searchParams.get("type") === "empresa" ? "empresa" : "individual";
  const isEnterprise = formType === "empresa";

  const content = useMemo(
    () =>
      isEnterprise
        ? {
            heading:
              "Preencha os dados da empresa com atenção e entraremos em contato por ligação e WhatsApp para estruturar o atendimento ideal.",
            contextPlaceholder: "Empresa",
            rolePlaceholder: "Seu cargo",
            extraPlaceholder: "Número de funcionários",
            needPlaceholder: "Qual a principal necessidade da sua empresa?",
            successMessage:
              "Recebemos seus dados. Nossa equipe vai analisar o contexto da empresa e entrar em contato.",
          }
        : {
            heading:
              "Preencha seus dados com atenção e entraremos em contato por ligação e WhatsApp para indicar o programa ideal para você.",
            contextPlaceholder: "Cidade e estado",
            rolePlaceholder: "Profissão ou área de atuação",
            extraPlaceholder: "Qual programa despertou seu interesse?",
            needPlaceholder: "O que você busca neste momento?",
            successMessage:
              "Recebemos seus dados. Nossa equipe vai entrar em contato para orientar o próximo passo.",
          },
    [isEnterprise],
  );

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: formType,
          ...form,
        }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || "Não foi possível enviar o formulário agora.");
      }

      setForm(INITIAL_FORM_STATE);
      setFeedback({ type: "success", message: content.successMessage });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Não foi possível enviar o formulário agora.";

      setFeedback({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[500px] rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute right-4 top-4 p-2 text-slate-400 transition-colors hover:text-slate-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 mt-4 px-2 text-center">
          <h2 className="text-[1.05rem] font-bold leading-snug text-slate-900">
            {content.heading}
          </h2>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Nome completo"
            className="h-12 rounded-xl border-slate-100 bg-slate-50 text-base placeholder:text-slate-500"
          />

          <Input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="Seu melhor email"
            className="h-12 rounded-xl border-slate-100 bg-slate-50 text-base placeholder:text-slate-500"
          />

          <div className="flex h-12 items-center overflow-hidden rounded-xl border border-slate-100 bg-slate-50 px-4 focus-within:ring-2 focus-within:ring-primary">
            <span className="mr-2 flex select-none items-center gap-1 text-base text-slate-700">
              BR <ChevronDownIcon className="h-3 w-3 text-slate-400" />
            </span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+55 (11) 96123-4567"
              className="w-full flex-1 border-none bg-transparent text-base outline-none placeholder:text-slate-500"
            />
          </div>

          <Input
            value={form.context}
            onChange={(event) => updateField("context", event.target.value)}
            placeholder={content.contextPlaceholder}
            className="h-12 rounded-xl border-slate-100 bg-slate-50 text-base placeholder:text-slate-500"
          />

          <Input
            value={form.role}
            onChange={(event) => updateField("role", event.target.value)}
            placeholder={content.rolePlaceholder}
            className="h-12 rounded-xl border-slate-100 bg-slate-50 text-base placeholder:text-slate-500"
          />

          <Input
            value={form.extra}
            onChange={(event) => updateField("extra", event.target.value)}
            placeholder={content.extraPlaceholder}
            className="h-12 rounded-xl border-slate-100 bg-slate-50 text-base placeholder:text-slate-500"
          />

          <Textarea
            value={form.need}
            onChange={(event) => updateField("need", event.target.value)}
            placeholder={content.needPlaceholder}
            className="min-h-[100px] resize-none rounded-xl border-slate-100 bg-slate-50 text-base placeholder:text-slate-500"
          />

          <div className="mt-4 flex w-full max-w-[280px] items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 cursor-pointer rounded-sm border-2 border-slate-300 bg-white transition-colors hover:border-slate-400" />
              <span className="text-sm font-medium text-slate-700">Não sou um robô</span>
            </div>
            <div className="flex flex-col items-center justify-center opacity-60">
              <RefreshCcw className="mb-1 h-6 w-6 text-blue-600" />
              <span className="text-[10px] text-slate-500">reCAPTCHA</span>
            </div>
          </div>

          {feedback ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
                feedback.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-rose-200 bg-rose-50 text-rose-700"
              }`}
            >
              {feedback.message}
            </div>
          ) : null}

          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-[52px] w-full rounded-xl bg-black text-lg font-bold text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Quero ser contatado"}
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default Cadastro;

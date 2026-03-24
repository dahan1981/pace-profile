export type ProfileKey = 'propulsor' | 'articulador' | 'consolidador' | 'estrategista';

export interface ProfileInfo {
  key: ProfileKey;
  name: string;
  letter: string;
  color: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  strengths: string[];
  attentionPoints: string[];
  developmentAreas: string[];
  idealAction: string;
  idealEnvironments: string[];
}

export const PROFILES: Record<ProfileKey, ProfileInfo> = {
  propulsor: {
    key: 'propulsor',
    name: 'Propulsor',
    letter: 'P',
    color: 'hsl(0, 84%, 60%)',
    emoji: 'P',
    shortDescription: 'Movido pela ação, velocidade e resultados concretos.',
    fullDescription: 'O Propulsor é orientado para resultados. Age com rapidez, busca desafios e gosta de liderar mudanças. É competitivo, direto e focado em metas. Em ambientes de alta performance, é quem puxa o time para frente.',
    strengths: [
      'Orientação para resultados',
      'Tomada de decisão rápida',
      'Liderança assertiva',
      'Capacidade de execução',
      'Coragem para correr riscos',
      'Energia e proatividade',
    ],
    attentionPoints: [
      'Pode ser impaciente com processos lentos',
      'Tende a atropelar etapas',
      'Pode parecer autoritário ou insensível',
      'Dificuldade em delegar',
      'Resistência a ouvir opiniões contrárias',
    ],
    developmentAreas: [
      'Escuta ativa e empatia',
      'Paciência com processos e pessoas',
      'Valorização do trabalho em equipe',
      'Equilíbrio entre velocidade e qualidade',
    ],
    idealAction: 'Atua melhor quando pode liderar, tomar decisões rápidas e ver os resultados de suas ações de forma concreta e mensurável.',
    idealEnvironments: [
      'Ambientes competitivos e dinâmicos',
      'Projetos com metas claras',
      'Startups e ambientes de alta velocidade',
      'Posições de liderança e gestão',
    ],
  },
  articulador: {
    key: 'articulador',
    name: 'Articulador',
    letter: 'A',
    color: 'hsl(38, 92%, 50%)',
    emoji: 'A',
    shortDescription: 'Conecta pessoas, constrói relacionamentos e inspira.',
    fullDescription: 'O Articulador é comunicativo, empático e sociável. Constrói pontes entre pessoas e grupos, gerando ambientes de colaboração. É entusiasta, motivador e valoriza o relacionamento como base de qualquer conquista.',
    strengths: [
      'Comunicação interpessoal',
      'Capacidade de motivar e inspirar',
      'Habilidade de networking',
      'Criatividade e entusiasmo',
      'Facilidade em resolver conflitos',
      'Empatia e escuta ativa',
    ],
    attentionPoints: [
      'Pode ser disperso e pouco focado em detalhes',
      'Tende a buscar aprovação constante',
      'Dificuldade com tarefas repetitivas',
      'Pode prometer mais do que consegue entregar',
      'Resistência a confrontos necessários',
    ],
    developmentAreas: [
      'Foco e disciplina em tarefas',
      'Gestão de tempo e prioridades',
      'Capacidade de dizer não',
      'Profundidade analítica',
    ],
    idealAction: 'Atua melhor quando pode interagir com pessoas, construir consensos e liderar com carisma e influência.',
    idealEnvironments: [
      'Ambientes colaborativos e abertos',
      'Equipes multidisciplinares',
      'Projetos que envolvem comunicação',
      'Posições de vendas, marketing ou RH',
    ],
  },
  consolidador: {
    key: 'consolidador',
    name: 'Consolidador',
    letter: 'C',
    color: 'hsl(142, 72%, 40%)',
    emoji: 'C',
    shortDescription: 'Estável, confiável e comprometido com a qualidade.',
    fullDescription: 'O Consolidador é metódico, confiável e perseverante. Valoriza a estabilidade e a consistência. É paciente, leal e busca construir resultados sólidos a longo prazo. Em equipes, é o pilar de sustentação.',
    strengths: [
      'Confiabilidade e lealdade',
      'Persistência e disciplina',
      'Atenção à qualidade',
      'Estabilidade emocional',
      'Capacidade de manter processos',
      'Trabalho em equipe constante',
    ],
    attentionPoints: [
      'Resistência a mudanças',
      'Pode evitar conflitos necessários',
      'Lentidão na tomada de decisão',
      'Tendência a zona de conforto',
      'Dificuldade com urgências',
    ],
    developmentAreas: [
      'Flexibilidade e adaptação',
      'Iniciativa e proatividade',
      'Comunicação assertiva',
      'Abertura para inovação',
    ],
    idealAction: 'Atua melhor quando pode construir com consistência, seguir processos claros e contribuir com estabilidade para o grupo.',
    idealEnvironments: [
      'Ambientes estáveis e bem estruturados',
      'Projetos de longo prazo',
      'Funções operacionais e de suporte',
      'Equipes com papéis bem definidos',
    ],
  },
  estrategista: {
    key: 'estrategista',
    name: 'Estrategista',
    letter: 'E',
    color: 'hsl(215, 80%, 50%)',
    emoji: 'E',
    shortDescription: 'Analítico, visionário e orientado por dados.',
    fullDescription: 'O Estrategista é analítico, criterioso e reflexivo. Busca entender profundamente antes de agir. É planejador, organizado e valoriza dados, lógica e eficiência. Em equipes, é quem antecipa cenários e propõe soluções estruturadas.',
    strengths: [
      'Pensamento analítico e estratégico',
      'Planejamento e organização',
      'Atenção a detalhes',
      'Capacidade de antecipação',
      'Tomada de decisão baseada em dados',
      'Visão sistêmica',
    ],
    attentionPoints: [
      'Pode ser perfeccionista demais',
      'Tendência a análise paralisante',
      'Dificuldade em expressar emoções',
      'Pode parecer frio ou distante',
      'Resistência a agir sem dados completos',
    ],
    developmentAreas: [
      'Inteligência emocional',
      'Velocidade de ação',
      'Comunicação mais empática',
      'Tolerância a ambiguidade',
    ],
    idealAction: 'Atua melhor quando pode planejar, analisar dados e desenhar estratégias de longo prazo com base em evidências.',
    idealEnvironments: [
      'Ambientes que valorizam análise e planejamento',
      'Projetos complexos e de longo prazo',
      'Funções de estratégia, dados ou tecnologia',
      'Posições de consultoria e pesquisa',
    ],
  },
};

export const PROFILE_ORDER: ProfileKey[] = ['propulsor', 'articulador', 'consolidador', 'estrategista'];
export const LETTER_TO_PROFILE: Record<string, ProfileKey> = {
  A: 'propulsor',
  B: 'articulador',
  C: 'consolidador',
  D: 'estrategista',
};

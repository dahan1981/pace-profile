import { ProfileKey, LETTER_TO_PROFILE, PROFILES } from '@/data/profiles';

export interface ProfileScore {
  key: ProfileKey;
  name: string;
  points: number;
  percentage: number;
  color: string;
}

export interface AssessmentResult {
  scores: ProfileScore[];
  primaryProfile: ProfileKey;
  secondaryProfile: ProfileKey;
  isTied: boolean;
  tiedProfiles: ProfileKey[];
  totalAnswers: number;
}

export function calculateResults(answers: Record<number, string>): AssessmentResult {
  const counts: Record<ProfileKey, number> = {
    propulsor: 0, articulador: 0, consolidador: 0, estrategista: 0
  };

  Object.values(answers).forEach(letter => {
    const profile = LETTER_TO_PROFILE[letter];
    if (profile) counts[profile]++;
  });

  const total = Object.values(counts).reduce((s, v) => s + v, 0);

  const scores: ProfileScore[] = Object.entries(counts)
    .map(([key, points]) => ({
      key: key as ProfileKey,
      name: PROFILES[key as ProfileKey].name,
      points,
      percentage: total > 0 ? Math.round((points / total) * 100) : 0,
      color: PROFILES[key as ProfileKey].color,
    }))
    .sort((a, b) => b.points - a.points);

  const maxPoints = scores[0].points;
  const tiedProfiles = scores.filter(s => s.points === maxPoints).map(s => s.key);

  return {
    scores,
    primaryProfile: scores[0].key,
    secondaryProfile: scores[1].key,
    isTied: tiedProfiles.length > 1,
    tiedProfiles,
    totalAnswers: total,
  };
}

import { ProfileInfo } from '@/data/profiles';

type ProfileMarkSize = 'sm' | 'md' | 'lg';

const toneClasses: Record<ProfileInfo['key'], string> = {
  propulsor: 'border-propulsor/20 bg-propulsor/10 text-propulsor',
  articulador: 'border-articulador/20 bg-articulador/10 text-articulador',
  consolidador: 'border-consolidador/20 bg-consolidador/10 text-consolidador',
  estrategista: 'border-estrategista/20 bg-estrategista/10 text-estrategista',
};

const sizeClasses: Record<ProfileMarkSize, string> = {
  sm: 'h-10 w-10 rounded-xl text-sm',
  md: 'h-12 w-12 rounded-2xl text-base',
  lg: 'h-20 w-20 rounded-3xl text-3xl',
};

interface ProfileMarkProps {
  profile: ProfileInfo;
  size?: ProfileMarkSize;
}

const ProfileMark = ({ profile, size = 'md' }: ProfileMarkProps) => (
  <div
    className={[
      'relative inline-flex items-center justify-center border font-display font-bold shadow-sm',
      toneClasses[profile.key],
      sizeClasses[size],
    ].join(' ')}
    aria-hidden="true"
  >
    <span>{profile.letter}</span>
    <span className="absolute bottom-2 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-current opacity-40" />
  </div>
);

export default ProfileMark;

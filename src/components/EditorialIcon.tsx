import { LucideIcon } from 'lucide-react';

type EditorialTone = 'ruby' | 'navy' | 'gold' | 'forest' | 'slate' | 'sky';

const toneMap: Record<EditorialTone, {
  shell: string;
  orb: string;
  line: string;
  icon: string;
  chip: string;
}> = {
  ruby: {
    shell: 'bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(246,236,238,0.98))] border-[rgba(199,45,62,0.10)]',
    orb: 'bg-[radial-gradient(circle_at_35%_35%,_rgba(199,45,62,0.22),_rgba(199,45,62,0.08)_62%,_transparent_64%)]',
    line: 'bg-[rgba(199,45,62,0.18)]',
    icon: 'text-[rgb(150,31,45)]',
    chip: 'bg-[rgba(199,45,62,0.12)] text-[rgb(150,31,45)]',
  },
  navy: {
    shell: 'bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(235,240,248,0.98))] border-[rgba(12,33,84,0.10)]',
    orb: 'bg-[radial-gradient(circle_at_35%_35%,_rgba(12,33,84,0.18),_rgba(12,33,84,0.06)_62%,_transparent_64%)]',
    line: 'bg-[rgba(12,33,84,0.18)]',
    icon: 'text-[rgb(16,54,128)]',
    chip: 'bg-[rgba(12,33,84,0.10)] text-[rgb(16,54,128)]',
  },
  gold: {
    shell: 'bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(250,245,234,0.98))] border-[rgba(176,118,20,0.12)]',
    orb: 'bg-[radial-gradient(circle_at_35%_35%,_rgba(214,164,59,0.22),_rgba(214,164,59,0.08)_62%,_transparent_64%)]',
    line: 'bg-[rgba(176,118,20,0.18)]',
    icon: 'text-[rgb(156,108,21)]',
    chip: 'bg-[rgba(214,164,59,0.14)] text-[rgb(156,108,21)]',
  },
  forest: {
    shell: 'bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(235,245,239,0.98))] border-[rgba(43,124,84,0.10)]',
    orb: 'bg-[radial-gradient(circle_at_35%_35%,_rgba(43,124,84,0.18),_rgba(43,124,84,0.06)_62%,_transparent_64%)]',
    line: 'bg-[rgba(43,124,84,0.18)]',
    icon: 'text-[rgb(38,108,73)]',
    chip: 'bg-[rgba(43,124,84,0.12)] text-[rgb(38,108,73)]',
  },
  slate: {
    shell: 'bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(240,243,247,0.98))] border-[rgba(80,96,120,0.10)]',
    orb: 'bg-[radial-gradient(circle_at_35%_35%,_rgba(80,96,120,0.16),_rgba(80,96,120,0.05)_62%,_transparent_64%)]',
    line: 'bg-[rgba(80,96,120,0.18)]',
    icon: 'text-[rgb(71,89,116)]',
    chip: 'bg-[rgba(80,96,120,0.12)] text-[rgb(71,89,116)]',
  },
  sky: {
    shell: 'bg-[linear-gradient(145deg,_rgba(255,255,255,0.96),_rgba(235,245,251,0.98))] border-[rgba(46,112,181,0.10)]',
    orb: 'bg-[radial-gradient(circle_at_35%_35%,_rgba(46,112,181,0.18),_rgba(46,112,181,0.06)_62%,_transparent_64%)]',
    line: 'bg-[rgba(46,112,181,0.18)]',
    icon: 'text-[rgb(35,97,161)]',
    chip: 'bg-[rgba(46,112,181,0.12)] text-[rgb(35,97,161)]',
  },
};

interface EditorialIconProps {
  icon: LucideIcon;
  tone?: EditorialTone;
  label: string;
}

const EditorialIcon = ({ icon: Icon, tone = 'navy', label }: EditorialIconProps) => {
  const styles = toneMap[tone];

  return (
    <div className="relative inline-flex h-20 w-24 items-center justify-center" aria-hidden="true">
      <div className={`absolute left-3 top-3 h-14 w-14 rounded-[1.35rem] border shadow-[0_18px_40px_-26px_rgba(15,23,42,0.55)] ${styles.shell}`} />
      <div className={`absolute left-1 top-8 h-8 w-8 rounded-full blur-[1px] ${styles.orb}`} />
      <div className={`absolute right-2 top-1 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${styles.chip}`}>
        {label}
      </div>
      <div className={`absolute bottom-2 left-6 h-[2px] w-12 rounded-full ${styles.line}`} />
      <div className={`absolute left-[1.65rem] top-[1.55rem] ${styles.icon}`}>
        <Icon className="h-6 w-6" strokeWidth={1.9} />
      </div>
      <div className={`absolute left-[3.55rem] top-[0.95rem] h-2.5 w-2.5 rounded-full ${styles.line}`} />
    </div>
  );
};

export default EditorialIcon;

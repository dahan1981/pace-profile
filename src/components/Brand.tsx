import iconPrincipal from '@/assets/iconeprincipal.png';

interface BrandProps {
  title?: string;
  subtitle?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  stacked?: boolean;
}

const Brand = ({
  title = 'MÉTODO PACE',
  subtitle,
  iconClassName = 'h-8 w-8',
  titleClassName = 'text-xl',
  subtitleClassName = 'mt-1 text-xs tracking-wide text-muted-foreground',
  stacked = false,
}: BrandProps) => {
  return (
    <div className={stacked ? 'flex min-w-0 flex-col items-center' : 'flex min-w-0 items-center gap-3'}>
      <img src={iconPrincipal} alt="Marca ILAC" className={iconClassName} />
      <div className={stacked ? 'mt-3 min-w-0 text-center' : 'min-w-0'}>
        <div className={`font-display font-bold leading-none text-primary ${titleClassName}`}>{title}</div>
        {subtitle ? <div className={subtitleClassName}>{subtitle}</div> : null}
      </div>
    </div>
  );
};

export default Brand;

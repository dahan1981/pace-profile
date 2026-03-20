import iconPrincipal from '@/assets/iconeprincipal.png';

interface BrandProps {
  title?: string;
  subtitle?: string;
  iconClassName?: string;
  titleClassName?: string;
  stacked?: boolean;
}

const Brand = ({
  title = 'MÉTODO PACE',
  subtitle,
  iconClassName = 'h-8 w-8',
  titleClassName = 'text-xl',
  stacked = false,
}: BrandProps) => {
  return (
    <div className={stacked ? 'flex flex-col items-center' : 'flex items-center gap-3'}>
      <img src={iconPrincipal} alt="Marca ILAC" className={iconClassName} />
      <div className={stacked ? 'mt-3 text-center' : ''}>
        <div className={`font-display font-bold leading-none text-primary ${titleClassName}`}>{title}</div>
        {subtitle ? <div className="mt-1 text-xs tracking-wide text-muted-foreground">{subtitle}</div> : null}
      </div>
    </div>
  );
};

export default Brand;

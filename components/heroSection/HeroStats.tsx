// Dependencies
import { cn } from '@/lib/utils';

// Types
type Props = {
  value: number | string;
  label: string;
  className?: string;
};

/**
 * The HeroStats component
 * @description Will render the HeroStats
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The HeroStats component
 */
export const HeroStats = ({ value, label, className }: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col border-r last:border-r-0 border-border pr-4',
        className
      )}
    >
      <p className='text-3xl font-bold text-foreground'>{value}</p>
      <p className='mt-1 text-sm text-muted-foreground'>{label}</p>
    </div>
  );
};

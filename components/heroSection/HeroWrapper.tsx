// Dependencies
import { cn } from '@/lib/utils';

// Types
import type { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  subpage?: boolean;
  className?: string;
};

/**
 * The HeroWrapper component
 * @description Will render the HeroWrapper
 * @param {Props} props The component props
 * @param {ReactNode} props.children The component children
 * @param {VariantUnion} props.variant The component variant
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The HeroWrapper component
 */
export const HeroWrapper = ({ subpage = false, children, className }: Props) => {
  return (
    <section
      className={cn(
        'relative flex flex-col items-center justify-center',
        {
          'min-h-[550px] sm:min-h-[600px]': !subpage,
          'min-h-[400px]': subpage,
        },
        className
      )}
    >
      {children}
    </section>
  );
};

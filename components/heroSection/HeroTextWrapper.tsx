// Dependencies
import { cn } from '@/lib/utils';

// Types
import type { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * The HeroTextWrapper component
 * @description Will render the HeroTextWrapper
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The HeroTextWrapper component
 */
export const HeroTextWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

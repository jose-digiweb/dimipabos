// Dependencies
import { cn } from '@/lib/utils';

// Types
import type { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * The SectionTitle component
 * @description Will render the SectionTitle
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The SectionTitle component
 */
export const SectionTitle = ({ children, className }: Props) => {
  return (
    <h2
      className={cn(
        'text-3xl font-bold tracking-tight whitespace-nowrap text-foreground sm:text-4xl',
        className
      )}
    >
      {children}
    </h2>
  );
};

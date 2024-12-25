// Dependencies
import { cn } from '@/lib/utils';

// Types
import type { ReactNode } from 'react';
type Props = {
  children: ReactNode;
  className?: string;
};

/**
 * The HeroDescription component
 * @description Will render the HeroDescription
 * @param {Props} props The component props
 * @param {ReactNode} props.children The component children
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The HeroDescription component
 */
export const HeroDescription = ({ children, className }: Props) => {
  return (
    <p
      className={cn(
        'mt-6 text-xl text-pretty max-w-xl leading-8 text-muted-foreground',
        className
      )}
    >
      {children}
    </p>
  );
};

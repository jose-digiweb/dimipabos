// Dependencies
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '../ui/button';
import { HeartHandshake } from 'lucide-react';
import Link from 'next/link';

type Props = {
  text?: string;
} & Omit<ButtonProps, 'variant'>;

/**
 * The CATButton component
 * @description Will render the CATButton
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The CATButton component
 */
export const CTAButton = ({ text, size = 'lg', className }: Props) => {
  return (
    <Button asChild size={size} variant='CTA'>
      <Link
        href='/como-ajudar'
        className={cn('flex group items-center gap-4', className)}
      >
        <span>{text ? text : 'Doe Agora'}</span>

        <HeartHandshake className='size-6 group-hover:animate-pulse' />
      </Link>
    </Button>
  );
};

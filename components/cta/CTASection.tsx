// Dependencies
import { cn } from '@/lib/utils';
import { SectionTitle, SectionDescription } from '../section';
import { Button } from '../ui/button';
import Link from 'next/link';
import { CTAButton } from './CTAButton';

// Types
type Props = {
  className?: string;
};

/**
 * The CTASection component
 * @description Will render the CTASection
 * @param {Props} props The component props
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The CTASection component
 */
export const CTASection = ({ className }: Props) => {
  return (
    <section className={cn('bg-accent py-16 text-accent-foreground', className)}>
      <div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <SectionTitle>Faça Parte Desta Mudança</SectionTitle>

        <SectionDescription className='text-accent-foreground/90'>
          Sua contribuição pode transformar vidas. <br /> Junte-se a nós nessa missão.
        </SectionDescription>

        <div className='mt-8 flex justify-center gap-4'>
          <CTAButton />
          <Button asChild size='lg' variant='outline'>
            <Link href='/como-ajudar#voluntario'>Seja Voluntário</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

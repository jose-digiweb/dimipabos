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
    <section className={cn('bg-primary py-16 text-primary-foreground', className)}>
      <div className='mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8'>
        <div className='inline-flex mb-4 items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white'>
          <span className='relative flex h-3 w-3 mr-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
            <span className='relative inline-flex h-3 w-3 rounded-full bg-secondary'></span>
          </span>
          Faça Parte Desta Construção
        </div>

        <SectionTitle className='text-primary-foreground'>
          Ajude a Construir Esperança
        </SectionTitle>
        <SectionDescription className='text-primary-foreground'>
          Sua contribuição é fundamental para concluirmos a construção do centro e
          começarmos a transformar vidas. Cada tijolo conta, cada ajuda importa.
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

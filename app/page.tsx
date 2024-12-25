import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ImpactStats } from '@/components/impact-stats';
import { TestimonialSection } from '@/components/testimonial-section';

import { SectionTitle, SectionDescription } from '@/components/section';
import { CTASection, CTAButton } from '@/components/cta';
import {
  HeroTitle,
  HeroDescription,
  HeroImage,
  HeroWrapper,
  HeroTextWrapper,
  HeroProjectCard,
} from '@/components/heroSection';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col'>
      <HeroWrapper>
        <HeroImage />

        <HeroTextWrapper>
          <HeroTitle>DI MI PA BÔS</HeroTitle>

          <span className='block text-2xl mt-2 text-pretty font-medium sm:text-3xl md:text-4xl'>
            Transformando vidas na Guiné-Bissau
          </span>

          <HeroDescription>
            Pequenos gestos que fazem toda a diferença na vida de quem mais precisa.
          </HeroDescription>
        </HeroTextWrapper>

        <div className='mt-10 flex justify-center gap-4'>
          <CTAButton />

          <Button asChild size='lg' variant='outline'>
            <Link href='/sobre' className='text-white'>
              Saiba Mais
            </Link>
          </Button>
        </div>
      </HeroWrapper>

      <ImpactStats />

      <section className='bg-muted py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>Nossos Projetos</SectionTitle>

            <SectionDescription>
              Conheça as principais iniciativas que estão transformando vidas na
              Guiné-Bissau.
            </SectionDescription>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            <HeroProjectCard icon='home' title='Habitação Digna' href='/projetos'>
              Construímos casas simples, mas confortáveis, para pessoas sem teto ou
              vivendo em condições precárias.
            </HeroProjectCard>

            <HeroProjectCard icon='reab' title='Reabilitação' href='/projetos'>
              Oferecemos tratamento, apoio psicológico e reintegração social a dependentes
              de álcool e drogas.
            </HeroProjectCard>

            <HeroProjectCard icon='edu' title='Educação' href='/projetos'>
              Promovemos oficinas de costura, carpintaria e alfabetização para adultos.
            </HeroProjectCard>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <CTASection />
    </div>
  );
}

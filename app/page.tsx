import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TestimonialSection } from '@/components/testimonial-section';
import { SectionTitle, SectionDescription } from '@/components/section';
import { CTASection, CTAButton } from '@/components/cta';
import {
  HeroDescription,
  HeroTitle,
  HeroTopText,
  HeroWrapper,
  HeroSubtitle,
  HeroStats,
  HeroCard,
  HeroCardSection,
} from '@/components/heroSection';
import { HomeProjectCard } from '@/components/HomeProjectCard';

import heroImage from '@/assets/heroSection/hero_image.jpg';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col'>
      <HeroWrapper>
        <div className='flex flex-col justify-center'>
          <HeroTopText>Transformando Vidas</HeroTopText>

          <HeroTitle>DI MI PA BÔS</HeroTitle>
          <HeroSubtitle>Pequenos gestos que fazem toda a diferença</HeroSubtitle>

          <HeroDescription>
            A ONG DI MI PA BÔS oferece possibilidades de habitação, cuidado e serviços
            essenciais às pessoas que mais precisam na Guiné-Bissau.
          </HeroDescription>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <CTAButton />
            <Button asChild size='lg' variant='outline'>
              <Link href='/sobre'>Saiba Mais</Link>
            </Button>
          </div>

          <div className='mt-10 flex items-center gap-4'>
            <HeroStats value={+500} label='Vidas Transformadas' />

            <HeroStats value={10} label='Casas Construídas' />

            <HeroStats value={100} label='Voluntários Ativos' />
          </div>
        </div>

        <HeroCardSection>
          <HeroCard variant='home' title='Nossa Missão' image={heroImage}>
            Garantir dignidade e conforto a quem mais precisa, transformando vidas através
            de ações concretas.
          </HeroCard>
        </HeroCardSection>
      </HeroWrapper>

      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>Nossos Projetos</SectionTitle>

            <SectionDescription>
              Conheça as principais iniciativas que estão transformando vidas na
              Guiné-Bissau.
            </SectionDescription>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            <HomeProjectCard icon='home' title='Habitação Digna' href='/projetos'>
              Construímos casas simples, mas confortáveis, para pessoas sem teto ou
              vivendo em condições precárias.
            </HomeProjectCard>

            <HomeProjectCard icon='reab' title='Reabilitação' href='/projetos'>
              Oferecemos tratamento, apoio psicológico e reintegração social a dependentes
              de álcool e drogas.
            </HomeProjectCard>

            <HomeProjectCard icon='edu' title='Educação' href='/projetos'>
              Promovemos oficinas de costura, carpintaria e alfabetização para adultos.
            </HomeProjectCard>
          </div>
        </div>
      </section>

      <TestimonialSection />

      <CTASection />
    </div>
  );
}

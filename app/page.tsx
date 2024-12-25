import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { TestimonialSection } from '@/components/testimonial-section';

import { SectionTitle, SectionDescription } from '@/components/section';
import { CTASection, CTAButton } from '@/components/cta';
import {
  HeroDescription,
  HeroProjectCard,
  HeroTitle,
  HeroTopText,
  HeroWrapper,
} from '@/components/heroSection';
import { Heart, Home, Users } from 'lucide-react';
import Image from 'next/image';

import heroImage from '@/assets/heroSection/hero_image.jpg';
import { HeroSubtitle } from '@/components/heroSection/HeroSubtitle';
import { HeroStats } from '@/components/heroSection/HeroStats';

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

        <div className='relative flex items-center justify-center'>
          <div className='absolute -left-12 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-secondary/30 blur-3xl' />
          <div className='absolute -right-12 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl' />

          <div className='relative grid gap-6'>
            <div className='overflow-hidden rounded-2xl bg-white shadow-2xl max-w-lg'>
              <div className='aspect-video relative w-full'>
                <Image
                  fill
                  priority
                  src={heroImage}
                  alt='Impacto na comunidade'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Nossa Missão</h3>
                <p className='mt-2 text-muted-foreground'>
                  Garantir dignidade e conforto a quem mais precisa, transformando vidas
                  através de ações concretas.
                </p>
                <div className='mt-6 flex gap-4'>
                  <div className='flex size-12 items-center justify-center rounded-full bg-primary/10'>
                    <Home className='size-6 text-primary' />
                  </div>
                  <div className='flex size-12 items-center justify-center rounded-full bg-secondary/10'>
                    <Heart className='size-6 text-secondary' />
                  </div>
                  <div className='flex size-12 items-center justify-center rounded-full bg-accent/10'>
                    <Users className='size-6 text-accent-foreground' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

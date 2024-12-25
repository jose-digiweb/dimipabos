import { Heart, Users, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DonationSection } from '@/components/donation-section';
import { VolunteerForm } from '@/components/volunteer-form';
import { PartnershipForm } from '@/components/partnership-form';
import { TestimonialSection } from '@/components/testimonial-section';
import { SectionTitle, SectionDescription } from '@/components/section';
import { CTAButton, CTASection } from '@/components/cta';
import Link from 'next/link';
import {
  HeroDescription,
  HeroTitle,
  HeroTopText,
  HeroWrapper,
  HeroSubtitle,
  HeroCard,
  HeroCardSection,
  HeroStats,
} from '@/components/heroSection';

import projHabitacao from '@/assets/projectos/proj_habitacao.jpeg';

export default function HelpPage() {
  return (
    <div className='flex min-h-dvh flex-col'>
      {/* Hero Section */}
      <HeroWrapper>
        <div className='flex flex-col justify-center'>
          <HeroTopText>Como Ajudar</HeroTopText>

          <HeroTitle>Faça Parte da Mudança</HeroTitle>
          <HeroSubtitle>Junte-se a nós e transforme vidas</HeroSubtitle>

          <HeroDescription>
            Existem várias maneiras de contribuir com nossa causa. Sua ajuda é fundamental
            para continuarmos transformando vidas na Guiné-Bissau.
          </HeroDescription>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <CTAButton size='lg' />

            <Button asChild size='lg' variant='outline'>
              <a href='#voluntario'>Seja Voluntário</a>
            </Button>
          </div>

          <div className='mt-10 flex items-center gap-4'>
            <HeroStats value='10+' label='Voluntários Ativos' />

            <HeroStats value='5+' label='Empresas Parceiras' />
          </div>
        </div>

        <HeroCardSection>
          <HeroCard variant='ajudar' title='Como Você Pode Ajudar' image={projHabitacao}>
            Escolha a forma que mais combina com você e faça parte desta transformação
            social.
          </HeroCard>
        </HeroCardSection>
      </HeroWrapper>

      {/* Ways to Help Section */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>Como Você Pode Ajudar</SectionTitle>

            <SectionDescription>
              Existem várias maneiras de contribuir com nossa causa. Escolha a que mais
              combina com você.
            </SectionDescription>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            <div className='flex flex-col items-center rounded-lg bg-muted p-8 text-center'>
              <Heart className='size-12 text-secondary' />

              <h3 className='mt-4 text-xl font-bold'>Doe</h3>

              <p className='mt-2 text-pretty'>
                Sua doação ajuda a construir casas, fornecer tratamentos e transformar
                vidas.
              </p>

              <Button asChild variant='CTA' className='mt-6'>
                <Link href='#doar'>Doe Agora</Link>
              </Button>
            </div>

            <div className='flex flex-col items-center rounded-lg bg-muted p-8 text-center'>
              <Users className='size-12 text-secondary' />

              <h3 className='mt-4 text-xl font-bold'>Seja Voluntário</h3>
              <p className='mt-2 text-pretty'>
                Dedique seu tempo e habilidades para fazer a diferença na vida de alguém.
              </p>

              <Button asChild variant='CTA' className='mt-6'>
                <Link href='#voluntario'>Inscreva-se</Link>
              </Button>
            </div>

            <div className='flex flex-col items-center rounded-lg bg-muted p-8 text-center'>
              <Handshake className='size-12 text-secondary' />

              <h3 className='mt-4 text-xl font-bold'>Seja Parceiro</h3>
              <p className='mt-2 text-pretty'>
                Sua empresa pode fazer parte desta transformação social.
              </p>

              <Button asChild variant='CTA' className='mt-6'>
                <Link href='#parceiro'>Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id='doar' className='bg-white py-16 scroll-mt-8'>
        <DonationSection />
      </section>

      {/* Volunteer Section */}
      <section id='voluntario' className='bg-slate-50 py-16 scroll-mt-8'>
        <VolunteerForm />
      </section>

      {/* Partnership Section */}
      <section id='parceiro' className='py-16 scroll-mt-8'>
        <PartnershipForm />
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

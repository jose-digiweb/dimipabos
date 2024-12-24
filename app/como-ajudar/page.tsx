import { Heart, Users, Handshake } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DonationSection } from '@/components/donation-section';
import { VolunteerForm } from '@/components/volunteer-form';
import { PartnershipForm } from '@/components/partnership-form';
import { TestimonialSection } from '@/components/testimonial-section';

import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { SectionDescription } from '@/components/SectionDescription';
import { CTASection } from '@/components/CTASection';

import heroImage from '@/assets/heroSection/hero_image.jpg';

export default function HelpPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <section className='relative mt-16 flex min-h-[400px] items-center justify-center'>
        <div className='absolute inset-0'>
          <Image
            fill
            src={heroImage}
            alt='Voluntários em ação'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/80' />
        </div>
        <div className='relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Como Ajudar
          </h1>
          <p className='mx-auto mt-6 text-pretty max-w-lg text-xl text-gray-100 sm:max-w-3xl'>
            Junte-se a nós e faça a diferença na vida de quem mais precisa.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='bg-muted py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div className='flex flex-col justify-center'>
              <SectionTitle className='text-wrap'>
                Junte-se a Nós e Faça a Diferença
              </SectionTitle>

              <div className='mt-6 space-y-6 text-lg text-muted-foreground'>
                <p className='text-pretty'>
                  Na DI MI PA BÔS, acreditamos que pequenos gestos podem transformar
                  vidas. Nossa missão é proporcionar dignidade e esperança a pessoas em
                  situação de vulnerabilidade na Guiné-Bissau, e seu apoio é fundamental
                  para alcançarmos esse objetivo.
                </p>
                <p className='text-pretty'>
                  Seja através de doações, voluntariado ou parcerias, cada contribuição
                  faz a diferença. Juntos, podemos construir um futuro melhor para quem
                  mais precisa.
                </p>
              </div>
            </div>
            <div className='relative'>
              <div className='aspect-video overflow-hidden rounded-xl bg-gray-100'>
                <Image
                  fill
                  src={heroImage}
                  alt='Impacto na comunidade'
                  className='h-full w-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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

              <p className='mt-2 text-muted-foreground text-pretty'>
                Sua doação ajuda a construir casas, fornecer tratamentos e transformar
                vidas.
              </p>

              <Button asChild className='mt-6 bg-secondary hover:bg-secondary/90'>
                <a href='#doar'>Doe Agora</a>
              </Button>
            </div>

            <div className='flex flex-col items-center rounded-lg bg-muted p-8 text-center'>
              <Users className='size-12 text-secondary' />

              <h3 className='mt-4 text-xl font-bold'>Seja Voluntário</h3>
              <p className='mt-2 text-muted-foreground text-pretty'>
                Dedique seu tempo e habilidades para fazer a diferença na vida de alguém.
              </p>

              <Button asChild className='mt-6 bg-secondary hover:bg-secondary/90'>
                <a href='#voluntario'>Inscreva-se</a>
              </Button>
            </div>

            <div className='flex flex-col items-center rounded-lg bg-muted p-8 text-center'>
              <Handshake className='size-12 text-secondary' />

              <h3 className='mt-4 text-xl font-bold'>Seja Parceiro</h3>
              <p className='mt-2 text-muted-foreground text-pretty'>
                Sua empresa pode fazer parte desta transformação social.
              </p>

              <Button asChild className='mt-6 bg-secondary hover:bg-secondary/90'>
                <a href='#parceiro'>Saiba Mais</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id='doar' className='bg-white py-16'>
        <DonationSection />
      </section>

      {/* Volunteer Section */}
      <section id='voluntario' className='bg-muted py-16'>
        <VolunteerForm />
      </section>

      {/* Partnership Section */}
      <section id='parceiro' className='py-16'>
        <PartnershipForm />
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

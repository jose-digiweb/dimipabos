import Link from 'next/link';
import { ArrowRight, Heart, Home, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImpactStats } from '@/components/impact-stats';
import { TestimonialSection } from '@/components/testimonial-section';
import Image from 'next/image';

import heroImage from '@/assets/heroSection/hero_image.jpg';
import { SectionTitle } from '@/components/SectionTitle';
import { SectionDescription } from '@/components/SectionDescription';
import { CTASection } from '@/components/CTASection';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <section className='relative flex min-h-[600px] items-center justify-center'>
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
            DI MI PA BÔS
            <span className='block text-2xl mt-2 text-pretty font-medium sm:text-3xl md:text-4xl'>
              Transformando vidas na Guiné-Bissau
            </span>
          </h1>

          <p className='mx-auto text-pretty mt-6 max-w-lg text-xl text-gray-200 sm:max-w-3xl'>
            Pequenos gestos que fazem toda a diferença na vida de quem mais precisa.
          </p>

          <div className='mt-10 flex justify-center gap-4'>
            <Button
              asChild
              size='lg'
              className='rounded-full bg-secondary hover:bg-secondary/90'
            >
              <Link href='/como-ajudar'>Doe Agora</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='rounded-full bg-transparent text-white hover:text-white hover:bg-white/10'
            >
              <Link href='/sobre'>Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <ImpactStats />

      {/* Projects Overview */}
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
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Home className='size-6 text-secondary' />
                  Habitação Digna
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Construímos casas simples, mas confortáveis, para pessoas sem teto ou
                  vivendo em condições precárias.
                </p>
                <Link
                  href='/projetos/habitacao'
                  className='mt-4 inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/90'
                >
                  Saiba mais
                  <ArrowRight className='ml-1 h-4 w-4' />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Heart className='size-6 text-secondary' />
                  Reabilitação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Oferecemos tratamento, apoio psicológico e reintegração social a
                  dependentes de álcool e drogas.
                </p>
                <Link
                  href='/projetos/reabilitacao'
                  className='mt-4 inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/90'
                >
                  Saiba mais
                  <ArrowRight className='ml-1 h-4 w-4' />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Users className='size-6 text-secondary' />
                  Educação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>
                  Promovemos oficinas de costura, carpintaria e alfabetização para
                  adultos.
                </p>
                <Link
                  href='/projetos/educacao'
                  className='mt-4 inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/90'
                >
                  Saiba mais
                  <ArrowRight className='ml-1 h-4 w-4' />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

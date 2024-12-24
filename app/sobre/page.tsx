import Link from 'next/link';
import { Heart, Eye, HandshakeIcon as HandsClapping, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamSection } from '@/components/team-section';
import { ImpactNumbers } from '@/components/impact-numbers';
import Image from 'next/image';

import heroImage from '@/assets/heroSection/hero_image.jpg';
import logoGrande from '@/assets/logo_grande.jpg';
import { SectionTitle } from '@/components/SectionTitle';

export default function SobrePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <section className='relative flex min-h-[400px] items-center justify-center'>
        <div className='absolute inset-0'>
          <Image
            fill
            src={heroImage}
            alt='DI MI PA BÔS'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/80' />
        </div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8'>
          <h1 className='text-4xl text-pretty font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Quem Somos?
          </h1>
          <p className='mx-auto mt-6 text-pretty max-w-lg text-xl text-gray-100'>
            Conheça nossa história, nossa missão e o impacto que estamos criando na
            Guiné-Bissau.
          </p>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>Quem Somos</SectionTitle>

            <div className='mx-auto mt-6 max-w-3xl text-lg text-muted-foreground'>
              <p className='mb-4 text-pretty'>
                A ONG DI MI PA BÔS nasceu com um propósito claro: transformar vidas por
                meio de ações concretas e humanitárias na Guiné-Bissau. Desde sua
                fundação, nossa organização tem se dedicado a criar oportunidades para
                pessoas em situação de vulnerabilidade, garantindo habitação digna,
                assistência médica, apoio psicológico e social.
              </p>
              <p className='text-pretty'>
                Mais do que uma ONG, somos uma família unida por empatia e solidariedade,
                comprometida em oferecer amor, cuidado e dignidade àqueles que mais
                precisam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section id='historia' className='bg-muted py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2 lg:gap-8'>
            <div className='flex flex-col justify-center'>
              <SectionTitle>Nossa História</SectionTitle>

              <div className='mt-6 space-y-6 text-lg text-muted-foreground'>
                <p className='text-pretty'>
                  Fundada em 2020, a DI MI PA BÔS surgiu em resposta à crescente
                  necessidade de apoio a pessoas marginalizadas, muitas delas enfrentando
                  desafios como doenças físicas, mentais e dependência química. Em um
                  cenário marcado pela escassez de recursos e infraestrutura limitada,
                  percebemos que muitas pessoas estavam sendo deixadas à própria sorte.
                </p>
                <p className='text-pretty'>
                  Com a ajuda de voluntários e doadores, temos construído não apenas
                  casas, mas também sonhos. Hoje, nos orgulhamos de ter impactado mais de
                  500 vidas e criado 10 habitações dignas, oferecendo um ambiente de
                  conforto e respeito para aqueles que mais precisam.
                </p>
              </div>
            </div>
            <div className='relative'>
              <div className='aspect-square overflow-hidden rounded-xl bg-gray-100'>
                <Image
                  fill
                  src={logoGrande}
                  alt='Fundação da ONG'
                  className='h-full w-full object-cover rounded-xl'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores Section */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>Missão, Visão e Valores</SectionTitle>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Heart className='size-6 text-secondary' />
                  Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-pretty'>
                  Promover dignidade e qualidade de vida às pessoas em situação de
                  vulnerabilidade, garantindo-lhes habitação, cuidado e acolhimento em um
                  ambiente de respeito e solidariedade.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Eye className='size-6 text-secondary' />
                  Visão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground text-pretty'>
                  Um futuro onde todos os indivíduos na Guiné-Bissau tenham acesso a
                  condições dignas de vida e oportunidades de desenvolvimento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <HandsClapping className='size-6 text-secondary' />
                  Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-muted-foreground'>
                  <li>
                    <strong>Empatia:</strong> Escutamos e entendemos as necessidades de
                    cada pessoa que ajudamos.
                  </li>
                  <li>
                    <strong>Solidariedade:</strong> Trabalhamos juntos para construir uma
                    sociedade mais justa.
                  </li>
                  <li>
                    <strong>Respeito:</strong> Reconhecemos o valor e a dignidade de todos
                    os seres humanos.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Impact Numbers */}
      <ImpactNumbers />

      {/* Compromissos Section */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>Nossos Compromissos</SectionTitle>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            {[
              {
                title: 'Habitação Digna',
                description: 'Construímos casas para pessoas que não têm onde morar.',
              },
              {
                title: 'Cuidado Integral',
                description: 'Prestamos assistência médica e psicológica.',
              },
              {
                title: 'Apoio Social',
                description:
                  'Oferecemos suporte e reintegração para dependentes químicos e pessoas com limitações físicas ou mentais.',
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground text-pretty'>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className='mt-16 text-center'>
            <p className='mx-auto max-w-2xl text-lg text-muted-foreground text-pretty'>
              Acreditamos que cada gesto, por menor que seja, pode transformar uma vida. É
              essa convicção que guia nossas ações e nos motiva a fazer mais todos os
              dias.
            </p>
            <div className='mt-8'>
              <Button
                asChild
                size='lg'
                className='rounded-full group bg-secondary hover:bg-secondary/90'
              >
                <Link href='/como-ajudar'>
                  Faça Parte Desta Mudança
                  <ArrowRight className='ml-2 size-4 group-hover:scale-125 group-hover:translate-x-1 transition-all' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

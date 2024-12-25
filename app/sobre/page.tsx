import { Heart, Eye, HandshakeIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TeamSection } from '@/components/team-section';
import { ImpactNumbers } from '@/components/impact-numbers';
import Image from 'next/image';
import { SectionTitle } from '@/components/section';
import { CTAButton } from '@/components/cta';
import { Button } from '@/components/ui/button';
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

import logo from '@/assets/dimipabos_logo.png';

export default function SobrePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <HeroWrapper>
        <div className='flex flex-col justify-center'>
          <HeroTopText>Nossa História</HeroTopText>

          <HeroTitle>Quem Somos</HeroTitle>
          <HeroSubtitle>Conheça nossa história e nosso propósito</HeroSubtitle>

          <HeroDescription>
            A ONG DI MI PA BÔS nasceu com um propósito claro: transformar vidas por meio
            de ações concretas e humanitárias na Guiné-Bissau.
          </HeroDescription>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <CTAButton text='Faça Parte' size='lg' />

            <Button asChild size='lg' variant='outline'>
              <Link href='/projetos'>Nossos Projetos</Link>
            </Button>
          </div>

          <div className='mt-10 flex items-center gap-4'>
            <HeroStats value={2020} label='Ano de Fundação' />

            <HeroStats value='500+' label='Vidas Impactadas' />

            <HeroStats value='3' label='Anos de História' />
          </div>
        </div>

        <HeroCardSection>
          <HeroCard variant='sobre' title='Nossa Essência' image={logo}>
            Mais do que uma ONG, somos uma família unida por empatia e solidariedade,
            comprometida em oferecer amor, cuidado e dignidade.
          </HeroCard>
        </HeroCardSection>
      </HeroWrapper>

      {/* História Section */}
      <section id='historia' className='bg-slate-50 py-16'>
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
              <div className='aspect-square overflow-hidden rounded-full drop-shadow-md'>
                <Image
                  fill
                  src={logo}
                  alt='Fundação da ONG'
                  className='h-full w-full object-cover rounded-full drop-shadow-sm'
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
                  <HandshakeIcon className='size-6 text-secondary' />
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
              <CTAButton text='Faça Parte Desta Mudança' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

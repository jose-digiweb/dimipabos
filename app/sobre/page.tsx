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

import logo from '@/assets/dimipabos_logo_2.png';

export default function SobrePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <HeroWrapper>
        <div className='flex flex-col justify-center'>
          <HeroTopText>Nossa História</HeroTopText>

          <HeroTitle>Quem Somos</HeroTitle>
          <HeroSubtitle>Construindo um futuro de esperança</HeroSubtitle>

          <HeroDescription>
            A DI MI PA BÔS nasceu da urgente necessidade de oferecer tratamento adequado e
            humanizado para pessoas em situação de dependência química na Guiné-Bissau.
            Nossa missão é construir e operar o primeiro centro especializado do país.
          </HeroDescription>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <CTAButton text='Apoie Nossa Causa' size='lg' />

            <Button asChild size='lg' variant='outline' className='bg-white'>
              <Link href='/projetos'>Conheça o Projeto</Link>
            </Button>
          </div>

          <div className='mt-10 flex items-center gap-4'>
            <HeroStats value={2020} label='Ano de Fundação' />

            <HeroStats value='30%' label='Da Construção Concluída' />

            <HeroStats value='5' label='Voluntários Ativos' />
          </div>
        </div>

        <HeroCardSection>
          <HeroCard
            variant='sobre'
            title='Nossa Essência'
            image={logo}
            imageClassName='object-contain'
          >
            Trabalhamos incansavelmente para construir um espaço de acolhimento e
            recuperação, onde cada pessoa possa encontrar apoio para recomeçar.
          </HeroCard>
        </HeroCardSection>
      </HeroWrapper>

      {/* História Section */}
      <section id='historia' className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 md:grid-cols-[1fr,35%] lg:gap-8'>
            <div className='flex flex-col justify-center'>
              <SectionTitle>Nossa História</SectionTitle>

              <div className='mt-6 space-y-6 text-lg text-muted-foreground'>
                <p className='text-pretty'>
                  Em 2020, diante da crescente necessidade de apoio especializado para
                  pessoas em situação de dependência química na Guiné-Bissau, um grupo de
                  profissionais e voluntários se uniu para criar a DI MI PA BÔS.
                </p>
                <p className='text-pretty'>
                  Identificamos que a falta de um centro especializado era um dos
                  principais obstáculos para a recuperação efetiva. Assim nasceu nosso
                  projeto principal: a construção do primeiro centro de tratamento e
                  reabilitação do país.
                </p>
                <p className='text-pretty'>
                  Hoje, com 30% da construção concluída, continuamos trabalhando para
                  tornar esse sonho realidade. Cada tijolo colocado representa mais uma
                  chance de transformação na vida de alguém.
                </p>
              </div>
            </div>
            <div className='relative md:my-auto mx-auto md:mx-0 w-96 md:w-auto'>
              <div className='aspect-square overflow-hidden rounded-full drop-shadow-md'>
                <Image
                  fill
                  src={logo}
                  alt='Fundação da ONG'
                  className='h-full w-full object-contain rounded-full drop-shadow-sm'
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
                  Construir e operar o primeiro centro especializado em tratamento e
                  reabilitação para pessoas em situação de dependência química na
                  Guiné-Bissau, oferecendo acolhimento e cuidado humanizado.
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
                  Ser referência em tratamento e reabilitação na Guiné-Bissau,
                  proporcionando um espaço de acolhimento, recuperação e renovação para
                  quem precisa.
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
                  <li>Empatia e Respeito no acolhimento</li>
                  <li>Transparência em nossas ações</li>
                  <li>Compromisso com a recuperação</li>
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
                title: 'Transparência',
                description:
                  'Prestação de contas clara sobre o uso dos recursos e andamento da construção.',
              },
              {
                title: 'Qualidade',
                description:
                  'Construção e implementação de um centro com estrutura adequada e equipe capacitada.',
              },
              {
                title: 'Impacto Social',
                description:
                  'Compromisso com a transformação efetiva de vidas através do tratamento especializado.',
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
              Acreditamos que a recuperação é possível quando há estrutura adequada,
              tratamento especializado e apoio contínuo. É por isso que trabalhamos
              incansavelmente na construção do nosso centro.
            </p>
            <div className='mt-8'>
              <CTAButton text='Apoie essa causa' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

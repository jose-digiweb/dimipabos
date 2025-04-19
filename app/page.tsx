import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionTitle, SectionDescription } from '@/components/ui/section';
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

import cardImage from '@/assets/dimipabos_logo_2.png';
import { Building2, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { ImageCarousel } from '@/components/image-carousel';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className='flex min-h-screen flex-col'>
      <HeroWrapper>
        <div className='flex flex-col justify-center'>
          <HeroTopText>Construindo Esperança</HeroTopText>

          <HeroTitle>DI MI PA BÔS</HeroTitle>
          <HeroSubtitle>Um lugar de acolhimento e recuperação</HeroSubtitle>

          <HeroDescription>
            Estamos construindo o primeiro centro especializado em tratamento e
            reabilitação para pessoas em situação de dependência química na
            Guiné-Bissau. Um espaço de acolhimento, cuidado e renovação.
          </HeroDescription>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <CTAButton text='Apoie a Construção' />
            <Button asChild size='lg' variant='outline' className='bg-white'>
              <Link href='/projetos'>Conheça o Projeto</Link>
            </Button>
          </div>

          <div className='mt-10 flex items-center gap-4'>
            <HeroStats value='10%' label='da Construção Concluída' />

            <HeroStats value={5} label='Voluntários Ativos' />
          </div>
        </div>

        <HeroCardSection>
          <HeroCard
            variant='home'
            title='Nossa Essência'
            image={cardImage}
            imageClassName='object-contain'
          >
            Trabalhamos incansavelmente para construir um espaço de acolhimento
            e recuperação, onde cada pessoa possa encontrar apoio para
            recomeçar.
          </HeroCard>
        </HeroCardSection>
      </HeroWrapper>

      <section className='py-16'>
        <div className='text-center mb-12'>
          <SectionTitle>Nossa caminhada</SectionTitle>

          <SectionDescription>
            Algumas fotos do que representam nossa luta e esperança.
          </SectionDescription>
        </div>

        <Suspense
          fallback={
            <div className='w-full flex items-center gap-4'>
              {[1, 2, 3].map(v => (
                <div
                  key={v}
                  className='h-96 bg-slate-300 animate-pulse w-full rounded-md'
                />
              ))}
            </div>
          }
        >
          <div className='w-full max-w-[1400px] mx-auto'>
            <ImageCarousel />
          </div>
        </Suspense>
      </section>

      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>O Centro de Reabilitação</SectionTitle>

            <SectionDescription>
              Conheça o projeto que vai transformar o tratamento da dependência
              química na Guiné-Bissau.
            </SectionDescription>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            <HomeProjectCard icon='home' title='Acolhimento' href='/projetos'>
              Instalações completas com dormitórios, refeitório, salas de
              atendimento e espaços de convivência para até 20 pessoas.
            </HomeProjectCard>

            <HomeProjectCard icon='reab' title='Reabilitação' href='/projetos'>
              Equipe multidisciplinar preparada para oferecer acompanhamento
              médico, psicológico e terapêutico especializado.
            </HomeProjectCard>

            <HomeProjectCard icon='edu' title='Reintegração' href='/projetos'>
              Suporte pós-tratamento com monitoramento e apoio para prevenir
              recaídas e garantir uma recuperação duradoura.
            </HomeProjectCard>
          </div>
        </div>
      </section>

      <CTASection className='border-b' />
    </div>
  );
}

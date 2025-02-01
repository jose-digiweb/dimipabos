import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
import { Building2, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col'>
      <HeroWrapper>
        <div className='flex flex-col justify-center'>
          <HeroTopText>Construindo Esperança</HeroTopText>

          <HeroTitle>DI MI PA BÔS</HeroTitle>
          <HeroSubtitle>Um lugar de acolhimento e recuperação</HeroSubtitle>

          <HeroDescription>
            Estamos construindo o primeiro centro especializado em tratamento e
            reabilitação para pessoas em situação de dependência química na Guiné-Bissau.
            Um espaço de acolhimento, cuidado e renovação.
          </HeroDescription>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <CTAButton text='Apoie a Construção' />
            <Button asChild size='lg' variant='outline' className='bg-white'>
              <Link href='/projetos'>Conheça o Projeto</Link>
            </Button>
          </div>

          <div className='mt-10 flex items-center gap-4'>
            <HeroStats value='30%' label='da Construção Concluída' />

            <HeroStats value={5} label='Voluntários Ativos' />
          </div>
        </div>

        <HeroCardSection>
          <HeroCard variant='home' title='Nossa Essência' image={heroImage}>
            Trabalhamos incansavelmente para construir um espaço de acolhimento e
            recuperação, onde cada pessoa possa encontrar apoio para recomeçar.
          </HeroCard>
        </HeroCardSection>
      </HeroWrapper>

      <section className='bg-slate-50 py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>O Centro de Reabilitação</SectionTitle>

            <SectionDescription>
              Conheça o projeto que vai transformar o tratamento da dependência química na
              Guiné-Bissau.
            </SectionDescription>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-3'>
            <HomeProjectCard icon='home' title='Acolhimento' href='/projetos'>
              Instalações completas com dormitórios, refeitório, salas de atendimento e
              espaços de convivência para até 20 pessoas.
            </HomeProjectCard>

            <HomeProjectCard icon='reab' title='Reabilitação' href='/projetos'>
              Equipe multidisciplinar preparada para oferecer acompanhamento médico,
              psicológico e terapêutico especializado.
            </HomeProjectCard>

            <HomeProjectCard icon='edu' title='Reintegração' href='/projetos'>
              Suporte pós-tratamento com monitoramento e apoio para prevenir recaídas e
              garantir uma recuperação duradoura.
            </HomeProjectCard>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div className='flex flex-col justify-center'>
              <SectionTitle>Acompanhe Nossa Construção</SectionTitle>
              <SectionDescription className='mx-0'>
                A construção do centro está em andamento e cada contribuição nos aproxima
                do objetivo. Veja nosso progresso e como você pode ajudar.
              </SectionDescription>
              <div className='mt-8'>
                <div className='relative h-4 w-full overflow-hidden rounded-full bg-muted'>
                  <div className='h-full w-[30%] rounded-full bg-secondary' />
                </div>
                <div className='mt-4 flex justify-between text-sm'>
                  <span className='font-medium'>30% Concluído</span>
                  <span className='text-muted-foreground'>Meta: 100%</span>
                </div>
              </div>
              <div className='mt-8'>
                <CTAButton text='Contribua com a Construção' />
              </div>
            </div>
            <div className='grid gap-6 sm:grid-cols-2'>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10'>
                    <Building2 className='h-6 w-6 text-secondary' />
                  </div>
                  <h3 className='mt-4 text-xl font-bold'>Fase Atual</h3>
                  <p className='mt-2 text-center text-sm text-muted-foreground'>
                    Construção das estruturas básicas e fundações do centro
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='flex flex-col items-center p-6'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10'>
                    <Users className='h-6 w-6 text-secondary' />
                  </div>
                  <h3 className='mt-4 text-xl font-bold'>Próximos Passos</h3>
                  <p className='mt-2 text-center text-sm text-muted-foreground'>
                    Instalação dos dormitórios e áreas de convivência
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <TestimonialSection /> */}

      <CTASection className='border-b' />
    </div>
  );
}

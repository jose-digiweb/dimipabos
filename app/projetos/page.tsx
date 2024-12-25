import { ImpactNumbers } from '@/components/impact-numbers';

import { SectionTitle, SectionDescription } from '@/components/section';
import { CTASection, CTAButton } from '@/components/cta';
import { ProjectCard, ProjectGrid } from '@/components/projects';

import projHabitacao from '@/assets/projectos/proj_habitacao.jpeg';
import projReab from '@/assets/projectos/proj_reab.jpeg';
import projEdu from '@/assets/projectos/proj_educacao.jpeg';

import { GraduationCap, Hammer, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  HeroDescription,
  HeroTitle,
  HeroTopText,
  HeroWrapper,
} from '@/components/heroSection';
import { HeroSubtitle } from '@/components/heroSection/HeroSubtitle';
import { HeroStats } from '@/components/heroSection/HeroStats';

const featuredProjects = [
  {
    title: 'Construção de Habitações Dignas',
    description: 'Desde 2020, já construímos 10 casas para famílias vulneráveis.',
    image: projHabitacao,
    link: '/projetos/#',
  },
  {
    title: 'Reabilitação e Apoio',
    description: 'Programa de reabilitação e suporte para dependentes químicos.',
    image: projReab,
    link: '/projetos/#',
  },
  {
    title: 'Educação e Capacitação',
    description: 'Oficinas de costura, carpintaria e alfabetização para adultos.',
    image: projEdu,
    link: '/projetos/#',
  },
];

export default function ProjectsPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <HeroWrapper>
        <div className='flex flex-col justify-center'>
          <HeroTopText> Nossos Projetos</HeroTopText>

          <HeroTitle>Transformando Vidas</HeroTitle>
          <HeroSubtitle>
            Conheça os projetos que estão mudando a Guiné-Bissau
          </HeroSubtitle>

          <HeroDescription>
            Através de nossas iniciativas, estamos construindo um futuro melhor para
            aqueles que mais precisam, oferecendo moradia, reabilitação e educação.
          </HeroDescription>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <CTAButton text='Apoie Nossos Projetos' size='lg' />

            <Button asChild size='lg' variant='outline'>
              <Link href='/como-ajudar#voluntario'>Seja Voluntário</Link>
            </Button>
          </div>

          <div className='mt-10 flex items-center gap-4'>
            <HeroStats value={10} label='Casas Construídas' />

            <HeroStats value='30+' label='Pessoas em Reabilitação' />

            <HeroStats value='50+' label='Alunos em Formação' />
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
                  src={projReab}
                  alt='Projetos em ação'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='p-8'>
                <h3 className='text-xl font-bold'>Áreas de Atuação</h3>
                <p className='mt-2 text-muted-foreground'>
                  Nossos projetos focam em três pilares fundamentais: habitação,
                  reabilitação e educação.
                </p>
                <div className='mt-6 grid grid-cols-3 gap-4'>
                  <div className='text-center'>
                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10'>
                      <Hammer className='h-6 w-6 text-primary' />
                    </div>
                    <p className='mt-2 text-sm font-medium'>Habitação</p>
                  </div>
                  <div className='text-center'>
                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10'>
                      <HeartHandshake className='h-6 w-6 text-secondary' />
                    </div>
                    <p className='mt-2 text-sm font-medium'>Reabilitação</p>
                  </div>
                  <div className='text-center'>
                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10'>
                      <GraduationCap className='h-6 w-6 text-accent-foreground' />
                    </div>
                    <p className='mt-2 text-sm font-medium'>Educação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroWrapper>

      {/* Featured Projects */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <SectionTitle>Projetos em Destaque</SectionTitle>
            <SectionDescription>
              Conheça nossos principais projetos e o impacto que estamos gerando na
              comunidade.
            </SectionDescription>
          </div>

          <div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <ImpactNumbers />

      {/* Project Gallery */}
      <ProjectGrid />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

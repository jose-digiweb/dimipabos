import { ImpactNumbers } from '@/components/impact-numbers';
import { SectionTitle, SectionDescription } from '@/components/section';
import { CTASection, CTAButton } from '@/components/cta';
import { ProjectCard, ProjectGrid } from '@/components/projects';
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

import projHabitacao from '@/assets/projectos/proj_habitacao.jpeg';
import projReab from '@/assets/projectos/proj_reab.jpeg';
import projEdu from '@/assets/projectos/proj_educacao.jpeg';

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

        <HeroCardSection>
          <HeroCard variant='projetos' title='Áreas de Atuação' image={projReab}>
            Nossos projetos focam em três pilares fundamentais: habitação, reabilitação e
            educação.
          </HeroCard>
        </HeroCardSection>
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

import { ImpactNumbers } from '@/components/impact-numbers';

import { SectionTitle, SectionDescription } from '@/components/section';
import { CTASection, CTAButton } from '@/components/cta';
import {
  HeroTitle,
  HeroDescription,
  HeroImage,
  HeroWrapper,
  HeroTextWrapper,
} from '@/components/heroSection';
import { ProjectCard, ProjectGrid } from '@/components/projects';

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
      <HeroWrapper subpage>
        <HeroImage />

        <HeroTextWrapper>
          <HeroTitle>Nossos Projetos</HeroTitle>

          <HeroDescription>
            Transformamos vidas através de ações concretas. Conheça os projetos que estão
            mudando a Guiné-Bissau.
          </HeroDescription>
        </HeroTextWrapper>

        <div className='mt-10'>
          <CTAButton text='Saiba Como Ajudar' />
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

import { ProjectCard } from './ProjectCard';
import { SectionDescription, SectionTitle } from '../section';

import projHabitacao from '@/assets/projectos/proj_habitacao.jpeg';
import projReab from '@/assets/projectos/proj_reab.jpeg';
import projEdu from '@/assets/projectos/proj_educacao.jpeg';

const featuredProjects = [
  {
    title: 'Construção de Habitações Dignas',
    description: 'Desde 2021, já construímos 10 casas para famílias vulneráveis.',
    image: projHabitacao,
    link: '/projetos/habitacao',
  },
  {
    title: 'Reabilitação e Apoio',
    description: 'Programa de reabilitação e suporte para dependentes químicos.',
    image: projReab,
    link: '/projetos/reabilitacao',
  },
  {
    title: 'Educação e Capacitação',
    description: 'Oficinas de costura, carpintaria e alfabetização para adultos.',
    image: projEdu,
    link: '/projetos/educacao',
  },
];

export function ProjectGrid() {
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <SectionTitle>Todos os Projetos</SectionTitle>
          <SectionDescription>
            Conheça todos os nossos projetos em andamento e realizados.
          </SectionDescription>
        </div>

        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

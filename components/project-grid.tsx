import { ArrowRight } from 'lucide-react';

import projHabitacao from '@/assets/projectos/proj_habitacao.jpeg';
import projReab from '@/assets/projectos/proj_reab.jpeg';
import projEdu from '@/assets/projectos/proj_educacao.jpeg';

const featuredProjects = [
  {
    title: 'Construção de Habitações Dignas',
    description: 'Desde 2020, já construímos 10 casas para famílias vulneráveis.',
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

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import Image from 'next/image';

export function ProjectGrid() {
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
            Todos os Projetos
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg text-muted-foreground'>
            Conheça todos os nossos projetos em andamento e realizados.
          </p>
        </div>

        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className='overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1'
            >
              <CardHeader className='aspect-video relative w-full overflow-hidden'>
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover'
                />
              </CardHeader>
              <CardContent className='p-0'>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-foreground'>{project.title}</h3>
                  <p className='mt-2 text-muted-foreground text-pretty'>
                    {project.description}
                  </p>
                </div>
              </CardContent>
              <CardFooter className=''>
                <Button asChild variant='secondary'>
                  <span className='inline-flex group items-center'>
                    Leia Mais
                    <ArrowRight className='ml-2 size-4 group-hover:scale-125 group-hover:translate-x-1 transition-all' />
                  </span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

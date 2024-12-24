import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ProjectGrid } from '@/components/project-grid';
import { ImpactNumbers } from '@/components/impact-numbers';

import heroImage from '@/assets/heroSection/hero_image.jpg';
import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { SectionDescription } from '@/components/SectionDescription';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import projHabitacao from '@/assets/projectos/proj_habitacao.jpeg';
import projReab from '@/assets/projectos/proj_reab.jpeg';
import projEdu from '@/assets/projectos/proj_educacao.jpeg';
import { CTASection } from '@/components/CTASection';

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
      <section className='relative flex min-h-[400px] items-center justify-center'>
        <div className='absolute inset-0'>
          <Image
            fill
            src={heroImage}
            alt='Projeto em andamento'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/80' />
        </div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8'>
          <h1 className='text-4xl text-pretty font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Nossos Projetos
          </h1>
          <p className='mx-auto text-pretty mt-6 max-w-lg text-xl text-gray-100 sm:max-w-3xl'>
            Transformamos vidas através de ações concretas. Conheça os projetos que estão
            mudando a Guiné-Bissau.
          </p>

          <div className='mt-10'>
            <Button
              asChild
              size='lg'
              className='rounded-full bg-secondary hover:bg-secondary/90'
            >
              <Link href='/como-ajudar'>Saiba Como Ajudar</Link>
            </Button>
          </div>
        </div>
      </section>

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

      {/* Impact Numbers */}
      <ImpactNumbers />

      {/* Project Gallery */}
      <ProjectGrid />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

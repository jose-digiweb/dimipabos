import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ImageGallery } from '@/components/image-gallery';
import { projects } from '@/lib/data';
import { CTASection } from '@/components/cta';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

async function getProject(slug: string) {
  return projects.find(project => project.slug === slug);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = (await params).slug;

  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen'>
      <section className='relative overflow-hidden bg-linear-to-b from-primary/5 to-primary/10 py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center text-center'>
            <Link
              href='/projetos'
              className='mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-foreground'
            >
              <ArrowLeft className='mr-2 size-4' />
              Voltar para Projetos
            </Link>

            {project.status === 'captacao' && (
              <Badge className='bg-yellow-500 text-white mb-6'>
                Em Captação de Recursos
              </Badge>
            )}
            {project.status === 'planejamento' && (
              <Badge className='bg-blue-500 text-white mb-6'>Em Planejamento</Badge>
            )}
            {project.status === 'andamento' && (
              <Badge className='bg-green-500 text-white mb-6'>Em Andamento</Badge>
            )}
            {project.status === 'concluido' && (
              <Badge className='bg-green-500 text-white mb-6'>Concluído</Badge>
            )}

            <h1 className='text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl'>
              {project.title}
            </h1>
            <p className='mt-6 max-w-2xl text-lg text-muted-foreground'>
              {project.description}
            </p>
            <div className='mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground'>
              {project.location && (
                <div className='flex items-center gap-2'>
                  <MapPin className='size-4' />
                  {project.location}
                </div>
              )}
              {project.startDate && (
                <div className='flex items-center gap-2'>
                  <Calendar className='size-4' />
                  Início: {project.startDate}
                </div>
              )}
              {project.capacity && (
                <div className='flex items-center gap-2'>
                  <Users className='size-4' />
                  Capacidade: {project.capacity}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <Tabs defaultValue='sobre' className='space-y-8'>
            <TabsList className='grid w-full grid-cols-2 lg:w-[400px]'>
              <TabsTrigger value='sobre'>Sobre o Projeto</TabsTrigger>
              <TabsTrigger value='galeria'>Galeria</TabsTrigger>
            </TabsList>

            <TabsContent value='sobre' className='space-y-8'>
              <div className='grid gap-8 lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                  <Card>
                    <CardContent className='p-6'>
                      <h2 className='text-2xl font-bold'>Detalhes do Projeto</h2>
                      <div className='mt-4 whitespace-pre-line text-muted-foreground'>
                        {project.longDescription}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className='space-y-8'>
                  {project.team && project.team.length > 0 && (
                    <Card>
                      <CardContent className='p-6'>
                        <h3 className='text-lg font-bold'>Equipe do Projeto</h3>
                        <ul className='mt-4 space-y-2'>
                          {project.team.map((member, index) => (
                            <li key={index} className='text-muted-foreground'>
                              • {member}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {project.contact && (
                    <Card>
                      <CardContent className='p-6'>
                        <h3 className='text-lg font-bold'>Contato</h3>
                        <div className='mt-4 space-y-2 text-sm'>
                          <p className='font-medium'>{project.contact.name}</p>
                          <p className='text-muted-foreground'>{project.contact.role}</p>
                          <p className='text-muted-foreground'>{project.contact.email}</p>
                          <p className='text-muted-foreground'>{project.contact.phone}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* {project.status === 'captacao' && (
                <ProjectProgress
                  title='Meta de Arrecadação'
                  description='Precisamos da sua ajuda para iniciar a construção do centro. Cada contribuição nos aproxima do objetivo.'
                />
              )} */}
            </TabsContent>

            <TabsContent value='galeria'>
              {project.images && project.images.length > 0 ? (
                <ImageGallery images={project.images} />
              ) : (
                <p className='text-center text-muted-foreground'>
                  Nenhuma imagem disponível no momento.
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection className='border-b' />
    </div>
  );
}

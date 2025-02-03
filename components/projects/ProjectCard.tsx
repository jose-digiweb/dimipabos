// Dependencies
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

// Types
import type { ProjectType } from '@/lib/data';
import Link from 'next/link';
type Props = {
  project: ProjectType;
  className?: string;
};

/**
 * The ProjectCard component
 * @description Will render the ProjectCard
 * @param {Props} props The component props
 * @param {Project} props.project The component project
 * @param {string} props.className The component class name
 * @returns {JSX.Element} The ProjectCard component
 */
export const ProjectCard = ({ project, className }: Props) => {
  return (
    <Card
      className={cn(
        'overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1',
        className
      )}
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

          <p className='mt-2 text-muted-foreground text-pretty'>{project.description}</p>
        </div>
      </CardContent>

      <CardFooter className=''>
        <Button asChild variant='CTA' className='group'>
          <Link
            href={`/projetos/${project.slug}`}
            className='inline-flex group items-center'
          >
            Leia Mais
            <ArrowRight className='ml-2 size-4 group-hover:scale-125 group-hover:translate-x-1 transition-all' />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

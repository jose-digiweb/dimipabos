import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from './SectionTitle';
import { SectionDescription } from './SectionDescription';

const stats = [
  {
    title: 'Pessoas Atendidas',
    value: '500+',
    description: 'desde nossa fundação',
  },
  {
    title: 'Casas Construídas',
    value: '10',
    description: 'em 2023',
  },
  {
    title: 'Voluntários Ativos',
    value: '100',
    description: 'fazendo a diferença',
  },
];

export function ImpactStats() {
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <SectionTitle>Números que Inspiram</SectionTitle>
          <SectionDescription>
            O impacto real de nossas ações na Guiné-Bissau.
          </SectionDescription>
        </div>

        <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {stats.map((stat, index) => (
            <Card key={index} className='bg-accent text-accent-foreground'>
              <CardHeader>
                <CardTitle>{stat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-4xl font-bold text-secondary'>{stat.value}</p>
                <p className='mt-2 text-sm text-accent-foreground/80'>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  {
    number: '500+',
    label: 'Vidas Transformadas',
  },
  {
    number: '10',
    label: 'Casas Construídas',
  },
  {
    number: '100',
    label: 'Voluntários Ativos',
  },
  {
    number: '3',
    label: 'Anos de Impacto Social',
  },
];

export function ImpactNumbers() {
  return (
    <section className='bg-primary py-16 text-primary-foreground'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='text-4xl font-bold text-accent'>{stat.number}</div>
              <div className='mt-2 text-lg'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

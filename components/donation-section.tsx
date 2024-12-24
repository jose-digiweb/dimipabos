'use client';

import * as React from 'react';
import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { SectionTitle } from './SectionTitle';
import { SectionDescription } from './SectionDescription';

const donationPlans = [
  {
    id: 'basic',
    name: 'Apoiador',
    description: 'Ajude a transformar vidas',
    amount: 50,
    benefits: [
      'Ajuda na compra de materiais',
      'Relatório trimestral de impacto',
      'Newsletter mensal',
    ],
  },
  {
    id: 'standard',
    name: 'Construtor',
    description: 'Faça parte da mudança',
    amount: 100,
    benefits: [
      'Ajuda na construção de casas',
      'Relatório mensal de impacto',
      'Newsletter mensal',
      'Certificado de doador',
    ],
  },
  {
    id: 'premium',
    name: 'Transformador',
    description: 'Seja parte essencial',
    amount: 150,
    benefits: [
      'Ajuda na construção de casas',
      'Apoio a tratamentos médicos',
      'Relatório mensal de impacto',
      'Newsletter mensal',
      'Certificado de doador',
      'Visita aos projetos',
    ],
  },
];

export function DonationSection() {
  const [donationType, setDonationType] = React.useState('single');

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <SectionTitle>Doe Agora</SectionTitle>
        <SectionDescription>
          Sua doação ajuda a construir casas, fornecer tratamentos e transformar vidas.
        </SectionDescription>
      </div>

      <div className='mt-8 flex justify-center'>
        <RadioGroup
          defaultValue='single'
          onValueChange={setDonationType}
          className='flex gap-4'
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='single' id='single' />
            <Label htmlFor='single'>Doação Única</Label>
          </div>

          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='monthly' id='monthly' />
            <Label htmlFor='monthly'>Doação Mensal</Label>
          </div>
        </RadioGroup>
      </div>

      <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {donationPlans.map(plan => (
          <Card key={plan.id} className='flex flex-col'>
            <CardHeader>
              <CardTitle className='text-2xl'>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-1 flex-col'>
              <div className='mb-8'>
                <span className='text-4xl font-bold'>
                  {Intl.NumberFormat('pt-PT', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(plan.amount)}
                </span>
                {donationType === 'monthly' && (
                  <span className='text-muted-foreground'>/mês</span>
                )}
              </div>
              <ul className='mb-8 space-y-4 text-sm'>
                {plan.benefits.map((benefit, index) => (
                  <li key={index} className='flex items-center'>
                    <Check className='mr-2 size-4 text-secondary' />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className='mt-auto bg-secondary hover:bg-secondary/90'>
                Doar Agora
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

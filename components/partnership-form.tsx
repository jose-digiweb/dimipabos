'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionTitle } from './section/SectionTitle';
import { SectionDescription } from './section/SectionDescription';

const formSchema = z.object({
  companyName: z.string().min(2, {
    message: 'O nome da empresa deve ter pelo menos 2 caracteres.',
  }),
  contactName: z.string().min(2, {
    message: 'O nome do contato deve ter pelo menos 2 caracteres.',
  }),
  email: z.string().email({
    message: 'Digite um e-mail válido.',
  }),
  phone: z.string().min(8, {
    message: 'Digite um número de telefone válido.',
  }),
  message: z.string().min(10, {
    message: 'A mensagem deve ter pelo menos 10 caracteres.',
  }),
});

export function PartnershipForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <SectionTitle>Seja Nosso Parceiro</SectionTitle>
        <SectionDescription>
          Sua empresa pode fazer parte desta transformação social. Entre em contato
          conosco.
        </SectionDescription>
      </div>

      <div className='mt-16 grid gap-12 lg:grid-cols-2'>
        <div>
          <h3 className='text-xl font-bold'>Por que ser nosso parceiro?</h3>

          <ul className='mt-6 space-y-4'>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>Impacto social direto na Guiné-Bissau</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>
                Visibilidade e reconhecimento como empresa socialmente responsável
              </span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>Relatórios detalhados sobre o impacto das ações</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>Oportunidades de engajamento dos colaboradores</span>
            </li>
          </ul>

          <h3 className='mt-12 text-xl font-bold'>Tipos de Parceria</h3>

          <ul className='mt-6 space-y-4'>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>Doações financeiras regulares</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>Doações de materiais e equipamentos</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>Voluntariado corporativo</span>
            </li>
            <li className='flex items-start'>
              <span className='mr-2 text-secondary'>•</span>
              <span>Projetos específicos e patrocínios</span>
            </li>
          </ul>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='companyName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome da Empresa</FormLabel>
                    <FormControl>
                      <Input placeholder='Digite o nome da empresa' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='contactName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Contato</FormLabel>
                    <FormControl>
                      <Input placeholder='Digite o nome do contato' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='grid gap-8 md:grid-cols-2'>
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder='Digite seu e-mail' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder='Digite seu telefone' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Conte-nos sobre seu interesse em ser parceiro'
                        className='resize-none'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' variant='secondary'>
                Enviar Mensagem
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

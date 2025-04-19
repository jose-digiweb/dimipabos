'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Info, Shield } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const formSchema = z.object({
  amount: z.string().min(1, {
    message: 'Por favor, insira um valor para doação.',
  }),
  frequency: z.enum(['single', 'monthly']),
})

import { CTAButton } from './cta'
import { SectionDescription } from './ui/section/SectionDescription'
import { SectionTitle } from './ui/section/SectionTitle'

export function DonationSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      frequency: 'monthly',
    },
  })

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <SectionTitle>Faça Sua Doação</SectionTitle>
        <SectionDescription>
          Sua contribuição é fundamental para construirmos o centro de acolhimento. Cada euro doado
          é investido diretamente na construção.
        </SectionDescription>
      </div>

      <div className='mt-16'>
        <form className='space-y-8'>
          {/* Valor e Frequência */}
          <Card>
            <CardHeader>
              <CardTitle>Valor da Doação</CardTitle>
              <CardDescription>Escolha quanto e como deseja doar</CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                  <div className='relative flex-1'>
                    <Input
                      type='text'
                      placeholder='50,00'
                      className='pl-6'
                      {...form.register('amount')}
                    />
                    <span className='-translate-y-1/2 absolute top-1/2 left-2 text-muted-foreground'>
                      €
                    </span>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant='ghost' size='icon'>
                          <Info className='h-4 w-4' />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Qualquer valor é bem-vindo e faz a diferença!</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className='space-y-4'>
                  <RadioGroup
                    defaultValue='monthly'
                    onValueChange={(value) =>
                      form.setValue('frequency', value as 'single' | 'monthly')
                    }
                  >
                    <div className='flex flex-col gap-4 sm:flex-row'>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='single' id='single' />
                        <Label htmlFor='single'>Doação Única</Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='monthly' id='monthly' />
                        <Label htmlFor='monthly'>Doação Mensal</Label>
                      </div>
                    </div>
                  </RadioGroup>
                  <p className='text-muted-foreground text-sm'>
                    💫 Doe mensalmente e seja um agente de mudança contínua
                  </p>
                </div>

                <div className='rounded-lg bg-muted p-4'>
                  <div className='flex items-start gap-2 sm:items-center'>
                    <Shield className='mt-1 size-5 shrink-0 text-green-500 sm:mt-0' />
                    <h4 className='font-semibold'>Sua doação em boas mãos:</h4>
                  </div>
                  <ul className='mt-4 space-y-2'>
                    <li className='flex items-start gap-2 sm:items-center'>
                      <CheckCircle2 className='mt-1 size-4 shrink-0 text-green-500 sm:mt-0' />
                      <span className='text-sm'>
                        100% dos fundos são destinados à construção do centro de acolhimento
                      </span>
                    </li>
                    <li className='flex items-start gap-2 sm:items-center'>
                      <CheckCircle2 className='mt-1 size-4 shrink-0 text-green-500 sm:mt-0' />
                      <span className='text-sm'>
                        Pagamentos processados com segurança e criptografia
                      </span>
                    </li>
                    <li className='flex items-start gap-2 sm:items-center'>
                      <CheckCircle2 className='mt-1 size-4 shrink-0 text-green-500 sm:mt-0' />
                      <span className='text-sm'>
                        Recibo enviado automaticamente para seu e-mail
                      </span>
                    </li>
                  </ul>
                </div>

                <CTAButton
                  text='Prosseguir para Pagamento'
                  className='mt-6 max-w-min py-6 text-[1em]'
                />
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}

import { Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { SectionTitle, SectionDescription } from '@/components/section';
import {
  HeroTitle,
  HeroDescription,
  HeroImage,
  HeroWrapper,
  HeroTextWrapper,
} from '@/components/heroSection';

export default function ContactPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      {/* Hero Section */}
      <HeroWrapper subpage>
        <HeroImage />

        <HeroTextWrapper>
          <HeroTitle>Estamos Aqui para Ajudar</HeroTitle>
          <HeroDescription>
            Nossa equipe está pronta para responder suas dúvidas, fornecer informações
            sobre nossos serviços ou discutir possíveis parcerias. Entre em contato
            conosco.
          </HeroDescription>
        </HeroTextWrapper>
      </HeroWrapper>

      {/* Contact Form and Information */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2'>
            {/* Contact Form */}
            <div>
              <SectionTitle>Envie uma Mensagem</SectionTitle>

              <SectionDescription className='mx-0'>
                Preencha o formulário abaixo para entrar em contato conosco. Responderemos
                o mais breve possível.
              </SectionDescription>

              <div className='mt-8'>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className='text-2xl font-bold tracking-tight text-foreground'>
                Outras Formas de Contato
              </h2>
              <div className='mt-8 space-y-8'>
                <Card>
                  <CardContent className='flex items-start gap-4 p-6'>
                    <Mail className='size text-secondary' />
                    <div>
                      <h3 className='font-semibold'>E-mail</h3>
                      <p className='mt-1 text-muted-foreground'>contato@dimipabos.org</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='flex items-start gap-4 p-6'>
                    <Phone className='size text-secondary' />
                    <div>
                      <h3 className='font-semibold'>Telefone</h3>
                      <p className='mt-1 text-muted-foreground'>+31 631 791 165</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='flex items-start gap-4 p-6'>
                    <MapPin className='size-6 text-secondary' />
                    <div>
                      <h3 className='font-semibold'>Endereço</h3>
                      <p className='mt-1 text-muted-foreground'>Guiné-Bissau</p>
                    </div>
                  </CardContent>
                </Card>

                <div className='space-y-4'>
                  <h3 className='font-semibold'>Redes Sociais</h3>
                  <div className='flex gap-4'>
                    <Button variant='outline' size='icon' asChild>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://www.facebook.com/profile.php?id=100090763747200'
                        className='hover:text-secondary'
                      >
                        <Facebook className='size-6' />
                        <span className='sr-only'>Facebook</span>
                      </a>
                    </Button>
                    <Button variant='outline' size='icon' asChild>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://wa.me/31631791165'
                        className='hover:text-secondary'
                      >
                        <MessageCircle className='size-6' />
                        <span className='sr-only'>WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { Facebook, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div>
            <h3 className='text-lg font-semibold'>Sobre Nós</h3>
            <p className='mt-4 text-sm text-primary-foreground/80'>
              A DI MI PA BÔS é uma ONG dedicada a transformar vidas através de habitação,
              cuidado e serviços essenciais na Guiné-Bissau.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Links Rápidos</h3>
            <ul className='mt-4 space-y-2 text-sm'>
              <li>
                <Link
                  href='/sobre'
                  className='text-primary-foreground/80 hover:text-primary-foreground'
                >
                  Nossa História
                </Link>
              </li>
              <li>
                <Link
                  href='/projetos'
                  className='text-primary-foreground/80 hover:text-primary-foreground'
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href='/como-ajudar'
                  className='text-primary-foreground/80 hover:text-primary-foreground'
                >
                  Como Ajudar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Contato</h3>
            <ul className='mt-4 space-y-4 text-sm'>
              <li className='flex items-center gap-4'>
                <MapPin className='size-5' />
                Guiné-Bissau
              </li>
              <li className='flex items-center gap-4'>
                <Phone className='size-5' />
                +31 631 791 165
              </li>
              <li className='flex items-center gap-4'>
                <Mail className='size-5' />
                contato@dimipabos.org
              </li>
            </ul>
            <div className='mt-6 flex space-x-4'>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/profile.php?id=100090763747200'
                className='text-primary-foreground/80 border rounded-sm p-1 hover:text-primary-foreground'
              >
                <Facebook className='size-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://wa.me/31631791165'
                className='text-primary-foreground/80 border rounded-sm p-1 hover:text-primary-foreground'
              >
                <MessageCircle className='size-6' />
                <span className='sr-only'>WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-primary-foreground/10 pt-8 text-center text-sm'>
          <p>
            &copy; {new Date().getFullYear()} DI MI PA BÔS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import logoImage from '@/assets/dimipabos_logo.png';
import Image from 'next/image';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Como Ajudar', href: '/como-ajudar' },
  { name: 'Contato', href: '/contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className='fixed top-0 z-50 w-full bg-primary drop-shadow-md'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1 rounded-full drop-shadow-md'>
          <Link
            href='/'
            className='text-xl font-bold text-white rounded-full drop-shadow-md'
          >
            <Image
              src={logoImage}
              alt='DI MI PA BÔS'
              width={50}
              height={50}
              className='rounded-full drop-shadow-md'
            />
          </Link>
        </div>

        <div className='flex lg:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:bg-primary-foreground/10'
              >
                <span className='sr-only'>Abrir menu principal</span>
                <Menu className='h-6 w-6' aria-hidden='true' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-full'>
              <div className='mt-6 flow-root'>
                <SheetTitle className='sr-only'>The mobile menu</SheetTitle>
                <SheetDescription className='sr-only'>
                  The navigation menu for mobile
                </SheetDescription>

                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={cn(
                          '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted',
                          { 'text-accent': isActive(item.href) }
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='py-6'>
                    <Button
                      asChild
                      className='w-full bg-secondary hover:bg-secondary/90'
                      size='lg'
                    >
                      <Link href='/como-ajudar' onClick={closeMenu}>
                        Doe Agora
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 text-white hover:text-accent transition-colors',
                { 'text-accent': isActive(item.href) }
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Button asChild size='lg' className='bg-secondary hover:bg-secondary/90'>
            <Link href='/como-ajudar'>Doe Agora</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

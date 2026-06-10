'use client';
import Image from 'next/image';
import NextLink from 'next/link';
import { cn } from 'reablocks';
import { MobileNav } from '../mobile-nav';

const NAV_LINKS = [
  {
    label: 'Docs',
    href: '/docs',
  },
  {
    label: 'Storybook',
    href: 'https://storybook.reagraph.dev',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/reaviz/reagraph',
    target: '_blank',
  },
];

export const Header = () => {
  return (
    <>
      <div
        className={cn(
          'flex flex-row items-center justify-center gap-2.5',
          'flex fixed top-0 left-0 right-0 z-40 font-inter w-full md:min-h-[72px] border-b-2 border-gray-400/30 transition-[backdrop-filter] backdrop-blur-md'
        )}
      >
        <div
          className={cn(
            'flex flex-row items-center justify-between gap-2.5',
            'hidden md:flex w-full xl:container m-5 md:mx-15 xl:mx-23'
          )}
        >
          <Image
            src={'/assets/logo-full.png'}
            alt='Reagraph'
            width={112}
            height={24}
          />
          <div
            className={cn(
              'flex flex-row items-center justify-center gap-2.5',
              'gap-8'
            )}
          >
            {NAV_LINKS.map((link) => (
              <NextLink
                className='px-4 text-base text-text-secondary hover:text-text-primary font-semibold transition-colors duration-200 ease-in-out'
                href={link.href}
                target={link.target}
                key={link.label}
              >
                {link.label}
              </NextLink>
            ))}
          </div>
          <div />
        </div>
        <MobileNav
          className='md:hidden'
          logoSrc='/assets/logo-full.png'
          name='Reagraph'
          links={NAV_LINKS}
        />
      </div>
    </>
  );
};

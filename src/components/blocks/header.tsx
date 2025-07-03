'use client';
import Image from 'next/image';
import NextLink from 'next/link';
import { Stack } from 'reablocks';
import { MobileNav } from '../mobile-nav';

const NAV_LINKS = [
  {
    label: 'Docs',
    href: '/docs',
  },
  {
    label: 'Storybook',
    href: 'https://storybook.reablocks.dev',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/reaviz/reablocks',
    target: '_blank',
  },
];

export const Header = () => {
  return (
    <>
      <Stack
        className='flex fixed top-0 left-0 right-0 z-40 font-inter w-full md:min-h-[72px] border-b-2 border-gray-400/30 transition-[backdrop-filter] backdrop-blur-md'
        justifyContent='center'
      >
        <Stack
          className='hidden md:flex w-full xl:container m-5 md:mx-15 xl:mx-23'
          direction='row'
          justifyContent='spaceBetween'
        >
          <Image
            src={'/assets/logo-full.png'}
            alt='Reagraph'
            width={112}
            height={24}
          />
          <Stack className='gap-8'>
            {NAV_LINKS.map((link) => (
              <NextLink
                className='px-4 hover:text-primary transition-colors duration-200 ease-in-out'
                href={link.href}
                target={link.target}
                key={link.label}
              >
                {link.label}
              </NextLink>
            ))}
          </Stack>
          <div />
        </Stack>
        <MobileNav
          className='md:hidden'
          logoSrc='/assets/logo-full.png'
          name='Reagraph'
          links={NAV_LINKS}
        />
      </Stack>
    </>
  );
};

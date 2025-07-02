'use client';
import Image from 'next/image';
import NextLink from 'next/link';
import { Stack } from 'reablocks';

export const Header = () => {
  return (
    <Stack
      className='fixed top-0 left-0 right-0 z-40 w-full flex min-h-[72px] border-b-2 border-gray-400/30 transition-[backdrop-filter] backdrop-blur-md'
      justifyContent='center'
    >
      <Stack
        className='w-full mx-15 xl:mx-23'
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
          <NextLink className='px-4' href='/docs'>
            Docs
          </NextLink>
          <NextLink className='px-4' href='https://reagraph.dev/'>
            Storybook
          </NextLink>
          <NextLink
            className='px-4'
            href='https://github.com/reaviz/reagraph'
            target='_blank'
          >
            GitHub
          </NextLink>
        </Stack>
        <div />
      </Stack>
    </Stack>
  );
};

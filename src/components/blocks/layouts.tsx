'use client';
import { Button, cn, Stack } from 'reablocks';
import { FC } from 'react';
import LayoutGraphic from '../../../public/assets/layouts-graphic.svg';
import Backdrop from '../../../public/assets/backdrop.svg?url';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AnimateIn } from '../shared/AnimateIn';

export interface LayoutsProps {
  className?: string;
}

export const Layouts: FC<LayoutsProps> = ({ className }) => {
  return (
    <AnimateIn>
      <Stack className={cn('gap-6 w-auto mx-15 xl:mx-23', className)}>
        <Stack direction='column' className='flex-1 gap-7' alignItems='start'>
          <motion.h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary'>
            Custom Graphs At Your Finger Tips.
          </motion.h3>
          <motion.p className='text-xl xl:text-2xl text-text-secondary'>
            Reagraph enables users to create stunning graphs quickly. Its
            intuitive interface allows anyone to turn complex data into
            appealing visualizations without extensive coding.
          </motion.p>
          <Stack direction='row' className='self-start'>
            <Link href='/docs/getting-started/Installing'>
              <Button variant='filled' color='primary' size='large'>
                Get Started
              </Button>
            </Link>
            <Link href='https://reagraph.dev/'>
              <Button variant='outline' color='primary' size='large'>
                Preview
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Stack
          className='flex-1 relative backdrop-bg'
          style={
            {
              '--backdrop-url': `url(${Backdrop.src})`,
            } as React.CSSProperties
          }
        >
          <LayoutGraphic className='w-full relative z-10 h-auto max-w-full' />
        </Stack>
      </Stack>
    </AnimateIn>
  );
};

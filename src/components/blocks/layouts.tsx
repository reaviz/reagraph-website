'use client';
import { Button, cn, Stack } from 'reablocks';
import { FC } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

import LayoutGraphic from '../../../public/assets/layouts-graphic.svg';
import Backdrop from '../../../public/assets/backdrop.svg?url';
import { ResponsiveContainer } from '../responsive-container';
import { AnimateIn } from '../shared/AnimateIn';

export interface LayoutsProps {
  className?: string;
}

export const Layouts: FC<LayoutsProps> = ({ className }) => {
  return (
    <AnimateIn className='overflow-clip'>
      <ResponsiveContainer
        className={cn('gap-6 flex-col lg:flex-row', className)}
      >
        <Stack
          direction='column'
          className='flex-1 gap-7 self-center'
          alignItems='start'
        >
          <motion.h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary'>
            Custom Graphs At Your Finger Tips.
          </motion.h3>
          <motion.p className='text-xl xl:text-2xl text-text-secondary'>
            Reagraph enables users to create stunning graphs quickly. Its
            intuitive interface allows anyone to turn complex data into
            appealing visualizations without extensive coding.
          </motion.p>
          <Stack direction='row' className='self-center xl:self-start'>
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
          className='flex-1 relative backdrop-bg w-full xl:w-auto before:scale-125 md:before:scale-110 scale-125 -translate-x-3 my-13 sm:my-0 sm:scale-100 sm:translate-x-0'
          style={
            {
              '--backdrop-url': `url(${Backdrop.src})`,
            } as React.CSSProperties
          }
        >
          <LayoutGraphic className='w-full relative z-10 h-auto max-w-full' />
        </Stack>
      </ResponsiveContainer>
    </AnimateIn>
  );
};

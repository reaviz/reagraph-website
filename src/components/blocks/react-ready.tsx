'use client';
import { Button, cn, Stack } from 'reablocks';
import { FC } from 'react';
import Link from 'next/link';
import NodeClusterGraphic from '../../../public/assets/node-cluster-graphic.svg';
import Backdrop from '../../../public/assets/backdrop.svg?url';
import { AnimateIn } from '../shared/AnimateIn';
import { ResponsiveContainer } from '../responsive-container';

export interface ReactReadyProps {
  className?: string;
}

export const ReactReady: FC<ReactReadyProps> = ({ className }) => {
  return (
    <AnimateIn>
      <ResponsiveContainer className={cn('gap-6 lg:flex-row flex-col-reverse overflow-clip', className)}>
        <Stack
          className='flex-1 relative backdrop-bg w-full md:before:scale-110 scale-125 -translate-x-3 my-12 sm:my-0 sm:scale-100 sm:translate-x-0'
          style={
            {
              '--backdrop-url': `url(${Backdrop.src})`,
            } as React.CSSProperties
          }
        >
          <NodeClusterGraphic className='w-full h-auto relative z-10 max-w-full' />
        </Stack>
        <Stack direction='column' className='flex-1 gap-7 self-center' alignItems='start'>
          <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary'>
            React-Ready. <br /> WebGL-Powered.
          </h3>
          <p className='text-xl xl:text-2xl text-text-secondary'>
            Reagraph is designed for React, using WebGL to create stunning 2D
            and 3D graphs. This allows developers to build striking and
            interactive data visualizations easily.
          </p>
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
      </ResponsiveContainer>
    </AnimateIn>
  );
};

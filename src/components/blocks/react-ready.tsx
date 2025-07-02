'use client';
import { Button, cn, Stack } from 'reablocks';
import { FC } from 'react';
import Link from 'next/link';
import NodeClusterGraphic from '../../../public/assets/node-cluster-graphic.svg';
import Backdrop from '../../../public/assets/backdrop.svg?url';
import { AnimateIn } from '../shared/AnimateIn';

export interface ReactReadyProps {
  className?: string;
}

export const ReactReady: FC<ReactReadyProps> = ({ className }) => {
  return (
    <AnimateIn>
      <Stack className={cn('gap-6', className)}>
        <Stack
          className='flex-1 relative backdrop-bg'
          style={
            {
              '--backdrop-url': `url(${Backdrop.src})`,
            } as React.CSSProperties
          }
        >
          <NodeClusterGraphic className='w-full h-auto relative z-10 max-w-full' />
        </Stack>
        <Stack direction='column' className='flex-1 gap-7' alignItems='start'>
          <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary'>
            React-Ready. <br /> WebGL-Powered.
          </h3>
          <p className='text-xl xl:text-2xl text-text-secondary'>
            Reagraph is designed for React, using WebGL to create stunning 2D
            and 3D graphs. This allows developers to build striking and
            interactive data visualizations easily.
          </p>
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
      </Stack>
    </AnimateIn>
  );
};

'use client';
import { Button, Stack } from 'reablocks';
import { FC } from 'react';
import NodeClusterGraphic from '../../../public/assets/node-cluster-graphic.svg';
import Backdrop from '../../../public/assets/backdrop.svg?url';

export interface ReactReadyProps {
  className?: string;
}

export const ReactReady: FC<ReactReadyProps> = ({ className }) => {
  return (
    <Stack className={className}>
      <Stack
        className='flex-1 relative backdrop-bg'
        style={
          {
            '--backdrop-url': `url(${Backdrop.src})`,
          } as React.CSSProperties
        }
      >
        <NodeClusterGraphic className='w-full h-auto max-w-full' />
      </Stack>
      <Stack direction='column' className='flex-1'>
        <h3 className='text-6xl font-bold text-text-primary'>
          React-Ready. WebGL-Powered.
        </h3>
        <p className='text-2xl text-text-secondary'>
          Reagraph is designed for React, using WebGL to create stunning 2D and
          3D graphs. This allows developers to build striking and interactive
          data visualizations easily.
        </p>
        <Stack direction='row' className='self-start'>
          <Button variant='filled' color='primary' size='large'>
            Get Started
          </Button>
          <Button variant='outline' color='primary' size='large'>
            Preview
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

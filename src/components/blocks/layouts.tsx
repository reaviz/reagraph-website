'use client';
import { Button, cn, Stack } from 'reablocks';
import { FC } from 'react';
import LayoutGraphic from '../../../public/assets/layouts-graphic.svg';
import Backdrop from '../../../public/assets/backdrop.svg?url';

export interface LayoutsProps {
  className?: string;
}

export const Layouts: FC<LayoutsProps> = ({ className }) => {
  return (
    <Stack className={cn('gap-6', className)}>
      <Stack direction='column' className='flex-1 gap-7' alignItems='start'>
        <h3 className='text-6xl font-bold text-text-primary'>
          Custom Graphs At Your Finger Tips.
        </h3>
        <p className='text-2xl text-text-secondary'>
          Reagraph enables users to create stunning graphs quickly. Its
          intuitive interface allows anyone to turn complex data into appealing
          visualizations without extensive coding.
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
  );
};

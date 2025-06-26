'use client';
import { FC } from 'react';
import { cn, Stack } from 'reablocks';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export interface GettingStartedProps {
  className?: string;
}

export const GettingStarted: FC<GettingStartedProps> = ({ className }) => {
  return (
    <div className={cn('w-full flex flex-col', className)}>
      <Stack
        direction='column'
        className='container text-left w-full mx-auto'
        alignItems='start'
      >
        <h3 className='text-6xl font-bold text-text-primary'>
          Getting started 🚀
        </h3>
      </Stack>
      <section className='flex justify-center border-t border-b border-gray-400/30 py-14'>
        <Stack
          direction='row'
          className='container w-full'
          justifyContent='spaceBetween'
        >
          <div>
            <h4>Integrating Reagraph them in your application</h4>
            <p>
              To get started with Reagraph just need to install the package and
              import the component.
            </p>
          </div>
          <SyntaxHighlighter
            language='jsx'
            style={vscDarkPlus}
            className='rb-code-block'
            customStyle={{
              margin: 0,
              flex: '1 1 0%',
              backgroundColor: 'transparent',
              maxWidth: '90vw',
            }}
          >
            {`$ npm install reagraph -S`}
          </SyntaxHighlighter>
        </Stack>
      </section>
    </div>
  );
};

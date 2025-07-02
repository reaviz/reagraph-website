'use client';
import { FC } from 'react';
import { Button, cn, Stack } from 'reablocks';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';
import { AnimateIn } from '../shared/AnimateIn';
import { ResponsiveContainer } from '../ResponsiveContainer';

const BASIC_CODE_SAMPLE = `<GraphCanvas
  nodes={[
    { id: '1', label: 'Node 1'},
    { id: '2', label: 'Node 2' }
  ]}
  edges={[
    { id: '1-2', source: '1', target: '2', label: 'Edge 1-2' },
    { id: '2-1', source: '2', target: '1', label: 'Edge 2-1' }
  ]}
/>
`;

const CUSTOM_THEME_CODE_SAMPLE = `const App = () => (
  <GraphCanvas
    theme={{
      ...lightTheme,
      node: { ...lightTheme.node, color: '#000' }
    }}
    renderNode={({ size, color }) => (
      <group>
        <mesh>
          <torusKnotGeometry attach="geometry" args={[size, 1.25, 50, 8]} />
          <meshBasicMaterial attach="material" color={color} />
        </mesh>
      </group>
    )}
  />
);
`;

const CODE_BLOCK_CLASSNAME =
  '!m-0 rb-code-block flex-auto lg:flex-1 shadow-code rounded-lg bg-[#16161E] border border-[#262631]';

export interface GettingStartedProps {
  className?: string;
}

export const GettingStarted: FC<GettingStartedProps> = ({ className }) => {
  return (
    <div className={cn('w-full flex flex-col gap-10', className)}>
      <ResponsiveContainer className='text-left w-full 11111'>
        <AnimateIn className='w-full'>
          <h3 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary'>
            Getting started 🚀
          </h3>
        </AnimateIn>
      </ResponsiveContainer>
      <AnimateIn>
        <section className='flex justify-center border-t border-b border-gray-400/30 py-14'>
          <ResponsiveContainer className='w-full! gap-2 xl:gap-6 flex-col lg:flex-row'>
            <div className='flex-1 w-full'>
              <h4 className='text-text-primary text-base font-bold md:text-xl'>
                Integrating Reagraph them in your application
              </h4>
              <p className='text-text-secondary text-sm my-3 md:text-base'>
                To get started with{' '}
                <span className='text-cyan-300'>Reagraph</span> just need to
                install the package and import the component.
              </p>
              <Link
                aria-label='Learn more about Reagraph'
                href='/docs/getting-started/setup'
                className='w-fit text-xs font-bold text-blue-300 hover:text-blue-400 md:text-base mt-3'
              >
                Learn more
              </Link>
            </div>

            <SyntaxHighlighter
              language='jsx'
              style={vscDarkPlus}
              className={CODE_BLOCK_CLASSNAME}
            >
              {`$ npm install reagraph -S\n \nimport { GraphCanvas } from 'reagraph';`}
            </SyntaxHighlighter>
          </ResponsiveContainer>
        </section>
      </AnimateIn>
      <AnimateIn>
        <section className='flex justify-center border-t border-b border-gray-400/30 py-14'>
          <ResponsiveContainer className='gap-2 xl:gap-6 flex-col lg:flex-row'>
            <div className='flex-1'>
              <h4 className='text-text-primary text-base font-bold md:text-xl'>
                Let's build something amazing
              </h4>
              <p className='text-text-secondary text-sm my-3 md:text-base'>
                Let's define some nodes and edges.{' '}
                <span className='text-cyan-300'>Nodes</span> are the blocks and{' '}
                <span className='text-cyan-300'>edges</span> are the
                relationships between the blocks.
              </p>
              <p className='text-text-secondary text-sm my-3 md:text-base'>
                The data shapes require one property of id but you can pass
                label or icon to them to show some sort of indication what it
                represents.
              </p>
              <Link
                aria-label='Learn more about Reagraph'
                href='/docs/getting-started/setup'
                className='w-fit text-xs font-bold text-blue-300 hover:text-blue-400 md:text-base mt-3'
              >
                Learn more
              </Link>
            </div>
            <SyntaxHighlighter
              language='jsx'
              style={vscDarkPlus}
              className={CODE_BLOCK_CLASSNAME}
            >
              {BASIC_CODE_SAMPLE}
            </SyntaxHighlighter>
          </ResponsiveContainer>
        </section>
      </AnimateIn>
      <AnimateIn>
        <section className='flex justify-center border-t border-b border-gray-400/30 py-14'>
          <ResponsiveContainer className='gap-2 xl:gap-6 flex-col lg:flex-row'>
            <div className='flex-1'>
              <h4 className='text-text-primary text-base font-bold md:text-xl'>
                Customizing the graph
              </h4>
              <p className='text-text-secondary text-sm my-3 md:text-base'>
                By default, the graph supports 2 themes:{' '}
                <span className='text-cyan-300'>light</span> and{' '}
                <span className='text-cyan-300'>dark</span> modes. You can also
                define your own theme using the theme interface.
              </p>
              <p className='text-text-secondary text-sm my-3 md:text-base'>
                You can also customize the graph by passing props to the
                component.
              </p>
              <Link
                aria-label='Learn more about Reagraph'
                href='/docs/getting-started/setup'
                className='w-fit text-xs font-bold text-blue-300 hover:text-blue-400 md:text-base mt-3'
              >
                Learn more
              </Link>
            </div>
            <SyntaxHighlighter
              language='jsx'
              style={vscDarkPlus}
              className={CODE_BLOCK_CLASSNAME}
            >
              {CUSTOM_THEME_CODE_SAMPLE}
            </SyntaxHighlighter>
          </ResponsiveContainer>
        </section>
      </AnimateIn>
      <AnimateIn>
        <section className='flex justify-center border-t border-b border-gray-400/30 py-14'>
          <ResponsiveContainer className='w-auto max-w-[600px] text-center flex-col'>
            <h2 className='text-4xl lg:text-5xl xl:text-6xl text-text-primary font-bold mb-6'>
              Start building with Reagraph today
            </h2>
            <Link href='/docs/getting-started/Installing'>
              <Button color='primary' size='large'>
                Get Started
              </Button>
            </Link>
          </ResponsiveContainer>
        </section>
      </AnimateIn>
    </div>
  );
};

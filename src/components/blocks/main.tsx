'use client';
import { FC } from 'react';
import { motion } from 'motion/react';
import { Count } from '@/components/shared/Count';
import GraphImage from '../../../public/assets/graph-variant-icons-only.svg';
import DotGrid from '../../../public/assets/dot-grid-bg.svg?url';
import BgLayers from '../../../public/assets/bg-layers.svg?url';

export const Main: FC = () => {
  return (
    <div
      className='w-full bg-cover bg-center flex flex-col items-center'
      style={{ backgroundImage: `url(${DotGrid.src})` }}
    >
      <div className='max-w-[1000px] text-center mt-32 z-10'>
        <h3 className='text-6xl font-bold text-[#F2F3F7]'>WebGL-Powered</h3>
        <h2 className='text-7.5xl font-bold bg-clip-text bg-gradient-to-b from-[#F2F3F7] from-62.5% to-[#8E8F91] leading-none text-transparent text-shadow-none'>
          Open-Source Network Graph Visualization
        </h2>
      </div>
      <GraphImage
        className='-mt-32 bg-cover bg-position-[-16px_78px]'
        style={{ backgroundImage: `url(${BgLayers.src})` }}
      />
      <section className='relative flex w-full -mt-26 justify-center px-0 md:px-24 md:py-10 border-t border-b border-gray-400/30'>
        <div className='grid w-full grid-cols-2 grid-rows-2 gap-4 md:grid-cols-5 md:grid-rows-1'>
          <div className='flex flex-1 flex-col items-center gap-4 px-12'>
            <Count
              className='min-h-9 text-3xl font-bold'
              from={10}
              to={50}
              suffix={'+'}
            />
            <motion.h2
              className='text-base'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Components
            </motion.h2>
          </div>
          <div className='flex flex-1 flex-col items-center gap-4 px-12'>
            <Count
              className='min-h-9 text-3xl font-bold'
              from={0}
              to={13}
              suffix={'+'}
            />
            <motion.h2
              className='text-base'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Layout Engines
            </motion.h2>
          </div>

          <div className='flex flex-1 flex-col items-center gap-4 px-12'>
            <Count
              className='min-h-9 text-3xl font-bold'
              from={120}
              to={900}
              suffix={'+'}
            />
            <motion.h2
              className='text-base'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Commits
            </motion.h2>
          </div>

          <div className='flex flex-1 flex-col items-center gap-4 px-12'>
            <Count className='min-h-9 text-3xl font-bold' from={199} to={700} />
            <motion.h2
              className='text-base'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Stars
            </motion.h2>
          </div>
          <div className='flex flex-1 flex-col items-center gap-4 px-12'>
            <Count className='min-h-9 text-3xl font-bold' from={0} to={1} />
            <motion.h2
              className='text-base'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Awesome Product
            </motion.h2>
          </div>
        </div>
      </section>
    </div>
  );
};

'use client';
import { FC } from 'react';
import { motion } from 'motion/react';
import { Count } from '@/components/shared/Count';
import GraphImage from '../../../public/assets/hero.svg';
import HeroImage from '../../../public/assets/hero-mobile.svg';
import DotGrid from '../../../public/assets/dot-grid-bg.svg?url';
import BgLayers from '../../../public/assets/bg-layers.svg?url';

export const Main: FC = () => {
  return (
    <div
      className='w-full bg-cover bg-center flex flex-col items-center font-inter overflow-clip'
      style={{ backgroundImage: `url(${DotGrid.src})` }}
    >
      <div className='w-full md:max-w-[700px] lg:max-w-[1000px] text-center mt-8 md:mt-16 lg:mt-20 xl:mt-32 z-10 relative'>
        <div className='absolute -top-10 flex gap-2 left-1/2 -translate-x-1/2'>
          <a href='https://npm.im/reagraph' target='_blank'>
            <img
              alt='Reagraph npm tag'
              src='https://img.shields.io/npm/v/reagraph?style=social'
            />
          </a>
        </div>
        <motion.h3
          className='text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F2F3F7]'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          WebGL-Powered
        </motion.h3>
        <motion.h2
          className='text-5xl lg:text-6xl xl:text-7.5xl font-bold bg-clip-text bg-gradient-to-b from-[#F2F3F7] from-62.5% to-[#8E8F91] leading-none text-transparent text-shadow-none'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Open-Source Network Graph Visualization
        </motion.h2>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className='w-full'
      >
        <GraphImage
          className='-mt-16 md:-mt-32 bg-cover bg-position-[-16px_78px] h-auto w-full max-w-[978px] mx-auto hidden md:block'
          style={{ backgroundImage: `url(${BgLayers.src})` }}
        />
        <HeroImage
          className='bg-cover bg-position-[0px_46px] h-auto w-full max-w-[480px] mb-10 scale-180 mx-auto block md:hidden'
          style={{ backgroundImage: `url(${BgLayers.src})` }}
        />
      </motion.div>

      <section className='relative flex w-full -mt-16 md:-mt-26 lg:-mt-35 justify-center px-0 py-4 md:px-24 md:py-10 border-t border-b border-gray-400/30'>
        <div className='grid w-full xl:container  grid-cols-2 grid-rows-2 gap-8 lg:gap-4 lg:grid-cols-4 lg:grid-rows-1'>
          <div className='flex flex-1 flex-col items-center gap-4 px-2'>
            <Count
              className='min-h-9 text-5xl lg:text-3xl font-bold'
              from={0}
              to={13}
              suffix={'+'}
            />
            <motion.h2
              className='text-base text-center'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Layout Engines
            </motion.h2>
          </div>

          <div className='flex flex-1 flex-col items-center gap-4 px-2'>
            <Count
              className='min-h-9 text-5xl lg:text-3xl font-bold'
              from={120}
              to={900}
              suffix={'+'}
            />
            <motion.h2
              className='text-base text-center'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Commits
            </motion.h2>
          </div>

          <div className='flex flex-1 flex-col items-center gap-4 px-2'>
            <Count
              className='min-h-9 text-5xl lg:text-3xl font-bold'
              from={199}
              to={700}
              suffix='+'
            />
            <motion.h2
              className='text-base text-center'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Stars
            </motion.h2>
          </div>
          <div className='flex flex-1 flex-col items-center gap-4 px-2'>
            <Count
              className='min-h-9 text-5xl lg:text-3xl font-bold'
              from={0}
              to={1}
            />
            <motion.h2
              className='text-base text-center'
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

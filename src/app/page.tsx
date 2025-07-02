import { FC } from 'react';
import { Metadata } from 'next';
import {
  Footer,
  Header,
  TracingBeams,
  ThemeWrapper,
} from '@/components/blocks';
import { Main } from '@/components/blocks/main';
import { Features } from '@/components/blocks/features';
import { Layouts } from '@/components/blocks/layouts';
import { ReactReady } from '@/components/blocks/react-ready';
import { GettingStarted } from '@/components/blocks/getting-started';

export const metadata: Metadata = {
  title: 'Reagraph',
  description:
    'Reagraph is a high-performance network graph visualization built in WebGL for React.',
};

/**
 * Home page component
 * @returns Home page component
 */
const Home: FC = () => {
  return (
    <ThemeWrapper>
      <div className='w-full flex flex-1 items-center justify-center overflow-y-hidden '>
        <TracingBeams className='hidden md:block'>
          <Header />
          <div className='mt-[72px] flex flex-col items-center'>
            <Main />
            <Features className='mt-16 lg:mt-20 xl:mt-32' />
            <Layouts className='mt-16 lg:mt-20 xl:mt-32' />
            <ReactReady className='w-auto mx-5 md:mx-15 xl:mx-23' />
            <GettingStarted className='mt-16 lg:mt-20 xl:mt-32 mb-16 lg:mb-20 xl:mb-32' />
          </div>
          <div className='border-t-2 border-gray-400/30 py-6'>
            <Footer />
          </div>
        </TracingBeams>
      </div>
    </ThemeWrapper>
  );
};

export default Home;

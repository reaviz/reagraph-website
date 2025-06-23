import { FC } from 'react';
import { Metadata } from 'next';

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
    <div className='w-full min-h-[calc(100vh-175px)] flex flex-1 items-center justify-center'>
      <h1 className='text-4xl font-bold'>Home page</h1>
    </div>
  );
};

export default Home;

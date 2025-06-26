import Link from 'next/link';
import { Footer, Layout, Navbar } from 'reaviz-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer as LandingFooter } from '@/components/blocks';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import 'reaviz-theme-docs/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reagraph',
  description:
    'Reagraph is a high-performance network graph visualization built in WebGL for React.',
};

const footer = (
  <Footer className='w-full flex justify-center'>
    <LandingFooter />
  </Footer>
);

const navbar = (
  <Navbar
    logo={
      <div className='flex items-center gap-2'>
        <img src='/assets/logo-full.png' alt='Reagraph' width={112} height={24} />
      </div>
    }
    projectLink='https://github.com/reaviz/reagraph'
  />
);

/**
 * Root layout component
 * @param children - Children components
 * @returns Root layout component
 */
const RootLayout: FC<PropsWithChildren> = async ({ children }) => (
  <html lang='en' dir='ltr' suppressHydrationWarning className='h-full'>
    <Head />
    <body className='flex flex-col bg-gradient-to-b from-[#11111F] from-50% via-[#11111F] to-[#121212] antiasliased overflow-x-hidden text-white'>
      <Layout
        navbar={navbar}
        pageMap={await getPageMap()}
        docsRepositoryBase='https://github.com/reaviz/reagraph-website'
        editLink='Edit this page on GitHub'
        sidebar={{ defaultMenuCollapseLevel: 2, autoCollapse: false }}
        footer={footer}
      >
        {children}
      </Layout>
    </body>
  </html>
);

export default RootLayout;

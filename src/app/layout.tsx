import Link from 'next/link';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import 'nextra-theme-docs/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reagraph',
  description:
    'Reagraph is a high-performance network graph visualization built in WebGL for React.',
};

const footer = (
  <Footer className='w-full flex justify-center py-5'>
    <div className='block self-center text-center'>
      <span>
        Made with ❤️ by{' '}
        <Link
          className='text-primary underline'
          href='https://goodcode.us?utm_source=reagraph'
        >
          Good Code
        </Link>
      </span>
    </div>
  </Footer>
);

const navbar = (
  <Navbar
    logo={
      <div className='flex items-center gap-2'>
        <img src='/assets/logo.svg' alt='Reagraph' className='h-6 w-6' />{' '}
        <h1 className='text-2xl'>Reagraph</h1>
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
    <body className='flex flex-col'>
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

import { Footer, Layout, Navbar } from 'reablocks-docs-theme';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Footer as LandingFooter } from '@/components/blocks';
import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import LogoIcon from '../../public/assets/logo-full.svg';

import 'reablocks-docs-theme/style.css';
import './globals.css';

export const metadata: Metadata = {
  title:
    'Reagraph - a high-performance network graph visualization built in WebGL for React',
  description:
    'Reagraph is a high-performance network graph visualization built in WebGL for React with 2D & 3D support, and complex clustering capabilities. It features smart defaults for zero configuration, full customization options, and smooth Motion animations.',
};

const footer = (
  <Footer className='w-full flex justify-center py-6'>
    <LandingFooter containerClassName='xl:max-w-[1440px]' />
  </Footer>
);

const navbar = (
  <Navbar
    logo={
      <div className='flex items-center gap-2'>
        <LogoIcon className='h-fit w-[150px] text-[var(--foreground)]' />
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
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lexend:wght@100..900&display=swap'
        rel='stylesheet'
      />
    </Head>
    <body className='flex flex-col bg-gradient-to-b dark:from-[#11111F] dark:from-50% dark:via-[#11111F] dark:to-[#121212] antialiased text-white'>
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

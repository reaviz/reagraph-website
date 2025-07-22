import Link from 'next/link';
import { FC } from 'react';

import DribbbleIcon from '@/icons/Dribbble';
import GithubIcon from '@/icons/Github';
import LinkedinIcon from '@/icons/LinkedIn';
import { ResponsiveContainer } from '../responsive-container';
import LogoIcon from '../../../public/assets/logo-full.svg';

export interface FooterProps {
  containerClassName?: string;
}

export const Footer: FC<FooterProps> = ({ containerClassName }) => {
  return (
    <div className='w-full justify-center items-center font-inter'>
      <ResponsiveContainer className={`flex items-center justify-between gap-4 ${containerClassName}`}>
        <LogoIcon className='h-fit w-[150px] text-[var(--foreground)]' />
        <span className='hidden md:block'>
          Made with ❤️ by{' '}
          <Link
            className='text-primary underline'
            href='https://goodcode.us?utm_source=reagraph'
          >
            Good Code
          </Link>
        </span>
        <div className='flex gap-4'>
          <Link
            aria-label="GoodCode's GitHub profile"
            href='https://github.com/reaviz'
          >
            <GithubIcon className='h-5 w-5 transition-colors hover:text-content-primary' />
          </Link>
          <Link
            aria-label="GoodCode's Linkedin profile"
            href='https://linkedin.com/company/goodcodeus/'
          >
            <LinkedinIcon className='h-5 w-5 transition-colors hover:text-content-primary' />
          </Link>
          <Link
            aria-label="GoodCode's Dribbble profile"
            href='https://dribbble.com/goodcode'
          >
            <DribbbleIcon className='h-5 w-5 transition-colors hover:text-content-primary' />
          </Link>
        </div>
      </ResponsiveContainer>
      <span className='block md:hidden text-center mt-10'>
          Made with ❤️ by{' '}
          <Link
            className='text-primary underline'
            href='https://goodcode.us?utm_source=reagraph'
          >
            Good Code
          </Link>
        </span>
    </div>
  );
};

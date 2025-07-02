import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

import DribbbleIcon from '@/icons/Dribbble';
import GithubIcon from '@/icons/Github';
import LinkedinIcon from '@/icons/LinkedIn';

export const Footer: FC = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full xl:container md:mx-15 xl:mx-23 flex items-center justify-between gap-4'>
        <Image
          src={'/assets/logo-full.png'}
          alt='Reagraph'
          width={112}
          height={24}
        />
        <span>
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
      </div>
    </div>
  );
};

'use client';
import { FC, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from 'reablocks';

export interface NavLink {
  label: string;
  href: string;
  target?: string;
}

export interface MobileNavProps {
  name: string;
  logoSrc: string;
  className?: string;
  links: NavLink[];
}

export const MobileNav: FC<MobileNavProps> = ({
  className,
  logoSrc,
  name,
  links,
}) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <nav
      className={cn(
        `relative flex h-fit w-full max-w-[1440px] items-center p-6 transition-[box-shadow] md:justify-center ${
          isNavOpen && 'shadow-xl'
        }`,
        className
      )}
      aria-label='Global'
    >
      <div className='absolute left-4 top-3 flex-1 md:left-24 md:top-7'>
        <a href='#'>
          <Image
            draggable={false}
            src={logoSrc}
            alt={name}
            width={112}
            height={24}
          />
        </a>
      </div>
      <div className='absolute right-4 top-3 flex md:hidden'>
        <button
          type='button'
          className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-content-secondary'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          {isNavOpen ? (
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M4 16L16 4'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
              <path
                d='M4 4L16 16'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          ) : (
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          )}
        </button>
      </div>
      {isNavOpen && (
        <div className='flex w-full flex-col gap-2 pt-6'>
          {links.map(({ label, href, target }, index) => (
            <motion.div
              key={`nav-link-mobile-${label}-${index}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.1 * index } }}
            >
              <Link
                className='text-content-secondary transition-colors hover:text-content-primary lg:inline-block'
                href={href}
                target={target}
                onClick={() => setIsNavOpen(false)}
              >
                <span>{label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </nav>
  );
};

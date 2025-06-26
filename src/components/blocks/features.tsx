'use client';
import { FC } from 'react';
import { Card } from 'reablocks';
import { AnimateIn } from '@/components/shared/Count';
import { IconCard } from '@/components/shared/icon-card';
import MagicIcon from '@/icons/magic.svg';
import BrainIcon from '@/icons/brain.svg';
import DatabaseViewIcon from '@/icons/database-view.svg';
import PlusIcon from '@/icons/plus.svg';
import CentralizedNetworkIcon from '@/icons/centralized-network.svg';
import SugarCubeIcon from '@/icons/sugar-cube.svg';

const CARD_CLASSNAME =
  'border-none rounded-4xl bg-panel [clip-path:polygon(0_0,calc(100%_-_40px)_0,100%_40px,100%_100%,0_100%)]';

export interface FeaturesProps {
  className?: string;
}

export const Features: FC<FeaturesProps> = ({ className }) => {
  return (
    <section className={className}>
      <div className='mb-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
        <AnimateIn>
          <Card className={CARD_CLASSNAME}>
            <IconCard className='mb-5'>
              <MagicIcon />
            </IconCard>
            <div className='text-xl font-semibold'>Fully Customizable</div>
            <div>
              Built on D3 with full control over visuals, interactions, and
              behavior.
            </div>
          </Card>
        </AnimateIn>
        <AnimateIn transition={{ delay: 0.05 }}>
          <Card className={CARD_CLASSNAME}>
            <IconCard className='mb-5'>
              <SugarCubeIcon />
            </IconCard>
            <div className='text-xl font-semibold'>2D & 3D Support</div>
            <div>Supports 2D and 3D views with smooth Motion animations.</div>
          </Card>
        </AnimateIn>
        <AnimateIn transition={{ delay: 0.1 }}>
          <Card className={CARD_CLASSNAME}>
            <IconCard className='mb-5'>
              <DatabaseViewIcon />
            </IconCard>
            <div className='text-xl font-semibold'>Large Data Handling</div>
            <div>
              Handles high-volume datasets with fast rendering and simple setup.
            </div>
          </Card>
        </AnimateIn>
        <AnimateIn>
          <Card className={CARD_CLASSNAME}>
            <IconCard className='mb-5'>
              <BrainIcon />
            </IconCard>
            <div className='text-xl font-semibold'>Hyper Intelligent</div>
            <div>
              Smart defaults make charts look great with zero configuration.
            </div>
          </Card>
        </AnimateIn>
        <AnimateIn transition={{ delay: 0.05 }}>
          <Card className={CARD_CLASSNAME}>
            <IconCard className='mb-5'>
              <CentralizedNetworkIcon />
            </IconCard>
            <div className='text-xl font-semibold'>Complex Clustering</div>
            <div>
              Built for advanced use cases with support for complex data
              patterns.
            </div>
          </Card>
        </AnimateIn>
        <AnimateIn transition={{ delay: 0.1 }}>
          <Card className={CARD_CLASSNAME}>
            <IconCard className='mb-5'>
              <PlusIcon />
            </IconCard>
            <div className='text-xl font-semibold'>So much more</div>
            <div>
              Free to use, easy to extend, and ready for any project size.
            </div>
          </Card>
        </AnimateIn>
      </div>
    </section>
  );
};

'use client';
import React, { FC } from 'react';
import { CountInputs, useCount } from './useCount';

export interface CountProps extends CountInputs {
  className?: string;
}

export const Count: FC<CountProps> = ({
  className,
  from = 0,
  duration = 1,
  delay = 0,
  format = true,
  decimalPlaces = 0,
  ...rest
}) => {
  const ref = useCount({
    from,
    duration,
    delay,
    format,
    decimalPlaces,
    ...rest,
  });

  return <span ref={ref} className={className} />;
};

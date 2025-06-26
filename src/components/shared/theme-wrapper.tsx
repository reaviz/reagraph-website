'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider, theme as reablocksTheme } from 'reablocks';

export const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={reablocksTheme}>{children}</ThemeProvider>;
};

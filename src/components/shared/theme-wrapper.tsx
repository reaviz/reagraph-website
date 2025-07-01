'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider, theme as reablocksTheme } from 'reablocks';

const theme = {
  ...reablocksTheme,
  components: {
    ...reablocksTheme.components,
    button: {
      ...reablocksTheme.components.button,
      sizes: {
        ...reablocksTheme.components.button.sizes,
        large: `${reablocksTheme.components.button.sizes.large} py-4 rounded-none`,
      },
    },
  },
};

export const ThemeWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

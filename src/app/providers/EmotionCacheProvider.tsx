import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { FC, ReactNode } from 'react';

const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

const clientSideEmotionCache = createEmotionCache();

export const EmotionCacheProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
);

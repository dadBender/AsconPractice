import { useRouter } from 'next/router';
import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, pathname, query, asPath } = router;
  const [currentLocale, setCurrentLocale] = useState(router.locale);

  useEffect(() => {
    setCurrentLocale(router.locale);
  }, [router.locale]);

  const handleChangeLanguage = (lng: string) => {
    if (lng !== currentLocale) {
      // Самый надежный способ с гарантией работы
      document.cookie = `NEXT_LOCALE=${lng};path=/;max-age=31536000`;
      window.location.reload();
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      {locales?.map(lng => {
        const isActive = lng === currentLocale;

        return (
          <Button
            key={lng}
            onClick={() => handleChangeLanguage(lng)}
            size="small"
            variant={isActive ? 'contained' : 'outlined'}
            sx={{
              textTransform: 'uppercase',
              fontWeight: isActive ? 700 : 500,
              backgroundColor: isActive ? 'primary.main' : 'transparent',
              color: isActive ? '#fff' : 'primary.main',
              '&:hover': {
                backgroundColor: !isActive ? 'primary.light' : undefined,
              },
            }}
          >
            {lng.toUpperCase()}
          </Button>
        );
      })}
    </Stack>
  );
};

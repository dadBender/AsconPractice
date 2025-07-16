// src/components/sections/Hero.tsx
import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        my: 10,
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Typography variant="h4" gutterBottom>
          {t('hero.brand')}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {t('hero.title')}
        </Typography>
        <Typography gutterBottom sx={{ mb: 2 }}>
          {t('hero.description')}
        </Typography>
        <Button href="/products" variant="contained">
          {t('hero.cta')}
        </Button>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: 400, md: 400 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center right',
          }}
          priority
        />
      </Box>
    </Container>
  );
};

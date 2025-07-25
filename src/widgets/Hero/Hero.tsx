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
        <Button href="/payment" variant="contained">
          {t('hero.cta')}
        </Button>
      </Box>

      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: 400, md: 400 },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2, // Добавлено для лучшего вида
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt={t('hero.imageAlt') || 'Hero Image'} // Лучше использовать перевод
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center right',
          }}
          unoptimized={process.env.NODE_ENV !== 'production'}
        />
      </Box>
    </Container>
  );
};

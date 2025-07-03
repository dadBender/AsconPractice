import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        my: 10,
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
        }}
      >
        <Typography variant="h4" gutterBottom>
          ASCON Thread
        </Typography>
        <Typography variant="h2" gutterBottom>
          Ускорьте генерацию резьбы в КОМПАС-3D
        </Typography>
        <Typography gutterBottom sx={{ mb: 2 }}>
          Специализированное приложение для инженеров и конструкторов. Создавайте модели быстрее,
          точнее и без лишней рутины.
        </Typography>
        <Button href="/products" variant="contained">
          Попробовать
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

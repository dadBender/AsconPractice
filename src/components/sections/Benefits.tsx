import {
  IntegrationInstructions,
  PrecisionManufacturing,
  Speed,
  ThumbUp,
} from '@mui/icons-material';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const benefits = [
  {
    icon: <Speed />,
    title: 'Скорость',
    description: 'Построение резьбы занимает считанные минуты',
  },
  {
    icon: <PrecisionManufacturing />,
    title: 'Точность',
    description: 'Минимизация ошибок проектирования',
  },
  {
    icon: <IntegrationInstructions />,
    title: 'Интеграция',
    description: 'Полная совместимость с КОМПАС-3D',
  },
  {
    icon: <ThumbUp />,
    title: 'Удобство',
    description: 'Простой и понятный интерфейс',
  },
];

export const Benefits: React.FC = () => {
  return (
    <Container sx={{ mb: 10 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5 }}>
        Почему выбирают ASCON Thread?
      </Typography>
      <Grid container spacing={2}>
        {benefits.map((benefit, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                p: 3,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  height: 80,
                  mb: 2,
                }}
              >
                {React.cloneElement(benefit.icon, {
                  sx: { fontSize: 50, color: 'primary.main' },
                })}
              </Box>

              <CardContent sx={{ p: 0 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

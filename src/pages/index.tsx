// src/pages/index.tsx
import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import { Typography } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Typography variant="h4" gutterBottom>
        Добро пожаловать!
      </Typography>
      <Typography>Это сайт для приложения создания резьбы в КОМПАС-3D.</Typography>
    </MainLayout>
  );
};

export default HomePage;

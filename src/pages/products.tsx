// src/pages/products.tsx
import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import { Container, Typography } from '@mui/material';

const ProductsPage: React.FC = () => {
  return (
    <MainLayout>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Наши продукты
        </Typography>
        <Typography variant="body1">
          Здесь будет информация о продуктах и функциональности приложения.
        </Typography>
      </Container>
    </MainLayout>
  );
};

export default ProductsPage;

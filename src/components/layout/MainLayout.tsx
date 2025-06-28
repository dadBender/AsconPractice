import React from 'react';
import { Container } from '@mui/material';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4 }} maxWidth="md">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;

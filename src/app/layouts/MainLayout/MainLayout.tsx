import React from 'react';
import { Container } from '@mui/material';
import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4 }} maxWidth="lg">
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;

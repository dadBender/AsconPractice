// src/pages/index.tsx
import React from 'react';
import MainLayout from '@components/layout/MainLayout';
import { Benefits, CallToAction, FAQ, Hero } from '@components/sections';

const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Benefits />
      <FAQ />
      <CallToAction />
    </MainLayout>
  );
};

export default HomePage;

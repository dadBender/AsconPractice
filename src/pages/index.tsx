// src/pages/index.tsx
import React from 'react';
import { Benefits } from '@widgets/Benefits';
import { CallToAction } from '@widgets/CallToAction/CallToAction';
import { FAQ } from '@widgets/FAQ/FAQ';
import { Hero } from '@widgets/Hero/Hero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <CallToAction />
      <FAQ />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'ru', ['common'])),
    },
  };
};

export default HomePage;

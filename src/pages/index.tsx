// src/pages/index.tsx
import React from 'react';
import { Benefits } from '@widgets/Benefits/Benefits';
import { CallToAction } from '@widgets/CallToAction/CallToAction';
import { FAQ } from '@widgets/FAQ/FAQ';
import { Hero } from '@widgets/Hero/Hero';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <FAQ />
      <CallToAction />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default HomePage;

import React from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../components';

const HomePage = ({ title }) => {
  return (
    <main>
      <Hero title="Welcome" />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;

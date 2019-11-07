import React from 'react';

import Page from '../components/page';
import Head from '../components/head';
import Nav from '../components/nav';
import Hero from '../components/hero';
import Hardware from '../components/hardware';
import Features from '../components/features';
import Tutorial from '../components/tutorial';
import UseCases from '../components/use-cases';
import Info from '../components/info';
import Pricing from '../components/pricing';
import Footer from '../components/footer';

const Home = () => (
  <Page>
    <Head />

    <Nav />

    <main>
      <Hero />

      <Hardware />

      <Features />

      <Tutorial />

      <UseCases />

      <Info />

      <Pricing />
    </main>

    <Footer />
  </Page>
);

export default Home;

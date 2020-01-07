import React from 'react';

import Nav from '../components/nav';
import Hero from '../components/hero';
import Features from '../components/features';
import Tutorial from '../components/tutorial';
import UseCases from '../components/use-cases';
import Info from '../components/info';
import Pricing from '../components/pricing';
import CTA from '../components/cta';
import Footer from '../components/footer';
import { Column } from '../components/core';

const Airtable = require('airtable');

const AIRTABLE_API_KEY = 'keyvMb5jgtdYuRC51';
const AIRTABLE_BASE = 'appaIkb10kjtFpWgx';

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

const Home = () => (
  <>
    <Nav />

    <main>
      <Column alignItems="center">
        <Hero airtable={base} />

        <UseCases />

        <Features />

        <Tutorial />

        <Info />

        <Pricing />

        <CTA />
      </Column>
    </main>

    <Footer />

    <style global jsx>
      {`
        @media screen and (max-width: 480px) {
          section {
            padding: 2rem;
          }
        }
      `}
    </style>
  </>
);

export default Home;

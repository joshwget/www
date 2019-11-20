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
import CTA from '../components/cta';
import Footer from '../components/footer';

const Airtable = require('airtable');

const AIRTABLE_API_KEY = 'keyvMb5jgtdYuRC51';
const AIRTABLE_BASE = 'appaIkb10kjtFpWgx';

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

const Home = () => (
  <Page>
    <Head />

    <Nav />

    <main>
      <Hero airtable={base} />

      <Hardware />

      <UseCases />

      <Features />

      <Tutorial />

      <Info />

      <Pricing />

      <CTA />
    </main>

    <Footer />

    <style global jsx>
      {`
        section {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          max-width: var(--page-width);
          padding: 4rem 2rem;
        }

        h1 {
          font-size: 48px;
          margin: 0;
        }

        h2 {
          font-size: 42px;
          margin: 0 0 2rem 0;
          text-align: center;
        }

        h3 {
          font-size: 22px;
          margin: 0 0 1rem 0;
        }

        h4 {
          font-size: 22px;
          margin: 0;
        }

        @media screen and (max-width: 480px) {
          section {
            padding: 2rem;
          }
        }
      `}
    </style>
  </Page>
);

export default Home;

import dynamic from 'next/dynamic';
import Head from 'next/head';

import Nav from '../components/nav';
import Hero from '../components/hero';
import Features from '../components/features';
import Tutorial from '../components/tutorial';
import OpenSource from '../components/open-source';
import Security from '../components/security';
import Pricing from '../components/pricing';
import CTA from '../components/cta';
import Footer from '../components/footer';

const Linux = dynamic(() => import('../components/linux'), { ssr: false });

const Airtable = require('airtable');

const AIRTABLE_API_KEY = 'keyvMb5jgtdYuRC51';
const AIRTABLE_BASE = 'appaIkb10kjtFpWgx';

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

const Pi = () => (
  <>
    <Head>
      <title>Deviceplane | Acess and manage your Raspberry Pi</title>
    </Head>

    <Nav transparent />

    <Hero airtable={base} pi />

    <Tutorial />

    <Features pi />

    <Linux pi />

    <OpenSource />

    <Security />

    <Pricing />

    <CTA />

    <Footer />
  </>
);

export default Pi;

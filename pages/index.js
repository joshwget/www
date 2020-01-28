import dynamic from 'next/dynamic';

import Nav from '../components/nav';
import Hero from '../components/hero';
import Features from '../components/features';
import Tutorial from '../components/tutorial';
import Info from '../components/info';
import Pricing from '../components/pricing';
import CTA from '../components/cta';
import Footer from '../components/footer';

const Linux = dynamic(() => import('../components/linux'), { ssr: false });

const Airtable = require('airtable');

const AIRTABLE_API_KEY = 'keyvMb5jgtdYuRC51';
const AIRTABLE_BASE = 'appaIkb10kjtFpWgx';

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE);

const Home = () => (
  <>
    <Nav transparent />

    <Hero airtable={base} />

    <Features />

    {/* <Tutorial /> */}

    <Linux />

    <Info />

    <Pricing />

    <CTA />

    <Footer />
  </>
);

export default Home;

import React from 'react';

import Page from '../components/page';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Legal = () => (
  <Page>
    <Head />

    <Nav />

    <main>
      <div className="container">
        <h1>Legal & Privacy</h1>
      </div>
    </main>

    <Footer />

    <style global jsx>
      {`
        html {
          color: var(--white);
          background-color: var(--black);
        }

        h1 {
          font-size: 3rem;
          margin: 0;
        }
      `}
    </style>

    <style jsx>
      {`
        .container {
          max-width: var(--page-width);
          width: 100%;
          margin: 0 auto;
          padding: 0 2rem 2rem 2rem;
        }
      `}
    </style>
  </Page>
);

export default Legal;

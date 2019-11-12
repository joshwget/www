import React from 'react';

import Page from '../components/page';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Careers = () => (
  <Page>
    <Head />

    <Nav />

    <main>
      <div className="container">
        <h1>Careers</h1>
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
        }
      `}
    </style>

    <style jsx>
      {`
        .container {
          max-width: var(--page-width);
          width: 100%;
          margin: 0 auto;
        }
      `}
    </style>
  </Page>
);

export default Careers;

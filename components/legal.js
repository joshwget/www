import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Page from '../components/page';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Legal = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <Page>
      <Head title="Legal & Privacy" />

      <Nav />

      <main>
        <div className="container">
          <h1>Legal & Privacy</h1>

          <ul>
            <li>
              <Link href="/legal/terms">
                <a
                  className={
                    pathname === '/legal' || pathname.includes('/terms')
                      ? 'selected'
                      : ''
                  }
                >
                  User Agreement
                </a>
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy">
                <a className={pathname.includes('/privacy') ? 'selected' : ''}>
                  Privacy Policy
                </a>
              </Link>
            </li>
          </ul>

          <div className="content">{children}</div>
        </div>
      </main>

      <Footer />

      <style global jsx>
        {`
          html {
            color: var(--white);
            background-color: var(--black);
          }
        `}
      </style>

      <style jsx>
        {`
          .container :global(h1) {
            font-size: 3rem;
            margin: 0;
          }
          .content :global(li:not(:last-child)) {
            margin: 0 0 1rem 0;
          }
          .content :global(li > ol) {
            margin-top: 1rem;
          }
          .content :global(ol) {
            padding: 1rem 0 1rem 1.5rem;
          }
          .content :global(h2) {
            font-size: 2rem;
          }
          .container :global(a) {
            text-decoration: none;
            color: var(--primary);
            font-weight: 500;
          }
          ul {
            display: flex;
            list-style-type: none;
            padding: 0;
          }
          li a {
            padding: 0 0 4px 0;
            transition: border-color 150ms;
            border-bottom: 2px solid var(--black);
          }
          li a:not(.selected):hover {
            border-color: var(--primary);
          }
          li a:not(.selected) {
            color: var(--white);
          }
          li:not(:last-child) {
            margin-right: 2rem;
          }
          .container {
            max-width: var(--page-width);
            margin: 0 auto;
            padding: 1rem 2rem;
            overflow: hidden;
          }
          .content {
            margin-top: 3rem;
          }
        `}
      </style>
    </Page>
  );
};

export default Legal;

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import theme from '../theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import MDX from '../components/mdx';
import { Box, Row, Column, Heading, Link } from '../components/core';

const Legal = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Legal & Privacy</title>
      </Head>

      <Nav />

      <main>
        <Column alignItems="center">
          <Column alignItems="center">
            <Heading>Legal & Privacy</Heading>

            <Row>
              <Link
                href="/legal/terms"
                active={pathname === '/legal' || pathname.includes('/terms')}
              >
                User Agreement
              </Link>
              <Link
                href="/legal/privacy"
                active={pathname.includes('/privacy')}
              ></Link>
            </Row>
          </Column>

          <Box maxWidth={theme.pageWidth}>
            <MDX>{children}</MDX>
          </Box>
        </Column>
      </main>

      <Footer />

      <style jsx>
        {`
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
    </>
  );
};

export default Legal;

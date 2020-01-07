import React from 'react';
import Head from 'next/head';

import theme from '../theme';
import Nav from '../components/nav';
import Footer from '../components/footer';
import MDX from '../components/mdx';
import { Box, Row, Text, Column, Heading } from '../components/core';

const legalTabs = [
  {
    title: 'User Agreement',
    href: '/legal/terms'
  },
  {
    title: 'Privacy Policy',
    href: '/legal/privacy'
  }
];

const Legal = ({ title, lastUpdated, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Nav />

      <main>
        <Column alignItems="center" padding={10}>
          <Column alignItems="center" marginBottom={10}>
            <Heading>{title}</Heading>
            <Text fontWeight={1} color="grays.8" marginTop={2}>
              Last update: {lastUpdated}
            </Text>
          </Column>

          <Box maxWidth={theme.pageWidth}>
            <MDX>{children}</MDX>
          </Box>
        </Column>
      </main>

      <Footer />
    </>
  );
};

export default Legal;

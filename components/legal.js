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

      <Column alignItems="center">
        <Column
          bg="black"
          alignItems="center"
          flex={1}
          paddingTop={6}
          paddingBottom={9}
          alignSelf="stretch"
        >
          <Heading textAlign="center" marginX={4}>
            {title}
          </Heading>
          <Text fontWeight={1} color="grays.8" marginTop={4}>
            Last update: {lastUpdated}
          </Text>
        </Column>

        <Box width="100%" maxWidth={theme.pageWidth} padding={8} paddingTop={6}>
          <MDX>{children}</MDX>
        </Box>
      </Column>

      <Footer />
    </>
  );
};

export default Legal;

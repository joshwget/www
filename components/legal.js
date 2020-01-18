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
        <title>{title} | Deviceplane</title>
      </Head>

      <Nav />

      <Column alignItems="center">
        <Column
          bg="black"
          alignItems="center"
          flex={1}
          paddingY={9}
          alignSelf="stretch"
        >
          <Heading textAlign="center" fontSize={[6, 7]}>
            {title}
          </Heading>
          <Row
            fontWeight={1}
            color="grays.8"
            marginTop={4}
            flexWrap="wrap"
            justifyContent="center"
          >
            <Text>Last update:&nbsp;</Text>
            <Text>{lastUpdated}</Text>
          </Row>
        </Column>

        <Box width="100%" maxWidth={theme.pageWidth} padding={6} paddingY={4}>
          <MDX>{children}</MDX>
        </Box>
      </Column>

      <Footer />
    </>
  );
};

export default Legal;

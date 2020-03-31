import React from 'react';
import Head from 'next/head';

import theme from '../theme';
import Nav from './nav';
import Footer from './footer';
import MDX from './mdx';
import { Box, Row, Text, Column, Heading, Link } from './core';

const Blog = ({ type, title, date, authors, children }) => {
  return (
    <>
      <Head>
        <title>{title} | Deviceplane</title>
      </Head>

      <Nav />

      <Column alignItems="center" bg="pageBackground">
        <Column
          bg="black"
          alignItems="center"
          flex={1}
          paddingY={8}
          alignSelf="stretch"
        >
          <Text marginBottom={4} fontWeight={2} color="purple">
            {type}
          </Text>
          <Heading textAlign="center" fontSize={[5, 6]} marginBottom={4}>
            {title}
          </Heading>
          <Row
            fontSize={1}
            fontWeight={1}
            color="grays.8"
            marginBottom={5}
            flexWrap="wrap"
            justifyContent="center"
          >
            {date}
          </Row>
          <Row flexWrap="wrap" justifyContent="center">
            {authors.map(({ name, href }) => (
              <Link key={name} href={href} fontWeight={1}>
                {name}
              </Link>
            ))}
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

export default Blog;

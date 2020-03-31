import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Nav from '../../components/nav';
import Footer from '../../components/footer';
import {
  Box,
  Row,
  Text,
  Column,
  Heading,
  Link,
  Paragraph
} from '../../components/core';

/* Example blog types: Infrastructure, Open Source, Insights, Guide. Separate color for each type */

const posts = [require('./raspberry-pi-ssh.mdx')];

console.log(posts);

const Post = styled(Box)`
  transition: all 150ms ease;
  border: 2px solid transparent;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Deviceplane</title>
      </Head>

      <Nav />

      <Column alignItems="center">
        <Column
          bg="black"
          alignItems="center"
          flex={1}
          paddingY={8}
          alignSelf="stretch"
        >
          <Heading textAlign="center" fontSize={[6, 7]}>
            Blog
          </Heading>
        </Column>

        <Column alignItems="center">
          {posts.map(({ type, title, authors, date, intro, href }) => (
            <Post margin={6} borderRadius={2} padding={6} bg="pageBackground">
              <Link href={href} fontWeight="inherit">
                <Column>
                  <Text marginBottom={3} fontWeight={2} color="purple">
                    {type}
                  </Text>
                  <Heading
                    variant="secondary"
                    fontSize={[4, 5]}
                    marginBottom={3}
                  >
                    {title}
                  </Heading>
                  <Row
                    marginBottom={3}
                    alignItems="center"
                    fontSize={1}
                    fontWeight={1}
                  >
                    {authors.map(({ name, href }) => (
                      <Link
                        key={name}
                        href={href}
                        fontSize="inherit"
                        fontWeight="inherit"
                      >
                        {name}
                      </Link>
                    ))}
                    &nbsp;
                    <Text
                      fontSize="inherit"
                      fontWeight="inherit"
                      color="grays.12"
                    >
                      on {date}
                    </Text>
                  </Row>
                  <Paragraph marginBottom={0}>{intro}</Paragraph>
                </Column>
              </Link>
            </Post>
          ))}
        </Column>
      </Column>

      <Footer />
    </>
  );
};

export default Blog;

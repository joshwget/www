import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import theme from '../theme';
import { Box, Row, Column, Link } from './core';
import Nav from './nav';
import MDX from './mdx';

export const routeGroups = [
  [
    {
      href: '/docs/quick-start',
      title: 'Quick start'
    },
    {
      href: '/docs/provisioning',
      title: 'Provisioning'
    },
    {
      href: '/docs/deploying',
      title: 'Deploying'
    },
    {
      href: '/docs/deploying/scheduling',
      title: 'Scheduling',
      nested: true
    },
    {
      href: '/docs/managing/ssh-access',
      title: 'Managing'
    },
    {
      href: '/docs/managing/ssh-access',
      title: 'SSH access',
      nested: true
    },
    {
      href: '/docs/managing/device-labels',
      title: 'Device labels',
      nested: true
    },
    {
      href: '/docs/iam',
      title: 'IAM'
    },
    {
      href: '/docs/iam/custom-roles',
      title: 'Custom roles',
      nested: true
    },
    {
      href: '/docs/device-variables',
      title: 'Device Variables'
    },
    {
      href: '/docs/cli',
      title: 'CLI'
    }
  ],
  [
    {
      href: '/docs/self-hosted',
      title: 'Self-hosted'
    },
    {
      href: '/docs/self-hosted/local-setup',
      title: 'Local setup',
      nested: true
    },
    {
      href: '/docs/self-hosted/public-setup',
      title: 'Public setup',
      nested: true
    }
  ]
];

const DocLink = styled(Link)`
  text-decoration: none !important;
  color: ${props =>
    props.active
      ? props.theme.colors.primary
      : props.nested
      ? props.theme.colors.grays[10]
      : props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[1]}px;
  margin: ${props => (props.nested ? '12px 0 0 18px' : '12px 0 0')};

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${props =>
      props.active ? props.theme.colors.primary : props.theme.colors.pureWhite};
  }
`;

const Divider = styled.div`
  width: calc(100% - 32px);
  border-top: 1px solid ${props => props.theme.colors.grays[3]};
  margin-top: 24px;
  margin-bottom: 8px;
`;

const Docs = ({ title, children }) => {
  const { pathname } = useRouter();

  return (
    <Column height="100vh" overflow="hidden" bg="black">
      <Head>
        <title>
          {title ? `${title} - Documentation - Deviceplane` : 'Documentation'}
        </title>
      </Head>

      <Nav />

      <Row
        height="100%"
        overflow="hidden"
        maxWidth={theme.pageWidth}
        width="100%"
        margin="0 auto"
        paddingX={6}
      >
        <Column bg="black" minWidth="220px" display={['none', 'none', 'flex']}>
          {routeGroups.map((routes, index) => (
            <>
              {routes.map(({ href, title, nested }) => (
                <DocLink
                  key={title}
                  href={href}
                  nested={nested}
                  active={
                    (title !== 'Managing' && pathname === href) ||
                    (pathname === '/docs' && href === '/docs/quick-start')
                  }
                >
                  {title}
                </DocLink>
              ))}
              {index < routeGroups.length - 1 ? <Divider /> : null}
            </>
          ))}
        </Column>

        <Column
          height="100%"
          overflow="auto"
          padding={6}
          width="100%"
          bg="pageBackground"
        >
          <Box color="white" maxWidth="800px">
            <MDX>{children}</MDX>
          </Box>
        </Column>
      </Row>

      <style global jsx>
        {`
          .prism-code .token-line:last-child {
            display: none;
          }
        `}
      </style>
    </Column>
  );
};

export default Docs;

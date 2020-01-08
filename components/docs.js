import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import theme from '../theme';
import { Box, Text, Row, Column, Link, Heading } from './core';
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
      ? props.theme.colors.grays[8]
      : props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes[1]}px;
  margin: ${props => (props.nested ? '12px 0 0 16px' : '12px 0 0')};
  white-space: nowrap;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${props =>
      props.active ? props.theme.colors.primary : props.theme.colors.pureWhite};
  }
`;

const ContentLink = styled(DocLink)`
  font-size: ${props => props.theme.fontSizes[0]}px;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.grays[5]};
  margin-top: 24px;
  margin-bottom: 8px;
`;

const DocNav = styled(Column).attrs({
  as: 'nav'
})``;

const getHref = str => `#${str.toLowerCase().replace(/ /g, '-')}`;

const TableOfContents = ({ links }) => (
  <DocNav
    flex={0}
    display={['none', 'none', 'flex']}
    alignItems="flex-start"
    alignSelf="flex-start"
  >
    <Text
      fontSize="10px"
      fontWeight={2}
      marginBottom={2}
      color="grays.6"
      style={{ whiteSpace: 'nowrap', textTransform: 'uppercase' }}
    >
      Table of Contents
    </Text>
    {links.map(({ title, href, nested }) => (
      <ContentLink key={title} href={href} nested={nested}>
        {title}
      </ContentLink>
    ))}
  </DocNav>
);

const Docs = ({ title, children }) => {
  const { pathname } = useRouter();

  const contentLinks = React.Children.map(
    children,
    ({ props }) => props
  ).reduce((links, { mdxType, children }) => {
    if (mdxType === 'h2' || mdxType === 'h3') {
      return [
        ...links,
        {
          title: children,
          href: getHref(children),
          nested: mdxType === 'h3'
        }
      ];
    }
    return links;
  }, []);

  return (
    <Column bg="black" minHeight="100vh">
      <Head>
        <title>
          {title ? `${title} - Documentation - Deviceplane` : 'Documentation'}
        </title>
      </Head>

      <Nav />

      <Row
        maxWidth={theme.pageWidth}
        marginX="auto"
        overflow="visible"
        flex={1}
        width="100%"
        paddingX={6}
      >
        <Column bg="black" flex={1} paddingRight={6}>
          <DocNav
            flex={0}
            position="sticky"
            top={6}
            display={['none', 'none', 'flex']}
          >
            {routeGroups.map((routes, index) => (
              <React.Fragment key={routes[0].title}>
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
              </React.Fragment>
            ))}
          </DocNav>
        </Column>

        <Column padding={6} bg="pageBackground" borderRadius={1} width="100%">
          <Box maxWidth="700px">
            <Heading>{title}</Heading>
            {contentLinks.length > 0 && (
              <Column
                display={['flex', 'flex', 'flex', 'none']}
                paddingTop={4}
                paddingBottom={6}
                marginBottom={4}
                borderBottom={0}
                borderColor="grays.5"
              >
                <TableOfContents links={contentLinks} />
              </Column>
            )}
            <MDX>{children}</MDX>
          </Box>
        </Column>

        {contentLinks.length > 0 && (
          <Column
            position="sticky"
            paddingLeft={6}
            top={6}
            alignSelf="flex-start"
            display={['none', 'none', 'none', 'flex']}
          >
            <TableOfContents links={contentLinks} />
          </Column>
        )}
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

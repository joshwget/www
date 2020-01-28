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
      href: '/docs/provisioning/bulk-provisioning',
      title: 'Bulk Provisioning',
      nested: true
    },
    {
      href: '/docs/operating',
      title: 'Operating'
    },
    {
      href: '/docs/operating/ssh',
      title: 'SSH Access',
      nested: true
    },
    {
      href: '/docs/operating/cli',
      title: 'CLI',
      nested: true
    },
    {
      href: '/docs/operating/command-scripting',
      title: 'Command Scripting',
      nested: true
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
      href: '/docs/deploying/release-pinning',
      title: 'Release Pinning',
      nested: true
    },
    {
      href: '/docs/deploying/pipelines',
      title: 'CI/CD Pipelines',
      nested: true
    },
    {
      href: '/docs/managing',
      title: 'Managing'
    },
    {
      href: '/docs/managing/labels',
      title: 'Labels',
      nested: true
    },
    {
      href: '/docs/managing/filters',
      title: 'Filters',
      nested: true
    },
    {
      href: '/docs/managing/status',
      title: 'Device Status',
      nested: true
    },
    {
      href: '/docs/monitoring',
      title: 'Monitoring'
    },
    {
      href: '/docs/monitoring/setup',
      title: 'Setup',
      nested: true
    },
    {
      href: '/docs/monitoring/project-metrics',
      title: 'Project Metrics',
      nested: true
    },
    {
      href: '/docs/monitoring/device-metrics',
      title: 'Device Metrics',
      nested: true
    },
    {
      href: '/docs/monitoring/service-metrics',
      title: 'Service Metrics',
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
    }
  ],
  [
    {
      href: '/docs/variables',
      title: 'Agent Variables'
    },
    {
      href: '/docs/firewall-configuration',
      title: 'Firewall Configuration'
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
  text-decoration: none;
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes[0]}px;
  margin: ${props => (props.nested ? '8px 0 0 16px' : '8px 0 0')};

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContentLink = styled(DocLink)`
  font-size: ${props => props.theme.fontSizes[0]}px;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.grays[5]};
  margin-top: 16px;
  margin-bottom: 8px;
`;

const DocNav = styled(Column).attrs({
  as: 'nav'
})``;

const getHref = str => `#${str.toLowerCase().replace(/ /g, '-')}`;

const TableOfContents = ({ links }) => (
  <DocNav flex={0} alignItems="flex-start" alignSelf="flex-start">
    <Text
      fontSize={0}
      fontWeight={2}
      marginBottom={2}
      color="grays.8"
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
          {title
            ? `${title} | Documentation | Deviceplane`
            : 'Documentation | Deviceplane'}
        </title>
      </Head>

      <Nav />

      <Row
        maxWidth={['initial', 'initial', theme.pageWidth]}
        marginX="auto"
        overflow="visible"
        flex={1}
        width="100%"
        paddingX={[0, 6]}
      >
        <Column
          bg="black"
          flex="0 0 180px"
          paddingRight={6}
          display={['none', 'none', 'flex']}
          position="sticky"
          top={6}
          overflowY="scroll"
          height="calc(100vh - 128px)"
        >
          <DocNav flex={0}>
            {routeGroups.map((routes, index) => (
              <React.Fragment key={routes[0].title}>
                {routes.map(({ href, title, nested }) => (
                  <DocLink
                    key={title}
                    href={href}
                    nested={nested}
                    active={
                      pathname === href ||
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
          <Box maxWidth="750px">
            <Heading fontSize={[6, 7]}>{title}</Heading>
            {contentLinks.length > 0 && (
              <Column
                display={['flex', 'flex', 'flex', 'none']}
                paddingTop={4}
                paddingBottom={6}
                marginBottom={6}
                borderBottom={0}
                borderColor="grays.5"
              >
                <TableOfContents links={contentLinks} />
              </Column>
            )}
            <MDX linkHeaders>{children}</MDX>
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

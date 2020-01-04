import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Row, Column, Link } from './core';
import Nav from './nav';
import Highlight from './highlight';
import Footer from './footer';

export const routes = [
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
  },
  {
    href: '/docs/self-hosted',
    title: 'Self-hosted'
  },
  {
    href: '/docs/self-hosted/local-setup',
    title: 'Local Setup',
    nested: true
  },
  {
    href: '/docs/self-hosted/public-setup',
    title: 'Public Setup',
    nested: true
  },
];

const DocLink = styled(Link)`
  text-decoration: none !important;
  color: ${props =>
    props.nested ? props.theme.colors.grays[8] : props.theme.colors.white};
  margin: ${props => (props.nested ? '16px 0 0 16px' : '16px 0 0')};
`;

const Docs = ({ title, children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{title ? `${title} | Docs` : 'Documentation'}</title>
      </Head>

      <Nav />

      <Row>
        <Column bg="black" minWidth="200px" paddingLeft={6}>
          <DocLink href="/docs/quick-start">
            <a
              className={
                pathname === '/docs/quick-start' || pathname === '/docs'
                  ? 'selected'
                  : ''
              }
            >
              Quick start
            </a>
          </DocLink>
          {routes.slice(1, routes.length).map(({ href, title, nested }) => (
            <DocLink href={href} nested={nested}>
              <a
                className={
                  title !== 'Managing' && href === pathname ? 'selected' : ''
                }
              >
                {title}
              </a>
            </DocLink>
          ))}
        </Column>

        <Highlight>
          <Column
            color="white"
            maxWidth="800px"
            height="100%"
            overflow="auto"
            padding={6}
            paddingTop={0}
          >
            {children}
          </Column>
        </Highlight>
      </Row>

      <Footer />

      <style global jsx>
        {`
          .prism-code .token-line:last-child {
            display: none;
          }
        `}
      </style>

      <style jsx>
        {`
          .container :global(h1) {
            margin: 0;
            font-size: 3rem;
          }
          .container :global(h2) {
            margin: 3rem 0 0 0;
            text-align: unset;
          }
          .container :global(ol) {
            padding: 1rem 0 1rem 1.5rem;
            margin: 0;
          }
          .container :global(li:not(:last-child)) {
            margin-bottom: 0.5rem;
          }
          .container :global(pre) {
            padding: 1.5rem;
            background: #000;
            border-radius: var(--radius);
            color: var(--primary);
            margin: 1.5rem 0;
            white-space: pre-wrap;
            word-break: break-word;
          }
          .container :global(pre > code) {
            color: var(--primary);
          }
          .container :global(code) {
            background: #fff;
            color: var(--black);
            padding: 0rem 0.2rem;
            border-radius: var(--radius);
            white-space: pre-wrap;
          }
          .children :global(a) {
            color: var(--black);
            font-weight: 500;
          }
          .children :global(blockquote) {
            border: 2px solid var(--primary);
            margin: 0;
            padding: 0 1rem;
            font-weight: 500;
            border-radius: var(--radius);
          }

          .container {
            flex: 1;
          }

          .content {
            display: flex;
            padding: 2rem;
            max-width: var(--page-width);
            margin: 0 auto;
            overflow: hidden;
            height: 100%;
          }

          ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
            display: flex;
            flex-direction: column;
          }

          li:not(:last-child) {
            margin: 0 0 1rem 0;
          }

          .sidebar a {
            user-select: none;
            text-decoration: none;
            color: var(--white);
            padding: 0 0 2px 0;
            transition: border-color 150ms, color 150ms;
            border-bottom: 2px solid var(--black);
          }

          .sidebar a:not(.selected):hover {
            border-color: var(--primary);
          }

          .sidebar a.selected {
            color: var(--primary);
          }

          .sidebar .nested {
            padding-left: 1rem;
          }

          @media screen and (max-width: 700px) {
            .sidebar {
              min-width: 11.5rem;
            }
          }
          @media screen and (max-width: 600px) {
            .sidebar {
              display: none;
            }
            .mobile {
              display: flex;
            }
            .children {
              background: var(--white);
            }
          }
        `}
      </style>
    </>
  );
};

export default Docs;

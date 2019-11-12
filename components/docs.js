import Link from 'next/link';
import { useRouter } from 'next/router';

import Page from './page';
import Head from './head';
import Nav from './nav';
import Footer from './footer';

const list = [
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
    href: '/docs/managing',
    title: 'Managing'
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
    href: '/docs/device-api',
    title: 'Device API'
  },
  {
    href: '/docs/cli',
    title: 'CLI'
  }
];

const Docs = ({ title, children }) => {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <Page>
      <Head title={title ? `${title} | Docs` : 'Documentation'} />

      <Nav />

      <div className="container">
        <div className="sidebar">
          <ul>
            {list.map(({ href, title, nested }) => (
              <li className={nested ? 'nested' : ''}>
                <Link href={href}>
                  <a className={href === pathname ? 'selected' : ''}>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="content">{children}</div>
      </div>

      <Footer />

      <style global jsx>
        {`
          html {
            background-color: var(--black);
          }

          h1 {
            margin: 0;
            font-size: 3rem;
          }

          h2 {
            margin: 3rem 0 0 0;
            text-align: unset;
          }
        `}
      </style>

      <style jsx>
        {`
          .container {
            margin: 0 auto;
            max-width: var(--page-width);
            width: 100%;
            padding: 1rem 1rem 4rem 1rem;
            display: flex;
          }

          .content {
            padding: 1rem 2rem;
            background-color: var(--white);
            border-radius: 4px;
            width: 139rem;
          }

          .sidebar {
            color: var(--white);
            width: 38rem;
          }

          ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
            display: flex;
            flex-direction: column;
          }

          li {
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
            border-color: var(--secondary);
          }

          .sidebar a.selected {
            color: var(--secondary);
          }

          .sidebar .nested {
            padding-left: 1rem;
          }
        `}
      </style>
    </Page>
  );
};

export default Docs;

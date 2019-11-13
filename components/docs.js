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
        <div className="content">
          <div className="sidebar">
            <ul>
              <li>
                <Link href="/docs/quick-start">
                  <a
                    className={
                      pathname === '/docs/quick-start' || pathname === '/docs'
                        ? 'selected'
                        : ''
                    }
                  >
                    Quick start
                  </a>
                </Link>
              </li>
              {list.slice(1, list.length).map(({ href, title, nested }) => (
                <li key={href} className={nested ? 'nested' : ''}>
                  <Link href={href}>
                    <a className={href === pathname ? 'selected' : ''}>
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="children">{children}</div>
        </div>
      </div>

      <Footer />

      <style global jsx>
        {`
          html {
            background-color: var(--black);
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

          .container {
            flex: 1;
          }

          .content {
            display: flex;
            padding: 2rem;
            max-width: var(--page-width);
            margin: 0 auto;
          }

          .children {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 4px;
            padding: 1.5rem 2rem;
            overflow: hidden;
          }

          .sidebar {
            color: var(--white);
            min-width: 10rem;
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
            border-color: var(--secondary);
          }

          .sidebar a.selected {
            color: var(--secondary);
          }

          .sidebar .nested {
            padding-left: 1rem;
          }

          :global(code) {
            white-space: pre-wrap !important;
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
              padding: 0;
            }
            :global(html) {
              background-color: white;
            }
          }
        `}
      </style>
    </Page>
  );
};

export default Docs;

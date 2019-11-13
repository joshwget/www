import React from 'react';

import Page from '../components/page';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const postings = [
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

const Careers = () => (
  <Page>
    <Head />

    <Nav />

    <main>
      <div className="container">
        <h1>Careers</h1>

        <div className="content">
          {postings.map(({ title, location, body }) => (
            <div className="posting">
              <div className="header">
                <div className="title">{title}</div>

                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`mailto:careers@deviceplane.com?subject=${title}`}
                >
                  Apply
                </a>
              </div>
              <div>{location}</div>

              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>

    <Footer />

    <style global jsx>
      {`
        html {
          color: var(--white);
          background-color: var(--black);
        }

        h1 {
          margin: 0;
          font-size: 3rem;
        }
      `}
    </style>

    <style jsx>
      {`
        .container {
          max-width: var(--page-width);
          margin: 0 auto;
          padding: 0 2rem;
        }

        .posting {
          margin: 4rem 0;
          max-width: 36rem;
        }

        .header {
          display: flex;
          align-self: stretch;
          justify-content: space-between;
          align-items: flex-end;
        }

        .header a {
          text-decoration: none;
          transition: opacity 150ms;
          color: var(--secondary);
          font-weight: 500;
        }

        .header a:hover {
          opacity: 0.8;
        }

        .title {
          font-size: 1.5rem;
          font-weight: 500;
        }
      `}
    </style>
  </Page>
);

export default Careers;

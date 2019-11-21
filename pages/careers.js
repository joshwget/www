import React from 'react';

import Page from '../components/page';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const postings = [
  {
    title: 'Developer Advocate',
    location: 'San Francisco, CA',
    body: (
      <>
        <p>
          Our goal is to make Deviceplane the de facto way to manage all remote
          hardware and devices. The path to get there requires deep engagement
          with a massive community of developers — both to maximize adoption of
          Deviceplane, and to make sure we're building the product that fits
          their requirements and sparks joy.
        </p>
        <p>
          As a developer advocate, you’ll spread adoption of Deviceplane by both
          by developing content (sample apps, video tutorials, documentation,
          etc.) as well as building communities (establishing meetups, attending
          developer conferences to give talks, etc.). Ideally, you have
          experience giving talks at conferences, have previously written blog
          posts, and deeply understand developer communities.
        </p>
        <p>
          If you’re passionate about connecting with developers, telling
          stories, and sharing your learnings with the world, please reach out!
        </p>
      </>
    )
  }
];

const Careers = () => (
  <Page>
    <Head title="Careers" />

    <Nav />

    <main>
      <div className="container">
        <h1>Careers</h1>

        {/* <div className="intro">
          <p>
            Our goal is to make Deviceplane the de facto way to manage all
            remote hardware and devices. The path to get there requires deep
            engagement with a massive community of developers — both to maximize
            adoption of Deviceplane, and to make sure we're building the product
            that fits their requirements and sparks joy.
          </p>
        </div> */}

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

              {body}
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
          background-color: var(--black) !important;
        }

        h1 {
          margin: 0 0 2rem 0;
          font-size: 48px;
        }

        p {
          color: rgba(255, 255, 255, 0.9);
        }
      `}
    </style>

    <style jsx>
      {`
        .container {
          max-width: var(--page-width);
          margin: 0 auto;
          padding: 1rem 2rem;
        }

        .posting {
          max-width: 36rem;
          border: 1px solid var(--primary);
          padding: 2rem;
          border-radius: 8px;
        }

        .intro {
          max-width: 38rem;
          margin-bottom: 2rem;
        }

        .posting:not(:last-child) {
          margin-bottom: 4rem;
        }

        .header {
          display: flex;
          align-self: stretch;
          align-items: flex-start;
          justify-content: space-between;
        }

        .header a {
          text-decoration: none;
          transition: color 200ms;
          color: var(--primary);
          font-weight: 500;
        }

        .header a:hover {
          color: var(--white);
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

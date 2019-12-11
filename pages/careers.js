import React from 'react';

import Page from '../components/page';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const postings = [
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    body: (
      <>
        <p>
          As a software engineer, you'll own projects both big and small and be
          responsible for complete ownership and delivery of these projects. Our
          philosophy is that all engineers should be both product-minded and
          involved in product decisions day to day. This means that all engineers
          will be responsible for everything from product design to technical
          architecture and implementation.
        </p>
        <p>
          If you're excited by open source, working on a highly technical
          products, and tackling the hardest engineering problems then we'd
          like to talk to you!
        </p>
      </>
    )
  },
  {
    title: 'Developer Advocate',
    location: 'San Francisco, CA',
    body: (
      <>
        <p>
          As a developer advocate, you’ll spread awareness of Deviceplane
          through a wide variety of online and in-person mediums including forums,
          meetups, and conferences. You'll create content such as blog posts,
          sample applications, and video demos that serve to teach both how to use
          Deviceplane and the technical details of its internals.
        </p>
        <p>
          If you’re excited by engaging with developers, telling stories, and
          creating technical content, please reach out!
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

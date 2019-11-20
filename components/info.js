import Link from 'next/link';

const Info = () => (
  <section>
    <div className="container">
      <div>
        <img src="/code.svg" width={32} height={32} />
        <h4>Developer focused</h4>
        <p>
          Deploying to remote devices should be as easy as deploying to the
          cloud. We're building modern and accessible tooling so developers can
          spend less time learning and more time shipping.
        </p>
      </div>

      <div className="link">
        <Link href="/docs">
          <a>
            View documentation{' '}
            <img src="/arrow.svg" alt="Arrow" className="arrow" />
          </a>
        </Link>
      </div>
    </div>

    <div className="container">
      <div>
        <img src="/github.svg" width={32} height={32} />
        <h4>Open source</h4>
        <p>
          Developer infrastructure is inherently best when open source.
          Everything we build can be found on our GitHub and is distributed
          under a permissive open source license.
        </p>
      </div>

      <div className="link">
        <a href="https://github.com/deviceplane/deviceplane">
          Source code <img src="/arrow.svg" alt="Arrow" className="arrow" />
        </a>
      </div>
    </div>

    <div className="container">
      <div>
        <img src="/lock.svg" width={32} height={32} />
        <h4>Security conscious</h4>
        <p>
          We follow the best security practices across all of our systems to
          ensure your devices are secure. By using us you'll gain access to a
          variety of security features and controls that you didn't have before.
        </p>
      </div>

      {/* <div className="link">
        <a href="/docs/security">
          Learn more  <img src="/arrow.svg" alt="Arrow" className="arrow" />
        </a>
      </div> */}
    </div>

    <style jsx>{`
      @keyframes shift {
        50% {
          transform: translateX(6px);
        }
      }

      section {
        flex-direction: row;
        justify-content: space-between;
      }

      p {
        color: rgba(255, 255, 255, 0.9);
      }

      h4 {
        margin: 1rem 0;
      }

      .container {
        max-width: 16rem;
        background-color: var(--black);
        border-radius: 8px;
        padding: 1.5rem;
        color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .row {
        display: flex;
      }

      a {
        text-decoration: none;
        color: var(--black);
        background: #fff;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        transition: color 150ms;
        display: inline-flex;
        align-items: center;
      }

      .arrow {
        margin-left: 0.5rem;
        font-size: 1.5rem;
        width: 1rem;
      }

      .link {
        display: inline-flex;
        cursor: pointer;
        border-radius: var(--radius);
        margin-top: 1rem;
      }

      .link:hover {
        opacity: 0.9;
      }

      .link:hover .arrow {
        animation-name: shift;
        animation-duration: 1.2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
      }

      @media screen and (max-width: 900px) {
        section {
          align-items: center;
          justify-content: unset;
          flex-direction: column;
        }

        .container {
          max-width: 28rem;
          margin: 2rem 0;
        }

        .container:last-child {
          margin-bottom: 0;
        }
      }
    `}</style>
  </section>
);

export default Info;

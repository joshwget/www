import Link from 'next/link';

import Arrow from './icons/arrow';

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
            View documentation
            <div className="arrow">
              <Arrow />
            </div>
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
          Source code
          <div className="arrow">
            <Arrow />
          </div>
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

      {/*
        <a href="/docs/security">
          Learn more  <Arrow />
        </a>
      */}
    </div>

    <style jsx>{`
      @keyframes shift {
        50% {
          transform: translateX(5px);
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

      .container:not(:last-child) {
        margin-right: 2rem;
      }

      .row {
        display: flex;
      }

      .link {
        display: flex;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 500;
        color: var(--primary);
        transition: background-color 200ms, color 200ms;
        border-radius: var(--radius);
        padding: 8px 1rem;
        background: transparent;
        cursor: pointer;
        border-radius: var(--radius);
        border: 1px solid var(--primary);
        margin-top: 1rem;
      }
      a:hover {
        background-color: var(--primary);
        color: var(--black);
      }
      a:hover .arrow {
        animation-name: shift;
        animation-duration: 1.2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
      }

      a:hover :global(svg) {
        fill: var(--black);
      }

      .arrow {
        display: flex;
        margin-left: 0.5rem;
      }

      .arrow :global(svg) {
        fill: var(--primary);
        transition: fill 200ms;
      }

      @media screen and (max-width: 900px) {
        section {
          align-items: center;
          justify-content: unset;
          flex-direction: column;
        }

        .container {
          max-width: 28rem;
          margin: 2rem 0 !important;
        }

        .container:last-child {
          margin-bottom: 0 !important;
        }
      }
    `}</style>
  </section>
);

export default Info;

const Info = ({}) => (
  <section>
    <div className="container">
      <div>
        <img src="/code.svg" width={32} height={32} />
        <h4>Developer focused</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className="link">
        <a href="/documentation">
          Explore the docs <div className="arrow">→</div>
        </a>
      </div>
    </div>

    <div className="container">
      <div>
        <img src="/github.svg" width={32} height={32} />
        <h4>Open source</h4>
        <p>
          Everything we build can be found on our GitHub and is distributed
          under a permissive open source license.
        </p>
      </div>

      <div className="link">
        <a href="https://github.com/deviceplane/deviceplane">
          Source code <div className="arrow">→</div>
        </a>
      </div>
    </div>

    <div className="container">
      <div>
        <img src="/lock.svg" width={32} height={32} />
        <h4>Security conscious</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className="link">
        <a href="/docs/security">
          Learn more <div className="arrow">→</div>
        </a>
      </div>
    </div>

    <style jsx>{`
      @keyframes shift {
        50% {
          transform: translateX(4px);
        }
      }

      section {
        flex-direction: row;
        justify-content: center;
      }

      h4 {
        margin: 1rem 0;
      }

      .container {
        max-width: 20rem;
        margin: 0 2rem;
        background-color: var(--black);
        border-radius: 6px;
        padding: 2rem;
        color: var(--white);
        justify-content: space-between;
      }

      .row {
        display: flex;
      }

      a {
        text-decoration: none;
        font-weight: 500;
        color: var(--secondary);
        transition: color 150ms;
        display: inline-flex;
      }

      .arrow {
        margin-left: 0.5rem;
      }

      .link {
        display: inline-flex;
        cursor: pointer;
        border-radius: 4px;
        margin-top: 1rem;
      }

      .link:hover {
        opacity: 0.9;
      }

      @media screen and (max-width: 1200px) {
        .container {
          margin: 0 1rem;
        }
      }

      @media screen and (max-width: 760px) {
        section {
          align-items: center;
          justify-content: unset;
          flex-direction: column;
        }

        .container:not(:last-child) {
          margin-bottom: 3rem;
        }
      }
    `}</style>
  </section>
);

export default Info;

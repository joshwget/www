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
        <a href="/documentation">Explore the docs</a>
      </div>
    </div>

    <div className="container">
      <div>
        <img src="/github.svg" width={32} height={32} />
        <h4>Open source</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>

      <div className="link">
        <a href="https://github.com/deviceplane/deviceplane">Source code</a>
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
        <a href="/docs/security">Learn more</a>
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
        box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.3);
        justify-content: space-between;
      }

      .row {
        display: flex;
      }

      a {
        text-decoration: none;
        font-weight: 500;
        font-size: 0.8rem;
        color: var(--white);
        text-transform: uppercase;
        transition: color 150ms;
      }

      .link {
        display: inline-flex;
        cursor: pointer;
        padding: 0.4rem 0.8rem;
        background-color: var(--primary);
        border-radius: 4px;
        transition: background-color 150ms, color 150ms;
      }

      .link:hover {
        background-color: var(--secondary);
        color: var(--black);
      }

      .link:hover a {
        color: var(--black);
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

      // .arrow {
      //   margin-left: 0.4rem;
      //   font-weight: 700;
      // }

      // .link:hover .arrow {
      //   animation-name: shift;
      //   animation-duration: 1.2s;
      //   animation-timing-function: ease-in-out;
      //   animation-iteration-count: infinite;
      //   animation-fill-mode: forwards;
      //   animation-direction: alternate;
      // }
    `}</style>
  </section>
);

export default Info;

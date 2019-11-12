const Info = ({}) => (
  <section className="info">
    <div className="container">
      <h4>Developer focused</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="link">
        <a href="/documentation">Documentation</a>
      </div>
    </div>

    <div className="container">
      <h4>Open source</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="link">
        <a href="https://github.com/deviceplane/deviceplane">Source code</a>
      </div>
    </div>

    <div className="container">
      <h4>Security conscious</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
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
        margin: 0 0 1.5rem 0;
      }

      .container {
        max-width: 20rem;
        margin: 2rem 2rem;
        background-color: var(--black);
        border-radius: 6px;
        padding: 1.5rem;
        color: var(--white);
      }

      .row {
        display: flex;
      }

      a {
        text-decoration: none;
        font-weight: 700;
        font-size: 12px;
        color: var(--white);
        text-transform: uppercase;
        transition: color 150ms;
      }

      .link {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        padding: 0.4rem 0.8rem;
        background-color: var(--blue);
        border-radius: 3px;
        transition: background-color 150ms;
      }

      .link:hover {
        background-color: var(--white);
      }

      .link:hover a {
        color: var(--black);
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

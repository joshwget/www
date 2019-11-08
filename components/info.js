const Info = ({}) => (
  <section className="info">
    <div className="container">
      <h3>Developer focused</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="link">
        <a href="/documentation">View documentation</a>
        <div className="arrow">→</div>
      </div>
    </div>

    <div className="container">
      <h3>Open source</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="link">
        <a href="/docs/security">Join us</a>
        <div className="arrow">→</div>
      </div>
    </div>

    <div className="container">
      <h3>Security concious</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
      <div className="link">
        <a href="/docs/security">Learn more</a>
        <div className="arrow">→</div>
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

      .container {
        max-width: 20rem;
        margin: 2rem 2rem;
      }

      .row {
        display: flex;
      }

      a {
        text-decoration: none;
        font-weight: 700;
        font-size: 1rem;
        color: var(--blue);
      }

      .link {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
      }

      .arrow {
        color: var(--blue);
        margin-left: 0.4rem;
        font-weight: 700;
      }

      .link:hover .arrow {
        animation-name: shift;
        animation-duration: 1.2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
      }
    `}</style>
  </section>
);

export default Info;

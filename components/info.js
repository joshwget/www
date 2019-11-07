const Info = ({}) => (
  <section className="info">
    <div className="container">
      <h3>Developer focused</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse.
      </p>
      <div className="link">
        <a href="/documentation">View documentation</a>
        <div className="arrow">→</div>
      </div>
    </div>

    <div className="container">
      <h3>Security concious</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse.
      </p>
      {/* <div className="link">
        <a href="/blog/2">Further reading &nbsp;&nbsp;→</a>
      </div> */}
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
        max-width: 24rem;
        margin: 2rem 4rem;
      }

      a {
        text-decoration: none;
        font-weight: 700;
        font-size: 1rem;
        color: var(--blue);
      }

      .link {
        display: flex;
        align-items: center;
      }

      .arrow {
        color: var(--blue);
        margin-left: 0.5rem;
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

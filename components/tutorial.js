const Tutorial = ({}) => (
  <div className="tutorial">
    <section>
      <h2>How it works</h2>

      <div>
        <button className="selected">Register</button>
        <button>Deploy</button>
        <button>Monitor</button>
        <button>Access</button>
      </div>

      <div className="row">
        <div className="video"></div>

        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
      </div>
    </section>
    <style jsx>{`
      section {
        align-items: center;
      }

      .tutorial {
        background: var(--black);
        color: var(--white);
      }

      .row {
        display: flex;
        align-items: center;
        margin-top: 1rem;
      }

      .video {
        background: white;
        border-radius: 6px;
        width: 22.5rem;
        height: 15rem;
        margin-right: 4rem;
      }

      .content {
        max-width: 24rem;
      }

      button {
        margin: 2rem;
        appearance: none;
        background: none;
        border: none;
        color: var(--white);
        font-weight: 700;
        font-size: 16px;
        padding: 0.8rem;
        border-radius: 6px;
        cursor: pointer;
      }

      .selected {
        background-color: var(--blue);
      }
    `}</style>
  </div>
);

export default Tutorial;

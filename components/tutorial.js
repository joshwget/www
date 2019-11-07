const Tutorial = ({}) => (
  <div className="tutorial">
    <section>
      <h2>How it works</h2>

      <div>
        <button>Register</button>
        <button>Manage</button>
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
        width: 30rem;
        height: 20rem;
        margin-right: 4rem;
      }

      .content {
        max-width: 26rem;
      }

      button {
        margin: 2rem;
        appearance: none;
        background: none;
        border: none;
        color: var(--white);
        font-weight: 700;
        font-size: 1rem;
      }

      p {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Tutorial;

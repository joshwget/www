const descriptions = {
  register: `Register devices with a single command. Our agent is under 10MB,
  consumes minimal resources, and runs as a container. We support any device
  running Linux regardless of distribution, architecture, and hardware.`,
  deploy: `Package your applications as containers and then let us deploy
  and manage those containers to your devices. Start with manual
  deployments through the web console or CLI and then progress to setting
  up automated git-based deployment workflows.`,
  monitor: `MONITOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse.`,
  access: `ACCESS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse.`
};

const Tutorial = ({}) => {
  const [selection, setSelection] = React.useState('register');

  return (
    <div className="tutorial">
      <section>
        <h2>How it works</h2>

        <div>
          {Object.keys(descriptions).map(key => (
            <button
              key={key}
              className={selection === key ? 'selected' : ''}
              onClick={() => setSelection(key)}
            >
              {key}
            </button>
          ))}
        </div>

        <div className="row">
          <div className="video"></div>

          <div className="content">
            <p>{descriptions[selection]}</p>
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
          text-transform: capitalize;
        }

        button:active,
        button:focus {
          outline: none;
        }

        .selected {
          cursor: default;
          background-color: var(--blue);
        }
      `}</style>
    </div>
  );
};

export default Tutorial;

const content = [
  {
    title: 'register',
    body: `Register devices with a single command. Our agent is under 10MB,
    consumes minimal resources, and runs as a container. We support any device
    running Linux regardless of distribution, architecture, and hardware.`
  },
  {
    title: 'deploy',
    body: `Package your applications as containers and then let us deploy
    and manage those containers to your devices. Start with manual
    deployments through the web console or CLI and then progress to setting
    up automated git-based deployment workflows.`
  },
  {
    title: 'monitor',
    body: `Instrument your applications to expose the metrics most critical for
    your business. We then handle metric collection, enrichment, and
    propagation to the metrics tooling of your choice. From there setup
    dashboards, visualizations, and alerts to make sure your devices and
    applications are operating as expected.`
  },
  {
    title: 'access',
    body: `Directly access your devices via SSH when required. Run one-off
    or recurring scripts on one device or a group of devices.`
  }
];

const Tutorial = ({}) => {
  const [selection, setSelection] = React.useState(0);

  return (
    <div className="tutorial">
      <section>
        <h2>How it works</h2>

        <div className="container">
          <div className="buttons">
            {content.map(({ title }, i) => (
              <button
                key={title}
                className={selection === i ? 'selected' : ''}
                onClick={() => setSelection(i)}
              >
                {title}
              </button>
            ))}
          </div>

          <div className="content">
            <p>{content[selection].body}</p>
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
          min-height: 24rem;
        }

        .container {
          display: flex;
          margin-top: 2rem;
          position: relative;
          justify-content: center;
        }

        .content {
          max-width: 24rem;
          border: 2px solid var(--secondary);
          border-radius: 4px;
          padding: 2rem;
        }

        .content p {
          margin: 0;
        }

        .buttons {
          position: absolute;
          display: flex;
          flex-direction: column;
          left: -10rem;
        }

        button {
          padding: 0 0 0.25rem 0;
          appearance: none;
          background: none;
          border: none;
          color: var(--white);
          font-weight: 500;
          font-size: 0.85rem;
          cursor: pointer;
          text-transform: uppercase;
          border-bottom: 2px solid var(--black);
          transition: opacity 150ms, color 150ms, border-color 150ms;
        }

        button:not(:last-child) {
          margin-bottom: 1rem;
        }

        button:hover:not(.selected) {
          opacity: 0.8;
        }

        button:active,
        button:focus {
          outline: none;
        }

        .buttons {
          display: flex;
        }

        .button-container {
          display: flex;
        }

        .selected {
          cursor: default;
          color: var(--secondary);
          border-color: var(--secondary);
        }

        @media screen and (max-width: 960px) {
          .buttons {
            flex-direction: column;
          }
          .video {
            margin: 0 0 2rem 0;
          }
          .content {
            text-align: center;
          }
        }

        @media screen and (max-width: 480px) {
          h2 {
            margin-bottom: 2rem;
          }
          button {
            margin: 1.5rem 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Tutorial;

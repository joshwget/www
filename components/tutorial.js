const content = [
  {
    title: 'Register',
    body: `Register devices with a single command. Our agent is under 10MB,
    consumes minimal resources, and runs as a container. We support any device
    running Linux regardless of distribution, architecture, and hardware.`
  },
  {
    title: 'Deploy',
    body: `Package your applications as containers and then let us deploy
    and manage those containers to your devices. Start with manual
    deployments through the web console or CLI and then progress to setting
    up automated git-based deployment workflows.`
  },
  {
    title: 'Monitor',
    body: `Instrument your applications to expose the metrics most critical for
    your business. We then handle metric collection, enrichment, and
    propagation to the metrics tooling of your choice. From there setup
    dashboards, visualizations, and alerts to make sure your devices and
    applications are operating as expected.`
  },
  {
    title: 'Access',
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
            <div className="row">
              {content.slice(0, 2).map(({ title }, i) => (
                <button
                  key={title}
                  className={selection === i ? 'selected' : ''}
                  onClick={() => setSelection(i)}
                >
                  {title}
                </button>
              ))}
            </div>
            <div className="row">
              {content.slice(2, 4).map(({ title }, i) => (
                <button
                  key={title}
                  className={selection === i + 2 ? 'selected' : ''}
                  onClick={() => setSelection(i + 2)}
                >
                  {title}
                </button>
              ))}
            </div>
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
          min-height: 26rem;
        }

        .container {
          display: flex;
          margin-top: 2rem;
          position: relative;
          justify-content: center;
        }

        .content {
          display: flex;
          max-width: 24rem;
          border: 2px solid var(--secondary);
          border-radius: 4px;
          padding: 3rem;
        }

        .content p {
          margin: 0;
        }

        .buttons {
          position: absolute;
          left: -10rem;
          display: block;
        }

        button {
          display: block;
          padding: 0 0 0.25rem 0;
          appearance: none;
          background: none;
          border: none;
          color: var(--white);
          font-weight: 500;
          font-size: 1rem;
          cursor: pointer;
          border-bottom: 2px solid var(--black);
          transition: color 150ms, border-color 150ms;
        }

        button {
          margin-bottom: 1rem;
        }

        button:hover:not(.selected) {
          border-color: var(--secondary);
        }

        button:active,
        button:focus {
          outline: none;
        }

        .selected {
          cursor: default;
          color: var(--secondary);
        }

        @media screen and (max-width: 900px) {
          .container {
            flex-direction: column;
            align-items: center;
            justify-content: unset;
          }
          .buttons {
            position: static;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          button {
            margin: 0 2rem 2rem 2rem !important;
          }
          .tutorial {
            min-height: 29rem;
          }
          .content {
            padding: 2rem;
            max-width: 22rem;
          }
          .row {
            display: flex;
            flex-direction: row;
          }
        }

        @media screen and (max-width: 600px) {
          .container {
            padding: 0 1rem;
          }
          .row {
            flex-direction: column;
          }
          button {
            margin: 0 1rem 1rem 1rem !important;
          }
          .content {
            max-width: unset;
          }
        }

        @media screen and (max-width: 480px) {
          button {
            margin: 1.5rem 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Tutorial;

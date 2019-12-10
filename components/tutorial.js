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

const Tutorial = () => {
  const [selection, setSelection] = React.useState(0);

  return (
    <section>
      <h2>How it works</h2>

      <div className="desktop buttons">
        {content.map(({ title }, i) => (
          <button
            className={i === selection ? 'selected' : ''}
            onClick={() => setSelection(i)}
          >
            {title}
          </button>
        ))}
      </div>

      <div className="tablet buttons">
        <div className="group">
          {content.slice(0, 2).map(({ title }, i) => (
            <button
              className={i === selection ? 'selected' : ''}
              onClick={() => setSelection(i)}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="group">
          {content.slice(2, 4).map(({ title }, i) => (
            <button
              className={i + 2 === selection ? 'selected' : ''}
              onClick={() => setSelection(i + 2)}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <p>{content[selection].body}</p>
      </div>

      <style jsx>{`
        section {
          color: var(--white);
          align-items: center;
          min-height: 21rem;
        }

        h4 {
          transition: color 100ms;
          color: var(--primary);
        }

        .container {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          padding: 2rem;
          margin: 0 2rem;
          background: #000;
          border: 1px solid var(--primary);
          max-width: 25rem;
        }

        p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
        }

        .group {
          display: flex;
          flex: 1;
        }

        .buttons {
          display: flex;
          justify-content: space-between;
          width: 29rem;
          margin-bottom: 1rem;
        }

        .tablet {
          display: none;
        }

        button {
          max-width: 5.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          appearance: none;
          outline: none;
          border: 1px solid var(--primary);
          background: none;
          color: var(--primary);
          padding: 0.7rem 1rem;
          font-size: 1rem;
          font-weight: 500;
          border-radius: var(--radius);
          transition: color 200ms, border-color 200ms;
          cursor: pointer;
        }

        button:not(.selected):hover {
          color: var(--white);
          border-color: var(--white);
        }

        .selected {
          background: var(--white);
          color: var(--black);
          border-color: var(--white);
          cursor: auto;
        }

        @media screen and (max-width: 700px) {
          .tutorial {
            min-height: unset;
          }
          .tablet {
            display: flex;
          }
          .desktop {
            display: none;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
            justify-content: unset;
          }
          .group {
            margin-bottom: 2rem;
          }
          .group:last-child {
            margin-bottom: 1rem;
          }
          button {
            margin: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Tutorial;

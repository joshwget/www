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
    <div className="tutorial">
      <section>
        <h2>How it works</h2>

        <div className="buttons">
          {content.map(({ title }, i) => (
            <button
              className={i === selection ? 'selected' : ''}
              onClick={() => setSelection(i)}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="container">
          <p>{content[selection].body}</p>
        </div>
      </section>

      <style jsx>{`
        section {
          color: var(--white);
          align-items: center;
        }

        .tutorial {
          min-height: 30rem;
          background: var(--black);
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
          max-width: 26rem;
        }

        p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
        }

        .group {
          display: flex;
        }

        .group:first-of-type {
          margin-bottom: 4rem;
        }

        .buttons {
          display: flex;
          margin-bottom: 1.5rem;
          justify-content: center;
        }

        button {
          flex: 0 0 6rem;
          appearance: none;
          outline: none;
          border: 1px solid var(--primary);
          background: none;
          color: var(--white);
          padding: 0.6rem 1rem;
          font-size: 1rem;
          border-radius: var(--radius);
          margin: 0 1rem;
          transition: color 200ms;
          cursor: pointer;
        }

        button:not(.selected):hover {
          color: var(--primary);
        }

        .selected {
          background: var(--primary);
          color: var(--black);
          cursor: auto;
        }

        @media screen and (max-width: 900px) {
          .container {
            margin: 0 2rem;
          }

          .group:first-child {
            margin-bottom: 4rem;
          }
        }

        @media screen and (max-width: 700px) {
          .group {
            flex-direction: column;
            margin: 0 !important;
          }
          .container {
            margin: 2rem 0;
          }
        }

        @media screen and (max-width: 480px) {
        }
      `}</style>
    </div>
  );
};

export default Tutorial;

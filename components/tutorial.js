const content = [
  {
    title: 'register',
    body: `REGISTER Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse.`
  },
  {
    title: 'deploy',
    body: `DEPLOY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse.`
  },
  {
    title: 'monitor',
    body: `MONITOR Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse.`
  },
  {
    title: 'access',
    body: `ACCESS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse.`
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

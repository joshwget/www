const Hero = ({ airtable }) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setEmail('');
    setSubmitted(true);

    airtable('Emails').create(
      [
        {
          fields: { Email: email }
        }
      ],
      function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.getId());
        });
      }
    );
  };

  return (
    <div className="hero">
      <section>
        <h1>Manage your devices at the edge</h1>

        <div className="content">
          <p>
            Update, monitor, and access remote devices and servers with ease.
            Let us handle the hard infrastructure problems around managing
            remote hardware so you stay focused on your business.
          </p>
        </div>

        <div className="buttons">
          <div className="demo-container">
            <div className="success">
              <span>
                Thanks for your interest, we'll reach out as soon as we can.
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="demo">
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button>Request a demo</button>
              </div>
            </form>
          </div>

          <button onClick={() => window.Intercom('show')}>
            Chat with us now <div className="arrow">→</div>
          </button>
        </div>
      </section>

      <div className="bg-left" />
      <div className="bg-right" />
      <style jsx>{`
        @keyframes hover {
          100% {
            transform: translateY(-4px);
          }
        }

        @keyframes shift {
          50% {
            transform: translateX(6px);
          }
        }

        section {
          position: relative;
          color: var(--white);
          height: 24rem;
        }

        h1 {
          margin: 0 0 1rem 0;
        }

        .hero {
          position: relative;
          background: black;
        }

        .bg-triangle {
        }

        .content {
          max-width: 30rem;
        }

        .buttons {
          margin-top: 1rem;
        }

        .demo-container {
          height: 3rem;
          margin-bottom: 2rem;
        }

        .demo {
          display: ${submitted ? 'none' : 'inline-flex'};
          align-items: center;
          border-radius: 4px;
        }

        .demo input {
          padding: 0.625rem;
          border-radius: 4px;
          border: none;
          outline: none;
          font-size: 1rem;
          color: var(--black);
          width: 16.5rem;
        }

        .demo input::placeholder {
          font-size: 1rem;
          color: var(--black);
        }

        .demo button {
          color: var(--black);
          background: var(--primary);
          font-weight: 500;
          cursor: pointer;
          transition: opacity 150ms;
          margin-left: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: 4px;
        }

        .demo button:hover {
          opacity: 0.9;
        }

        button {
          padding: 0;
          margin: 0;
          display: flex;
          appearance: none;
          border: none;
          outline: none;
          background: none;
          font-weight: 500;
          font-size: 1rem;
          color: var(--secondary);
          cursor: pointer;
          transition: opacity 150ms;
          align-items: center;
        }

        button:hover {
          opacity: 0.9;
        }

        button:hover .arrow {
          animation-name: shift;
          animation-duration: 1.2s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
          animation-direction: alternate;
        }

        .arrow {
          margin-left: 0.5rem;
          font-size: 1.5rem;
        }

        .bg {
          top: 0;
          left: 0;
          position: absolute;
        }

        .success {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 1.5rem;
          height: 3rem;
          border: 2px solid var(--secondary);
          border-radius: 4px;
          color: var(--secondary);
          font-weight: 500;
          display: ${submitted ? 'inline-flex' : 'none'};
        }

        @media screen and (max-width: 600px) {
          section {
            padding: 4rem 2rem 8rem 2rem;
          }
          .demo-container {
            height: 6rem;
          }
          .demo {
            display: ${submitted ? 'none' : 'flex'};
            flex-direction: column;
          }
          .success {
            height: 5rem;
          }
          .demo input {
            box-sizing: border-box;
            width: 100%;
          }
          .demo button {
            align-self: stretch;
            justify-content: center;
            margin: 0.5rem 0 0 0;
            padding: 0.8rem 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

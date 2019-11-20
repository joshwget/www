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
        <img alt="Black triangle background" className="bg" src="/bg.svg" />

        <div className="container">
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
              Chat with us <img src="/arrow.svg" className="arrow" />
            </button>
          </div>
        </div>
      </section>

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
          height: 34rem;
        }

        h1 {
          margin: 0 0 1rem 0;
        }

        .bg {
          position: absolute;
          left: -68rem;
          top: 0rem;
        }

        .container {
          position: relative;
        }

        .content {
          max-width: 30rem;
        }

        .buttons {
          margin-top: 1rem;
        }

        .demo-container {
          height: 3rem;
          margin-bottom: 1rem;
        }

        .demo {
          display: ${submitted ? 'none' : 'inline-flex'};
          align-items: center;
          border-radius: var(--radius);
        }

        .demo input {
          padding: 0.6rem;
          border-radius: var(--radius);
          border: 1px solid #fff;
          outline: none;
          font-size: 1rem;
          color: var(--white);
          width: 16.5rem;
          background: #000;
        }

        input::placeholder {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .demo button {
          background-color: var(--primary);
          color: #000;
          cursor: pointer;
          margin-left: 0.5rem;
          padding: 0.7rem 1rem;
          border-radius: var(--radius);
          border: none;
          transition: opacity 150ms;
        }

        .demo button:hover {
          opacity: 0.9;
        }

        button {
          margin: 0;
          display: flex;
          font-size: 1rem;
          appearance: none;
          outline: none;
          background: #fff;
          color: var(--black);
          border-radius: 4px;
          padding: 0.7rem 1rem;
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
          width: 1rem;
          margin-left: 0.75rem;
        }

        .success {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding: 0 1.5rem;
          height: 3rem;
          border: 2px solid var(--primary);
          border-radius: var(--radius);
          color: var(--primary);
          font-weight: 500;
          display: ${submitted ? 'inline-flex' : 'none'};
        }

        @media screen and (max-width: 600px) {
          section {
            height: 40rem;
          }
          .bg {
            height: 43rem;
            left: -86rem;
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

const CTA = ({}) => (
  <div className="cta">
    <section>
      <h2>Get started for free today</h2>

      <div className="row">
        <button onClick={() => window.Intercom('show')}>Chat with us</button>

        <a href="https://cloud.deviceplane.com/register">Sign up</a>
      </div>
    </section>
    <style jsx>{`
      .cta {
        background-color: var(--black);
        color: var(--white);
      }

      section {
        padding-top: 0;
        align-items: center;
      }

      .row {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        align-self: stretch;
      }

      a {
        text-decoration: none;
        color: var(--black);
        background-color: var(--secondary);
        height: 3rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius);
        margin: 0 1rem;
        width: 20rem;
        transition: opacity 150ms;
      }

      button {
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: 2px solid var(--white);
        color: var(--white);
        font-size: 1rem;
        font-weight: 500;
        border-radius: var(--radius);
        margin: 0 1rem;
        width: 20rem;
        cursor: pointer;
        transition: opacity 150ms;
      }

      a:hover,
      button:hover {
        opacity: 0.8;
      }

      @media screen and (max-width: 700px) {
        .row {
          flex-direction: column-reverse;
          justify-content: unset;
          align-items: center;
        }

        a,
        button {
          width: 28rem;
          margin: 1rem 0;
        }
      }

      @media screen and (max-width: 600px) {
        section {
          padding-top: 3rem;
        }
      }

      @media screen and (max-width: 480px) {
        a,
        button {
          width: unset;
          align-self: stretch;
        }
      }
    `}</style>
  </div>
);

export default CTA;

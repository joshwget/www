import Arrow from './icons/arrow';

const CTA = ({}) => (
  <div className="cta">
    <section>
      <h2>Ready to get started?</h2>

      <div className="row">
        <a href="https://cloud.deviceplane.com/register">Start now</a>

        <button onClick={() => window.Intercom('show')}>
          Chat with us{' '}
          <div className="arrow">
            <Arrow />
          </div>
        </button>
      </div>
    </section>
    <style jsx>{`
      @keyframes shift {
        50% {
          transform: translateX(5px);
        }
      }

      .cta {
        background-color: #000;
        color: var(--white);
      }

      section {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      h2 {
        text-align: left;
        margin: 0;
      }

      .row {
        display: flex;
        justify-content: center;
        align-self: stretch;
        align-items: center;
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
        display: flex;
        margin-left: 0.75rem;
      }

      a {
        text-decoration: none;
        color: var(--black);
        background-color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius);
        border: 1px solid var(--primary);
        margin: 0 1rem;
        transition: color 200ms, background-color 200ms;
        width: 14rem;
        height: 3rem;
        font-weight: 500;
      }
      a:hover {
        color: var(--primary);
        background-color: var(--black);
      }

      button {
        width: 14rem;
        height: 3rem;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--white);
        color: var(--black);
        font-size: 1rem;
        border: 1px solid var(--white);
        border-radius: var(--radius);
        margin: 0 1rem;
        cursor: pointer;
        font-weight: 500;
        transition: background-color 200ms, color 200ms;
      }
      button:hover {
        color: var(--white);
        background-color: var(--black);
      }
      button:hover :global(svg) {
        fill: var(--white);
      }

      button :global(svg) {
        transition: fill 200ms;
      }

      @media screen and (max-width: 900px) {
        section {
          flex-direction: column;
        }
        h2 {
          text-align: center;
          margin: 0 0 2rem 0;
        }
        .row {
          flex-direction: row-reverse;
        }
      }

      @media screen and (max-width: 600px) {
        .row {
          flex-direction: column;
        }
        a {
          width: 100%;
        }
        button {
          width: 100%;
          margin: 1.5rem 0;
        }
      }
    `}</style>
  </div>
);

export default CTA;

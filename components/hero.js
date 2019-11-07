const Hero = ({}) => (
  <div className="hero">
    <section>
      <h1>Manage your devices at the edge</h1>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
      </div>

      <div className="buttons">
        <a href="#features" className="learn-more">
          Learn more
        </a>

        <button>
          Chat with us now <div className="arrow">→</div>
        </button>
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

      .hero {
        color: var(--white);
        background: var(--black);
        padding: 3rem 0 0 0;
      }

      h1 {
        margin: 0 0 1rem 0;
      }

      .content {
        max-width: 30rem;
      }

      .buttons {
        display: flex;
        align-items: center;
        margin-top: 1rem;
      }

      .learn-more {
        color: var(--white);
        background: var(--blue);
        text-decoration: none;
        border-radius: 6px;
        padding: 1rem 1.5rem;
        margin-right: 2rem;
        font-weight: 500;
        //transition: transform 300ms;
        transition: background-color 150ms, color 150ms;
      }

      .learn-more:hover {
        background-color: var(--white);
        color: var(--black);
        //transform: translateY(-4px);
        // animation-name: hover;
        // animation-duration: 600ms;
        // animation-timing-function: ease-in-out;
        // animation-fill-mode: forwards;
      }

      button {
        display: flex;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        font-weight: 600;
        font-size: 1rem;
        color: var(--white);
        cursor: pointer;
        transition: opacity 150ms;
      }

      button:hover {
        opacity: 1;
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
      }
    `}</style>
  </div>
);

export default Hero;

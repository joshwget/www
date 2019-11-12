const Hero = ({}) => (
  <div className="hero">
    <section>
      <h1>Manage your devices at the edge</h1>

      <div className="content">
        <p>
          Update, monitor, and access remote devices and servers with ease. Let
          us handle the hard infrastructure problems around managing remote
          hardware so you stay focused on your business.
        </p>
      </div>

      <div className="buttons">
        <form>
          <div className="demo">
            <input required type="email" placeholder="Email address" />
            <button>Request a demo</button>
          </div>
        </form>

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

      section {
        position: relative;
        padding: 6rem 1rem 10rem 1rem;
        color: var(--white);
      }

      h1 {
        margin: 0 0 1rem 0;
      }

      .hero {
        position: relative;
        background: black;
      }

      .content {
        max-width: 30rem;
      }

      .buttons {
        margin-top: 1rem;
      }

      .demo {
        display: inline-flex;
        align-items: center;
        margin-bottom: 2rem;
        //background-color: var(--primary);
        border-radius: 4px;
      }

      .demo input {
        padding: 0.625rem;
        border-radius: 4px;
        border: none;
        outline: none;
        font-size: 1rem;
        color: var(--black);
        width: 15rem;
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
        //transform: translateY(-4px);
        // animation-name: hover;
        // animation-duration: 600ms;
        // animation-timing-function: ease-in-out;
        // animation-fill-mode: forwards;
      }

      button {
        padding: 0;
        margin: 0;
        display: flex;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        font-weight: 600;
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
    `}</style>
  </div>
);

export default Hero;

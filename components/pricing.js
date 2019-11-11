const Pricing = ({}) => (
  <section>
    <h2>Select your plan</h2>

    <div className="bg" />

    <div className="options">
      <div className="border">
        <div className="container">
          <span className="label">Developer</span>

          <ul>
            <li>Free</li>
            <li>Up to 25 devices</li>
            <li>Single user</li>
          </ul>
        </div>
      </div>

      <div className="border">
        <div className="container">
          <span className="label">Team</span>

          <ul>
            <li>$250 per month base</li>
            <li>50 devices included</li>
            <li>5 seats included</li>
          </ul>
        </div>
      </div>

      <div className="border">
        <div className="container">
          <span className="label">Enterprise</span>

          <ul>
            <li>Custom pricing</li>
            <li>Unlimited seats</li>
            <li>Dedicated support</li>
            <li>Custom solutions</li>
          </ul>
        </div>
      </div>
    </div>

    <style jsx>{`
      section {
        align-items: center;
        position: relative;
        padding-bottom: 0;
      }

      .options {
        display: flex;
      }

      .label {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
      }

      @keyframes jump {
        100% {
          transform: translateY(-18px);
        }
      }

      @keyframes hover {
        100% {
          transform: translateY(-18px);
        }
      }

      .container {
        background: var(--white);
        border: 6px solid var(--black);
        color: var(--black);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        height: 14rem;
        width: 10rem;
        transition: border-color: 150ms;
        cursor: pointer;
      }

      .container:hover {
        animation-name: hover;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
        //background: var(--blue);
        //color: var(--white);
        border-color: var(--blue);
      }

      .border {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 3;
        height: 17.5rem;
        width: 14rem;
        margin: 4rem 2rem;
        background: var(--white);
        border-radius: 8px;
      }

      .bg {
        position: absolute;
        z-index: 0;
        height: 24rem;
        background: linear-gradient(
          171deg,
          transparent calc(50% - 1px),
          rgb(0, 0, 0) 50%
        );
        width: 100vw;
        bottom: 0;
      }

      ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      li {
        display: flex;
        font-weight: 500;
        font-size: 14px;
      }

      li:not(:last-child) {
        margin-bottom: 1rem;
      }
    `}</style>
  </section>
);

export default Pricing;

const Pricing = ({}) => (
  <section className="pricing">
    <h2>Ready to get started?</h2>

    <div className="bg" />

    <div className="options">
      <div className="border">
        <div className="container">
          <span className="label">Free</span>

          <ul>
            <li>10 Devices</li>
            <li>250MB Log limit</li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className="border">
        <div className="container">
          <span className="label">Enterprise</span>

          <ul>
            <li>Unlimited devices</li>
            <li>Unlimited logging</li>
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
      h2 {
        font-size: 3rem;
        margin: 0 0 2rem 0;
      }
      .pricing {
      }

      .options {
        display: flex;
      }

      .label {
        font-size: 1.1rem;
        font-weight: 600;
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
        margin: 4rem 3.5rem;
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

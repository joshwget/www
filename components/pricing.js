const plans = [
  {
    name: 'Developer',
    features: ['10 devices', 'Something', 'Something'],
    price: 'Free'
  },
  {
    name: 'Team',
    features: ['1000 devices', 'Something', 'Something', 'Something'],
    price: '$80/month'
  },
  {
    name: 'Enterprise',
    features: ['Unlimited devices', 'Something', 'Something', 'Something'],
    price: 'Custom'
  }
];

const Pricing = ({}) => (
  <section>
    <h2>Select your plan</h2>

    <div className="bg" />

    <div className="plans">
      {plans.map(({ name, features, price }) => (
        <div className="border" key={name}>
          <div className="container">
            <div className="label">{name}</div>
            <div className="content">
              <ul>
                {features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <span className="price">{price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <style jsx>{`
      section {
        align-items: center;
        position: relative;
      }

      h2 {
        margin: 0 0 2rem 0;
      }

      .plans {
        display: flex;
      }

      .label {
        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 2.5rem;
        color: var(--white);
        background-color: var(--black);
        transition: background-color 50ms, color 50ms, border-color 50ms;
        border-bottom: 8px solid var(--black);
      }

      .container {
        background: var(--white);
        border: 7px solid var(--black);
        color: var(--black);
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 16rem;
        max-width: 12rem;
        width: 100%;
        transition: transform 500ms, border-color 100ms;
        cursor: pointer;
      }

      .container:hover {
        transform: translateY(-1.6rem);
        border-color: var(--secondary) !important;
      }

      .container:hover .label {
        background-color: var(--secondary) !important;
        color: var(--black) !important;
        border-color: var(--secondary) !important;
      }

      .border:last-child .container {
        border-color: var(--black);
      }

      .border:last-child .label {
        border-color: var(--black);
        background-color: var(--black);
      }

      .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        padding: 0.2rem;
        justify-content: space-between;
      }

      .border {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 3;
        height: 18rem;
        width: 14.5rem;
        margin: 4rem 2rem;
        background: var(--white);
        border-radius: 8px;
      }

      .price {
        font-weight: 700;
        padding: 0.5rem;
      }

      .bg {
        position: absolute;
        z-index: 0;
        height: 30rem;
        background: linear-gradient(
          173deg,
          transparent calc(50% - 1px),
          rgb(0, 0, 0) 50%
        );
        width: 100vw;
        bottom: 0;
      }

      ul {
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

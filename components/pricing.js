const plans = [
  {
    name: 'Developer',
    features: ['Up to 25 devices', 'Single user'],
    price: 'Free'
  },
  {
    name: 'Team',
    features: ['50 devices', '3 seats'],
    price: '$250/month base'
  },
  {
    name: 'Enterprise',
    features: ['Unlimited seats', 'Dedicated support', 'Custom solutions'],
    price: 'Custom pricing'
  }
];

const Pricing = ({}) => (
  <div className="pricing">
    <div className="bg" />

    <section>
      <h2>Flexible pricing</h2>

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
              </div>

              <span className="price">{price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    <style jsx>{`
      section {
        align-items: center;
      }
      h2 {
        margin: 0 0 1rem 0;
      }
      .plans {
        display: flex;
      }
      .label {
        font-weight: 500;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 2.5rem;
        color: var(--white);
        font-size: 1.25rem;
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
        height: 16rem;
        width: 11rem;
        transition: transform 400ms, border-color 100ms;
      }
      .container:hover {
        transform: translateY(-1.4rem);
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
      .pricing {
        position: relative;
      }
      .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
      }
      .border {
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 3;
        height: 18rem;
        width: 13.5rem;
        margin: 4rem 2rem;
        background: var(--white);
        border-radius: 8px;
      }
      .price {
        font-weight: 700;
        padding: 1rem 0.25rem 0.5rem 0.25rem;
        text-align: center;
        margin: 0 auto;
      }
      .bg {
        position: absolute;
        z-index: 0;
        left: 0;
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
        padding: 0 1rem;
        align-items: center;
      }
      li {
        display: flex;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
      }
      li:not(:last-child) {
        margin-bottom: 1rem;
      }
      .tablet {
        display: none;
      }
      @media screen and (max-width: 900px) {
        .content {
          padding: 0;
        }
        .container {
          width: 9.5rem;
        }
        .border {
          width: 12rem;
          margin: 4rem 1.5rem;
        }
      }
      @media screen and (max-width: 700px) {
        .bg {
          height: 24rem;
        }
        .container {
          height: 14rem;
        }
        .border {
          margin: 2rem 0;
          border-radius: 0;
          height: 15.5rem;
        }
        .border:first-child {
          border-bottom-left-radius: 4px;
        }
        .border:last-child {
          border-bottom-right-radius: 4px;
        }
      }
      @media screen and (max-width: 600px) {
        h2 {
          margin: 0 0 3rem 0;
        }

        .plans {
          flex-direction: column;
        }

        .border {
          height: auto;
          margin: 1rem 0;
          width: 12.5rem;
          border-radius: 0;
        }

        .container {
          height: auto;
          width: 10rem;
          transform: unset !important;
        }

        .border:last-child {
          height: 16rem;
          border-bottom-right-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        .border:last-child .container {
          height: 14rem;
        }

        .bg {
          height: 25rem;
          background: linear-gradient(
            150deg,
            transparent calc(50% - 1px),
            rgb(0, 0, 0) 50%
          );
        }
      }
    `}</style>
  </div>
);

export default Pricing;

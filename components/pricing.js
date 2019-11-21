const plans = [
  {
    name: 'Developer',
    features: ['Up to 25 devices', 'Single user'],
    price: 'Free',
    icon: '/developer.svg'
  },
  {
    name: 'Team',
    features: ['50 devices', '3 seats'],
    price: '$250/month base',
    icon: '/team.svg'
  },
  {
    name: 'Enterprise',
    features: ['Unlimited seats', 'Dedicated support', 'Custom solutions'],
    price: 'Custom pricing',
    icon: '/enterprise.svg'
  }
];

const Pricing = ({}) => (
  <div className="pricing">
    <div className="bg" />

    <section>
      <h2>Flexible plans that scale</h2>

      <div className="plans">
        {plans.map(({ name, features, price, icon = '/enterprise.svg' }) => (
          <div className="border" key={name}>
            <div className="container">
              <div className="top">
                {/* <img src={icon} /> */}
                <span className="title">{name}</span>
              </div>

              <div className="content">
                <ul>
                  {features.map(feature => (
                    <li key={feature}>
                      <div className="check">
                        <img src="/check.svg" />
                      </div>
                      <span>{feature}</span>
                    </li>
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
      .top {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0;
      }
      .top img {
        height: 1.5rem;
      }
      .title {
        font-size: 22px;
        font-weight: 500;
        text-align: center;
        color: var(--white);
      }
      .container {
        background: #000;
        color: rgba(255, 255, 255, 0.9);
        border-radius: 8px;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        height: 16rem;
        width: 12rem;
        transition: transform 300ms;
      }
      .container:hover {
        color: var(--primary);
        transform: translateY(-1.2rem);
      }
      .container:hover .title {
        color: var(--primary);
      }
      .container:hover .check {
        background-color: var(--white);
      }
      .container:hover .price {
        color: var(--primary);
        border-color: var(--primary);
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
        width: 15rem;
        margin: 4rem 2rem;
        background: var(--white);
        border-radius: 8px;
      }
      .price {
        padding: 0.5rem 0.25rem;
        text-align: center;
        border: 1px solid var(--white);
        border-radius: 4px;
        margin: 0.5rem;
        font-weight: 500;
        transition: border-color 200ms;
      }
      .bg {
        position: absolute;
        z-index: 0;
        left: 0;
        height: 30rem;
        background: linear-gradient(
          173deg,
          transparent calc(50% - 1px),
          #000 50%
        );
        width: 100vw;
        bottom: 0;
      }
      ul {
        display: flex;
        flex-direction: column;
        padding: 0 0.5rem;
      }
      li {
        display: flex;
      }
      li:not(:last-child) {
        margin-bottom: 1rem;
      }
      .check img {
        width: 20px;
        height: 20px;
      }
      .check {
        flex: 0 0 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);
        border-radius: 50%;
        height: 22px;
        margin-right: 0.5rem;
        transition: background-color 200ms;
      }
      .tablet {
        display: none;
      }
      @media screen and (max-width: 900px) {
        .content {
          padding: 0;
        }
        .container {
          width: 10rem;
          height: 17.5rem;
        }
        .border {
          width: 12.5rem;
          height: 19rem;
          margin: 4rem 1.25rem;
        }
      }
      @media screen and (max-width: 700px) {
        .border {
          margin: 2rem 0;
          border-radius: 0;
        }
        .border:first-child {
          border-bottom-left-radius: var(--radius);
        }
        .border:last-child {
          border-bottom-right-radius: var(--radius);
        }
        .bg {
          height: 28rem;
          background: linear-gradient(
            165deg,
            transparent calc(50% - 1px),
            #000 50%
          );
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
          margin: 0 0 2rem 0;
          width: 15.5rem;
          border-radius: 0;
        }
        .border:last-child {
          margin: 0;
        }
        .container {
          height: auto;
          width: 13rem;
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
            #000 50%
          );
        }
      }
    `}</style>
  </div>
);

export default Pricing;

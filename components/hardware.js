const Hardware = ({}) => (
  <section>
    <h2>Support for a variety of hardware</h2>

    <div className="row">
      <div className="container">
        <img src="/single-board-computer.svg" height={110} />
        <span>Single-board computers</span>
      </div>

      <div className="container">
        <img src="/servers.svg" height={110} />
        <span>Edge servers</span>
      </div>

      <div className="container">
        <img src="/iot-gateway.svg" height={120} />
        <span>IoT gateways</span>
      </div>
    </div>

    <style jsx>{`
      section {
        align-items: center;
      }

      .row {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        align-self: stretch;
        margin: 3rem 0 0 0;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 3.25rem;
        position: relative;
        width: 100%;
        max-width: 14rem;
        justify-content: space-between;
      }

      span {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.85rem;
        text-align: center;
        margin-top: 1.5rem;
        height: 2rem;
      }

      @media screen and (max-width: 700px) {
        .container {
          margin: 0 2rem;
        }
      }

      @media screen and (max-width: 600px) {
        .row {
          flex-direction: column;
          justify-content: unset;
          align-items: center;
        }
        .container {
          margin: 0;
        }
        span {
          bottom: -2rem;
        }
        .container:not(:last-child) {
          margin-bottom: 3rem;
        }
      }
    `}</style>
  </section>
);

export default Hardware;

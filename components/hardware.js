const Hardware = ({}) => (
  <section>
    <h2>Support for a variety of hardware</h2>

    <div className="row">
      <div className="container">
        <img src="/single-board-computer.svg" height={100} />
        <span>Single-board computers</span>
      </div>

      <div className="container">
        <img src="/servers.svg" height={100} />
        <span>Edge servers</span>
      </div>

      <div className="container">
        <img src="/iot-gateway.svg" height={100} />
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
        margin: 3rem 0 0 0;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 3rem;
      }

      span {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.85rem;
        margin-top: 0.5rem;
      }
    `}</style>
  </section>
);

export default Hardware;

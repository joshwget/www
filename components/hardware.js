const Hardware = ({}) => (
  <section>
    <h2>Support for a variety of hardware</h2>

    <div className="row">
      <div className="group">
        <div className="container">
          <img
            src="/single-board-computer.svg"
            height={90}
            alt="Single-board computer"
          />
          <span>Single-board computers</span>
        </div>

        <div className="container">
          <img src="/iot-gateway.svg" height={100} alt="IoT gateways" />
          <span>IoT gateways</span>
        </div>
      </div>

      <div className="group">
        <div className="container">
          <img src="/servers.svg" height={90} alt="Edge servers" />
          <span>Edge servers</span>
        </div>

        <div className="container">
          <img src="/drones.svg" height={140} alt="Drones" />
          <span>Drones</span>
        </div>
      </div>
    </div>

    <style jsx>{`
      section {
        align-items: center;
        padding-top: 2rem;
      }

      .row {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        align-self: stretch;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 3rem;
        position: relative;
        justify-content: space-between;
      }

      span {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.85rem;
        text-align: center;
        margin-top: 1rem;
        height: 2rem;
      }

      .group {
        display: flex;
        align-items: baseline;
      }

      @media screen and (max-width: 850px) {
        .row {
          flex-direction: column;
          justify-content: unset;
          align-items: center;
        }
        .group {
          justify-content: center;
        }
        .group:last-child {
          margin-top: 3rem;
        }
        .container {
          flex: 0 0 12rem;
        }
      }
      @media screen and (max-width: 600px) {
        .container {
          margin: 0 2rem;
        }
      }
      @media screen and (max-width: 480px) {
        section {
          padding-top: 6rem;
        }
        .group {
          flex-direction: column;
          align-items: center;
          justify-content: unset;
          margin: 0 !important;
        }
        .container {
          flex: unset;
          margin: 1.5rem 0;
        }
      }
    `}</style>
  </section>
);

export default Hardware;

const UseCases = () => (
  <section>
    <h2>Ready for any industry</h2>

    <div className="desktop row">
      <div className="group">
        <div className="container">
          <img src="/consumer.svg" height={120} />
          <span>Consumer</span>
        </div>

        <div className="container">
          <img src="/robotics.svg" height={140} />
          <span>Robotics</span>
        </div>
        <div className="container">
          <img src="/machine-learning.svg" height={100} />
          <span>Machine Learning</span>
        </div>
      </div>

      <div className="group">
        <div className="container">
          <img src="/medicine.svg" height={110} />
          <span>Medicine</span>
        </div>

        <div className="container">
          <img src="/industrial.svg" height={140} />
          <span>Industrial</span>
        </div>
      </div>
    </div>

    <div className="tablet">
      <div className="group">
        <div className="container">
          <img src="/consumer.svg" height={120} />
          <span>Consumer</span>
        </div>

        <div className="container">
          <img src="/robotics.svg" height={140} />
          <span>Robotics</span>
        </div>
      </div>

      <div className="group">
        <div className="container">
          <img src="/medicine.svg" height={110} />
          <span>Medical</span>
        </div>

        <div className="container">
          <img src="/machine-learning.svg" height={100} />
          <span>Machine Learning</span>
        </div>
      </div>

      <div className="container">
        <img src="/industrial.svg" height={140} />
        <span>Industrial</span>
      </div>
    </div>

    <style jsx>{`
      section {
        color: white;
      }
      span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        margin-top: 1rem;
        text-align: center;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 3rem;
      }
      .row {
        display: flex;
        align-items: baseline;
        justify-content: center;
      }
      .group {
        display: flex;
        align-items: baseline;
      }
      .tablet {
        display: none;
      }

      @media screen and (max-width: 1200px) {
        .row {
          flex-direction: column;
          align-items: center;
        }
        .group:last-child {
          margin-top: 3rem;
        }
      }
      @media screen and (max-width: 700px) {
        .desktop {
          display: none;
        }
        .tablet {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .group {
          justify-content: center;
        }
        .group:not(:last-child) {
          margin-bottom: 3rem;
        }
        .container {
          flex: 0 0 12rem;
          justify-content: center;
        }
      }
      @media screen and (max-width: 480px) {
        .group {
          flex-direction: column;
          align-items: center;
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

export default UseCases;

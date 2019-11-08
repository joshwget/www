const UseCases = ({}) => (
  <section>
    <h2>The best choice for any industry</h2>

    <div className="row">
      <div className="container">
        <img src="/medicine.svg" height={120} />
        <span>Medicine</span>
      </div>

      <div className="container">
        <img src="/medicine.svg" height={120} />
        <span>Medicine</span>
      </div>

      <div className="container">
        <img src="/robotics.svg" height={120} />
        <span>Robotics</span>
      </div>

      <div className="container">
        <img src="/medicine.svg" height={100} />
        <span>Medicine</span>
      </div>

      <div className="container">
        <img src="/medicine.svg" height={120} />
        <span>Medicine</span>
      </div>
    </div>

    <style jsx>{`
      section {
        align-items: center;
      }

      span {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        margin-top: 0.5rem;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 3rem;
      }

      .row {
        margin: 2rem 0 0 0;
        display: flex;
        align-items: flex-end;
      }
    `}</style>
  </section>
);

export default UseCases;

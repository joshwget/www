const UseCases = ({}) => (
  <section>
    <h2>in any industry</h2>

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
        <img src="/robotics.svg" height={140} />
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
      }

      span {
        //text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        margin-top: 0.5rem;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 5rem;
      }

      .row {
        margin: 3rem 0 0 0;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }
    `}</style>
  </section>
);

export default UseCases;

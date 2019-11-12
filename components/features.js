const content = [
  {
    title: 'Advanced deployment functionality',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    title: 'SSH access',
    body: `Access your device via SSH even when not on the same network.
    Flexible policies allow you enable and and disable this feature
    from the device for security reasons.`
  },
  {
    title: 'Monitoring',
    body: `Seamlessly collect host and application metrics from your
    devices without the need for additional agents. Integrates
    with popular monitoring tools including Datadog and Prometheus.`
  },
  {
    title: 'Logging',
    body: `Logs are most useful when not siloed to the originating device.
    Deviceplane gathers logs from your devices, stores them, and
    then optionally forwards them to your preferred logging tool.`
  },
  {
    title: 'Access control',
    body: `Fine-grained roles and policies allow you to control exactly
    how your devices should be accessed.`
  },
  {
    title: 'Robust API',
    body: `All of the functionality in Deviceplane is exposed by an easy
    to use API making it simple to programmatically interact with
    your devices.`
  }
];

const Features = () => (
  <section>
    <h2>Powerful features</h2>

    <div className="desktop">
      <div className="row">
        {content.slice(0, 3).map(({ title, body }) => (
          <div className="container" key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <div className="row">
        {content.slice(3, 6).map(({ title, body }) => (
          <div className="container" key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="tablet">
      <div className="row">
        {content.slice(0, 2).map(({ title, body }) => (
          <div className="container" key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <div className="row">
        {content.slice(2, 4).map(({ title, body }) => (
          <div className="container" key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <div className="row">
        {content.slice(4, 6).map(({ title, body }) => (
          <div className="container" key={title}>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      section {
        align-items: center;
        padding: 1rem;
      }

      h2 {
        margin: 0 0 1rem 0;
      }

      .container {
        display: flex;
        flex-direction: column;
        max-width: 18rem;
        margin: 2rem;
      }

      .row {
        display: flex;
      }

      .tablet {
        display: none;
      }

      @media screen and (max-width: 960px) {
        .desktop {
          display: none;
        }
        .tablet {
          display: block;
        }
      }

      @media screen and (max-width: 480px) {
        .desktop {
          display: block;
        }
        .row {
          flex-direction: column;
        }
        .container {
          margin: 1rem;
        }
        .tablet {
          display: none;
        }
      }
    `}</style>
  </section>
);

export default Features;

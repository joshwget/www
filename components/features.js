const Features = ({}) => (
  <section id="features">
    <h2>Powerful features</h2>

    <div className="row">
      <div className="container">
        <h4>Remote updates</h4>
        <p>
          Deploy reliably and with confidence. We make it easy to gradually
          ship updates, test new versions on a subset of your devices,
          and rollback when things don't go as expected.
        </p>
      </div>

      <div className="container">
        <h4>SSH access</h4>
        <p>
          Access your device via SSH even when not on the same network.
          Flexible policies allow you enable and and disable this feature
          from the device for security reasons.
        </p>
      </div>

      <div className="container">
        <h4>Monitoring</h4>
        <p>
          Seamlessly collect host and application metrics from your
          devices without the need for additional agents. Integrates
          with popular monitoring tools including Datadog and Prometheus.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="container">
        <h4>Logging</h4>
        <p>
          Logs are most useful when not siloed to their originating device.
          We gather logs from your devices, store them, and
          then optionally forward them to your preferred logging tool.
        </p>
      </div>

      <div className="container">
        <h4>Access control</h4>
        <p>
          Fine-grained roles and policies allow you to control exactly
          how your devices should be accessed.
        </p>
      </div>

      <div className="container">
        <h4>Developer API</h4>
        <p>
          All of our functionality is exposed by an easy to use API
          making it simple to programmatically interact with your
          devices.
        </p>
      </div>
    </div>
    <style jsx>{`
      section {
        align-items: center;
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
    `}</style>
  </section>
);

export default Features;

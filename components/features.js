import styled from 'styled-components';

import { Section, Heading, Row, Column, Paragraph, Icon } from './core';

const content = [
  {
    title: 'Remote updates',
    body: `Deploy reliably and with confidence. We make it easy to gradually
    ship updates, test new versions on a subset of your devices,
    and rollback when things don't go as expected.`,
    icon: 'automatic-updates'
  },
  {
    title: 'SSH access',
    body: `Access your device via SSH even when it's not on the same network.
    Flexible policies allow you to enable and disable this feature
    from the device for security reasons.`,
    icon: 'console'
  },
  {
    title: 'Monitoring',
    body: `Seamlessly collect host and application metrics from your
    devices without the need for additional agents. Integrate
    with popular monitoring tools including Datadog and Prometheus.`,
    icon: 'pulse'
  },
  {
    title: 'Logging',
    body: `Gather logs from your devices, store them, and
    then optionally forward them to your preferred logging tool.`,
    icon: 'document-share'
  },
  {
    title: 'Access control',
    body: `Fine-grained roles and policies allow you to control exactly
    how your devices should be accessed.`,
    icon: 'key'
  },
  {
    title: 'Developer API',
    body: `All of our functionality is exposed by an easy to use API
    making it simple to programmatically interact with your
    devices.`,
    icon: 'code'
  }
];

const Container = ({ title, body, icon }) => (
  <Column maxWidth={12} margin={6}>
    <Icon color="primary" size={24} icon={icon} marginBottom={4} />

    <Heading variant="tertiary">{title}</Heading>
    <Paragraph>{body}</Paragraph>
  </Column>
);

const Features = () => (
  <Column flex={1} bg="black" alignSelf="stretch" alignItems="center">
    <Section alignItems="center">
      <Heading variant="secondary">Powerful features</Heading>

      <Row
        marginTop={[0, 0, 6]}
        justifyContent="space-between"
        alignItems={['center', 'center', 'initial']}
        alignSelf="stretch"
        flexDirection={['column', 'column', 'row']}
      >
        {content.slice(0, 2).map(p => (
          <Container {...p} key={p.title} />
        ))}
      </Row>

      <Row
        marginY={[0, 0, 6]}
        justifyContent="space-between"
        alignSelf="stretch"
        alignItems={['center', 'center', 'initial']}
        flexDirection={['column', 'column', 'row']}
      >
        {content.slice(2, 4).map(p => (
          <Container {...p} key={p.title} />
        ))}
      </Row>

      <Row
        justifyContent="space-between"
        alignSelf="stretch"
        alignItems={['center', 'center', 'initial']}
        flexDirection={['column', 'column', 'row']}
      >
        {content.slice(4, 6).map(p => (
          <Container {...p} key={p.title} />
        ))}
      </Row>
    </Section>
    <style jsx>{`
      .desktop {
        display: flex;
        flex-direction: column;
        align-self: stretch;
        flex: 1;
      }

      .row > :global(.container):not(:last-child) {
        margin-right: 4rem;
      }

      .row {
        display: flex;
        flex: 1;
        justify-content: space-between;
      }

      .row:not(:last-child) {
        margin-bottom: 3rem;
      }

      .tablet {
        display: none;
      }

      @media screen and (max-width: 900px) {
        .desktop {
          display: none;
        }
        .tablet {
          display: block;
        }
      }

      @media screen and (max-width: 480px) {
        section {
          padding: 3rem 1rem 2rem 1rem;
        }
        .desktop {
          display: block;
        }
        .row {
          flex-direction: column;
          margin: 0 !important;
        }
        .tablet {
          display: none;
        }
      }
    `}</style>
  </Column>
);

export default Features;

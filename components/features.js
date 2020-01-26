import { useEffect, useState } from 'react';
import Tilt from 'react-tilt';

import theme from '../theme';
import {
  Box,
  Section,
  Heading,
  Row,
  Column,
  Grid,
  Paragraph,
  Icon,
  Text
} from './core';

const content = [
  {
    title: 'Remote Updates',
    body: `Deploy reliably and with confidence. Gradually
    ship updates, test new versions on a subset of devices,
    and rollback when things don't go as expected.`,
    icon: 'automatic-updates'
  },
  {
    title: 'SSH Access',
    body: `Access a device via SSH even when it's not on the same network.
    Flexible policies allow you to enable and disable this feature
    from the device for security reasons.`,
    icon: 'console'
  },
  {
    title: 'Monitoring',
    body: `Collect host and application metrics from your
    devices without additional agents. Integrate
    with tools like Datadog and Prometheus.`,
    icon: 'pulse'
  },
  {
    title: 'Logging',
    body: `Gather logs from your devices, store them, and
    then optionally forward them to your preferred logging tool.`,
    icon: 'document-share'
  },
  {
    title: 'Access Control',
    body: `Fine-grained roles and policies allow you to control exactly
    how your devices should be accessed.`,
    icon: 'key'
  },
  {
    title: 'Developer API',
    body: `All functionality is exposed by an easy to use API
    that makes it simple to programmatically interact with your
    devices.`,
    icon: 'wrench'
  }
];

const Feature = ({ title, body, icon }) => (
  <Tilt
    options={{ scale: 1.03, speed: 1000, max: 15, perspective: 1500 }}
    style={{
      padding: '32px',
      border: `3px solid ${theme.colors.primary}`,
      borderRadius: '4px',
      background: theme.colors.pageBackground,
      maxWidth: '452px'
    }}
  >
    <Column>
      <Icon color="primary" size={24} icon={icon} marginBottom={4} />

      <Heading variant="tertiary" fontSize="20px">
        {title}
      </Heading>
      <Paragraph marginBottom={0}>{body}</Paragraph>
    </Column>
  </Tilt>
);

const Features = () => {
  return (
    <Section alignItems="center">
      <Row
        alignItems="flex-start"
        justifyContent="space-between"
        alignSelf="stretch"
      >
        <Heading position="sticky" top="40%" variant="secondary">
          Powerful features
        </Heading>

        <Grid gridGap={8} gridTemplateColumns="1fr 1fr">
          {content.map((props, i) => (
            <Feature {...props} key={props.title} />
          ))}
        </Grid>
      </Row>
    </Section>
  );
};

export default Features;

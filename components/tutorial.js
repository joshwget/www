import styled from 'styled-components';

import { Section, Heading, Row, Button, Text } from './core';

const content = [
  {
    title: 'Register',
    body: `Register devices with a single command. Our agent is under 10MB,
    consumes minimal resources, and runs as a container. We support any device
    running Linux regardless of distribution, architecture, and hardware.`
  },
  {
    title: 'Deploy',
    body: `Package your applications as containers and then let us deploy
    and manage those containers to your devices. Start with manual
    deployments through the web console or CLI and then progress to setting
    up automated git-based deployment workflows.`
  },
  {
    title: 'Monitor',
    body: `Instrument your applications to expose the metrics most critical for
    your business. We then handle metric collection, enrichment, and
    propagation to the metrics tooling of your choice. From there setup
    dashboards, visualizations, and alerts to make sure your devices and
    applications are operating as expected.`
  },
  {
    title: 'Access',
    body: `Directly access your devices via SSH when required. Run one-off
    or recurring scripts on one device or a group of devices.`
  }
];

const Tab = styled(Button)`
  border: none;
  padding: 10px 14px;
  cursor: ${props => (props.selected ? 'default' : 'pointer')};
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none !important;
  box-shadow: none !important;
  border-color: none !important;
  width: 100px !important;

  color: ${props =>
    props.selected ? props.theme.colors.primary : props.theme.colors.white};
  background-color: ${props =>
    props.selected ? props.theme.colors.black : props.theme.colors.grays[2]};
  &:focus,
  &:hover {
    color: ${props =>
      props.selected
        ? props.theme.colors.primary
        : props.theme.colors.pureWhite} !important;
    background-color: ${props =>
      props.selected
        ? props.theme.colors.black
        : props.theme.colors.grays[0]} !important;
  }
`;

const Tutorial = () => {
  const [selection, setSelection] = React.useState(0);

  return (
    <Section height={['initial', '430px']} paddingX={6}>
      <Heading variant="secondary" textAlign="center">
        How it works
      </Heading>

      <Row marginTop={6} flexDirection={['column', 'row']}>
        <Row marginBottom={[4, 0]}>
          {content.slice(0, 2).map(({ title }, i) => (
            <Tab
              title={title}
              selected={i === selection}
              onClick={() => setSelection(i)}
              marginX={[2, 4]}
            />
          ))}
        </Row>

        <Row>
          {content.slice(2, 4).map(({ title }, i) => (
            <Tab
              title={title}
              selected={i + 2 === selection}
              onClick={() => setSelection(i + 2)}
              marginX={[2, 4]}
            />
          ))}
        </Row>
      </Row>

      <Row
        bg="black"
        borderRadius={2}
        padding={6}
        marginTop={4}
        maxWidth={13}
        border={0}
      >
        <Text>{content[selection].body}</Text>
      </Row>
    </Section>
  );
};

export default Tutorial;

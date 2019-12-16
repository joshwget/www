import styled from 'styled-components';

import { Section, Heading, Row, Column, Text } from './core';

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

const Tab = styled.button`
  appearance: none;
  border: none;
  outline: none;
  user-select: none;
  border-radius: 4px;
  transition: background-color 150ms;
  border-radius: 4px;
  padding: 10px 14px;
  cursor: ${props => (props.selected ? 'default' : 'pointer')};
  text-transform: uppercase;
  white-space: nowrap;

  &:not(:last-child) {
    margin-right: 18px;
  }
  text-decoration: none !important;

  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights[3]};
  color: ${props =>
    props.selected ? props.theme.colors.primary : props.theme.colors.white};
  background-color: ${props =>
    props.selected ? props.theme.colors.black : 'transparent'};
  &:hover {
    background-color: ${props =>
      props.selected ? props.theme.colors.black : props.theme.colors.grays[2]};
  }
`;

const Tutorial = () => {
  const [selection, setSelection] = React.useState(0);

  return (
    <Section height="540px">
      <Heading variant="secondary">How it works</Heading>

      <Row marginTop={9}>
        {content.map(({ title }, i) => (
          <Tab selected={i === selection} onClick={() => setSelection(i)}>
            {title}
          </Tab>
        ))}
      </Row>

      {/* <Row>
        <Row>
          {content.slice(0, 2).map(({ title }, i) => (
            <Tab
              className={i === selection ? 'selected' : ''}
              onClick={() => setSelection(i)}
            >
              {title}
            </Tab>
          ))}
        </Row>

        <Row>
          {content.slice(2, 4).map(({ title }, i) => (
            <Tab
              className={i + 2 === selection ? 'selected' : ''}
              onClick={() => setSelection(i + 2)}
            >
              {title}
            </Tab>
          ))}
        </Row>
      </Row> */}

      <Row
        bg="black"
        borderRadius={2}
        padding={8}
        marginTop={4}
        maxWidth={13}
        border={0}
      >
        <Text>{content[selection].body}</Text>
      </Row>

      <style jsx>{`
        section {
          color: var(--white);
          align-items: center;
          min-height: 21rem;
        }

        h4 {
          transition: color 100ms;
          color: var(--primary);
        }

        .container {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          padding: 2rem;
          margin: 0 2rem;
          background: #000;
          border: 1px solid var(--primary);
          max-width: 25rem;
        }
        .tablet {
          display: none;
        }

        @media screen and (max-width: 700px) {
          .tutorial {
            min-height: unset;
          }
          .tablet {
            display: flex;
          }
          .desktop {
            display: none;
          }
          .buttons {
            flex-direction: column;
            align-items: center;
            justify-content: unset;
          }
          .group {
            margin-bottom: 2rem;
          }
          .group:last-child {
            margin-bottom: 1rem;
          }
          button {
            margin: 0 1rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Tutorial;

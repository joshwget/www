import styled from 'styled-components';

import { Row, Column, Text, Section, Heading, Image } from './core';

const hardware = [
  {
    src: '/use-cases/single-board-computer.svg',
    label: 'Single-board Computers'
  },
  {
    src: '/use-cases/iot-gateway.svg',
    label: 'IoT Gateways'
  },
  {
    src: '/use-cases/servers.svg',
    label: 'Edge Servers'
  },
  {
    src: '/use-cases/drones.svg',
    label: 'Drones'
  }
];

const industries = [
  {
    src: '/use-cases/machine-learning.svg',
    label: 'Machine Learning'
  },
  {
    src: '/use-cases/consumer.svg',
    label: 'Consumer'
  },
  {
    src: '/use-cases/medical.svg',
    label: 'Medical'
  },
  {
    src: '/use-cases/robotics.svg',
    label: 'Robotics'
  },
  {
    src: '/use-cases/industrial.svg',
    label: 'Industrial'
  }
];

const Label = styled(Text)`
  text-transform: uppercase;
`;
Label.defaultProps = {
  fontWeight: 2,
  fontSize: 1,
  marginTop: 4,
  textAlign: 'center'
};

const Container = ({ src, label }) => (
  <Column width="150px">
    <Image src={src} height={80} alt={label} />
    <Label>{label}</Label>
  </Column>
);

const UseCases = () => (
  <Section paddingX={6}>
    <Row
      alignItems="center"
      marginBottom="80px"
      justifyContent="space-between"
      alignSelf="stretch"
    >
      <Row>
        <Column marginRight={9}>
          {hardware.slice(0, 2).map(props => (
            <Container {...props} />
          ))}
        </Column>
        <Column>
          {hardware.slice(2, 4).map(props => (
            <Container {...props} />
          ))}
        </Column>
      </Row>

      <Heading variant="secondary" maxWidth="500px">
        Support for a variety of hardware
      </Heading>
    </Row>
    <Row alignItems="center" justifyContent="space-between" alignSelf="stretch">
      <Heading variant="secondary" maxWidth="500px">
        Ready for any industry
      </Heading>
      <Column marginTop={4}>
        <Row>
          {industries.slice(0, 3).map(props => (
            <Container {...props} />
          ))}
        </Row>
        <Row alignItems="flex-end">
          {industries.slice(3, 5).map(props => (
            <Container {...props} />
          ))}
        </Row>
      </Column>
    </Row>
  </Section>
);

export default UseCases;

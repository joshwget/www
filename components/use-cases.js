import styled, { css } from 'styled-components';

import { Row, Column, Text, Section, Heading, Image } from './core';

const hardware = [
  {
    src: '/use-cases/single-board-computer.svg',
    label: 'Single-board Computers'
  },
  {
    src: '/use-cases/iot-gateway.svg',
    label: 'IoT Gateways',
    height: 110
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
  // {
  //   src: '/use-cases/machine-learning.svg',
  //   label: 'Machine Learning'
  // },
  {
    src: '/use-cases/consumer.svg',
    label: 'Consumer',
    height: 110
  },
  {
    src: '/use-cases/robotics.svg',
    label: 'Robotics',
    height: 120
  },
  {
    src: '/use-cases/industrial.svg',
    label: 'Manufacturing',
    height: 120
  },
  {
    src: '/use-cases/medical.svg',
    label: 'Medical'
  }
];

const Label = styled(Text)`
  text-transform: uppercase;
`;
Label.defaultProps = {
  fontWeight: 2,
  fontSize: 2,
  marginTop: 4,
  textAlign: 'center'
};

const Container = ({ src, label, height = 80 }) => (
  <Column
    height={['initial', '160px']}
    width="200px"
    justifyContent="flex-end"
    marginY={6}
  >
    <Image src={src} height={height} alt={label} />
    <Label>{label}</Label>
  </Column>
);

const UseCases = () => (
  <>
    <Section paddingX={6}>
      <Row
        alignItems="center"
        justifyContent="space-between"
        alignSelf="stretch"
        flexDirection={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row'
        ]}
      >
        <Row marginRight={[0, 0, 0, 6]} flexDirection={['column', 'row']}>
          <Column marginRight={[0, 9]}>
            {hardware.slice(0, 2).map(props => (
              <Container key={props.label} {...props} />
            ))}
          </Column>
          <Column>
            {hardware.slice(2, 4).map(props => (
              <Container key={props.label} {...props} />
            ))}
          </Column>
        </Row>

        <Heading
          variant="secondary"
          textAlign="center"
          marginLeft={[0, 0, 0, 9]}
          marginBottom={[4, 4, 4, 0]}
        >
          Support for a variety of hardware
        </Heading>
      </Row>
    </Section>
    <Section paddingX={6} paddingTop={[8, 8, 8, 0]}>
      <Row
        alignItems="center"
        justifyContent="space-between"
        alignSelf="stretch"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Heading
          variant="secondary"
          textAlign="center"
          marginRight={[0, 0, 0, 9]}
          marginBottom={[4, 4, 4, 0]}
        >
          Ready for any use case
        </Heading>
        <Row flexDirection={['column', 'row']}>
          <Column marginRight={[0, 9]}>
            {industries.slice(0, 2).map(props => (
              <Container key={props.label} {...props} />
            ))}
          </Column>
          <Column alignItems="flex-end">
            {industries.slice(2, 4).map(props => (
              <Container key={props.label} {...props} />
            ))}
          </Column>
        </Row>
      </Row>
    </Section>
  </>
);

export default UseCases;

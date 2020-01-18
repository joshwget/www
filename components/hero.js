import styled from 'styled-components';

import {
  Column,
  Row,
  Text,
  Input,
  Section,
  Button,
  Heading,
  Paragraph,
  Form,
  Image
} from './core';

const devices = [
  {
    src: '/use-cases/iot-gateway.svg',
    label: 'IoT Gateways',
    height: 110
  },
  {
    src: '/use-cases/servers.svg',
    label: 'Edge Servers',
    height: 80
  },
  {
    src: '/use-cases/robotics.svg',
    label: 'Robotics',
    height: 120
  },
  {
    src: '/use-cases/single-board-computer.svg',
    label: 'Single-board Computers'
  },
  {
    src: '/use-cases/drones.svg',
    label: 'Drones',
    height: 80
  },
  {
    src: '/use-cases/medical.svg',
    label: 'Medical Devices'
  }
];

const Device = ({ src, label, height = 90 }) => (
  <Column
    height={['initial', '160px']}
    width={['unset', '200px']}
    maxWidth="100%"
    justifyContent="flex-end"
    marginY={6}
    alignItems="center"
  >
    <Image src={src} alt={label} height={[height - 20, height]} />
    <Text
      textAlign="center"
      borderRadius={2}
      bg="white"
      paddingY={1}
      paddingX={2}
      fontSize={0}
      fontWeight={2}
      style={{ textTransform: 'uppercase' }}
      marginTop={4}
      color="black"
    >
      {label}
    </Text>
  </Column>
);

const Hero = ({ airtable }) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setEmail('');
    setSubmitted(true);

    airtable('Emails').create(
      [
        {
          fields: { Email: email }
        }
      ],
      function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.getId());
        });
      }
    );
  };

  return (
    <Section bg="black" position="relative" paddingTop={9} borderTop="none">
      <Heading
        paddingTop={[6, 0]}
        fontSize={['42px', '52px', '64px', '78px']}
        textAlign="center"
      >
        Manage your devices
        <br /> at the edge
      </Heading>

      <Paragraph
        maxWidth={['initial', '600px', '680px', '760px']}
        textAlign="center"
        fontSize={['16px', '16px', '18px', '20px']}
      >
        Deviceplane is a management tool for embedded systems and edge
        computing. We make it easy to securely update, monitor, and access your
        devices.
      </Paragraph>

      <Column alignSelf="stretch" marginTop={4} alignItems="center">
        {submitted ? (
          <Row paddingY={3}>
            <Text fontWeight={2} fontSize={1}>
              Thanks for your interest, we'll reach out as soon as we can.
            </Text>
          </Row>
        ) : (
          <Form onSubmit={handleSubmit} alignSelf="stretch" alignItems="center">
            <Row
              flexDirection={['column', 'row']}
              alignSelf="stretch"
              justifyContent="center"
            >
              <Input
                textAlign={['center', 'left']}
                width={['100%', '275px']}
                required
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Button
                title="Request a demo"
                marginTop={[2, 0]}
                marginLeft={[0, 2]}
              />
            </Row>
          </Form>
        )}
      </Column>

      <Row
        justifyContent="space-between"
        marginTop={9}
        display={['none', 'flex']}
        flexDirection={['column', 'column', 'column', 'column', 'row']}
      >
        <Row>
          {devices.slice(0, 3).map(props => (
            <Device key={props.label} {...props} />
          ))}
        </Row>
        <Row>
          {devices.slice(3, 6).map(props => (
            <Device key={props.label} {...props} />
          ))}
        </Row>
      </Row>

      <Column alignSelf="stretch" marginTop={9} display={['flex', 'none']}>
        {devices.map(props => (
          <Device key={props.label} {...props} />
        ))}
      </Column>
    </Section>
  );
};

export default Hero;

import {
  Grid,
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

const devices = pi => [
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
    label: pi ? `Raspberry Pi's` : 'Single-board Computers'
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
    justifyContent="flex-end"
    alignItems="center"
  >
    <Image src={src} alt={label} height={[height, height - 20, height]} />

    <Text
      textAlign="center"
      borderRadius={2}
      bg="pageBackground"
      paddingY={1}
      paddingX={2}
      fontSize={0}
      fontWeight={2}
      style={{ textTransform: 'uppercase' }}
      marginTop={4}
      color="white"
    >
      {label}
    </Text>
  </Column>
);

const Hero = ({ airtable, pi }) => {
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
        fontSize={['42px', '52px', '60px']}
        textAlign="center"
        maxWidth={['450px', '550px', '700px', '900px']}
      >
        {pi
          ? 'Securely access your Raspberry Pi'
          : 'Securely access remote devices and servers'}
      </Heading>

      <Paragraph
        maxWidth={['initial', '620px', '700px', '760px']}
        textAlign="center"
        fontSize={['16px', '16px', '18px', '20px']}
      >
        Deviceplane is the simplest way to access and manage{' '}
        {pi ? `your Raspberry Pi` : 'remote fleets'}.
      </Paragraph>

      <Column alignSelf="stretch" marginTop={4} alignItems="center">
        {submitted ? (
          <Row height="36px" alignItems="center">
            <Text fontWeight={3} fontSize={3} color="primary">
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

      <Grid
        marginTop={10}
        gridGap={[9, 2, 6, 8, 4]}
        gridTemplateColumns={[
          'repeat(1, 200px)',
          'repeat(3, 200px)',
          'repeat(3, 200px)',
          'repeat(3, 200px)',
          'repeat(6, 190px)'
        ]}
      >
        {devices(pi).map(props => (
          <Device key={props.label} {...props} />
        ))}
      </Grid>
    </Section>
  );
};

export default Hero;

import {
  Column,
  Row,
  Text,
  Input,
  Section,
  Button,
  Heading,
  Paragraph,
  Form
} from './core';

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
    <Column
      width="100%"
      paddingBottom={[0, '140px', '140px']}
      alignItems="center"
      position="relative"
      overflow="hidden"
    >
      <Row
        display={['none', 'flex']}
        justifyContent="center"
        position="absolute"
        left={[0, '-200px', '-340px']}
        top={-12}
        width="100%"
        height="100%"
      >
        <img src="/hero-bg.svg" />
      </Row>

      <Section
        alignItems={['center', 'initial']}
        position="relative"
        padding={6}
        paddingTop={[0, 6]}
        paddingBottom={[9, 6]}
        bg={['black', 'initial']}
      >
        <Column maxWidth={14}>
          <Heading
            maxWidth={['initial', '460px', '675px']}
            textAlign={['center', 'left']}
            paddingTop={[6, 0]}
          >
            Manage your devices at the edge
          </Heading>

          <Paragraph
            maxWidth={['initial', '460px']}
            textAlign={['center', 'left']}
            fontWeight={1}
          >
            Deviceplane handles the hard infrastructure problems around managing
            remote hardware. We make it easy to securely update, monitor, and
            access remote devices.
          </Paragraph>
        </Column>

        <Column maxWidth="455px" width="100%" marginTop={4}>
          <Column>
            {submitted ? (
              <Row paddingY={3}>
                <Text fontWeight={2} fontSize={1}>
                  Thanks for your interest, we'll reach out as soon as we can.
                </Text>
              </Row>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Row flexDirection={['column', 'row']}>
                  <Input
                    required
                    type="email"
                    placeholder="Email address"
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

          <Row flex={1} justifyContent={['center', 'initial', 'initial']}>
            <Button
              marginTop={6}
              title="Chat with us"
              variant="secondary"
              width={['100%', 'initial']}
              onClick={() => window.Intercom('show')}
            />
          </Row>
        </Column>
      </Section>
    </Column>
  );
};

export default Hero;

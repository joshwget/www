import styled from 'styled-components';

import {
  Column,
  Row,
  Input,
  Section,
  Button,
  Heading,
  Paragraph,
  Form
} from './core';

const Background = styled.img`
  position: absolute;
  top: -40px;
  right: -300px;
`;

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
      paddingBottom="200px"
      position="relative"
      overflow="hidden"
      alignItems="center"
    >
      <Background src="/bg.svg" />

      <Section alignItems="flex-start" position="relative" padding={6}>
        <Column maxWidth={14}>
          <Heading maxWidth="675px">Manage your devices at the edge</Heading>

          <Paragraph maxWidth="500px">
            Update, monitor, and access remote devices and servers with ease.
            Let us handle the hard infrastructure problems around managing
            remote hardware so you stay focused on your business.
          </Paragraph>
        </Column>

        <Column maxWidth="425px" width="100%">
          <Column>
            {/* <div>
              <span>
                Thanks for your interest, we'll reach out as soon as we can.
              </span>
            </div> */}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Input
                  required
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Button title="Request a demo" marginLeft={2} />
              </Row>
            </Form>
          </Column>

          <Row>
            <Button
              marginTop={4}
              title="Chat with us"
              variant="secondary"
              onClick={() => window.Intercom('show')}
            />
          </Row>
        </Column>
      </Section>
    </Column>
  );
};

export default Hero;

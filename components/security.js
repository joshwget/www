import { Row, Column, Heading, Section, Icon, Image, Paragraph } from './core';

const Security = () => (
  <Section>
    <Row
      justifyContent="space-between"
      alignSelf="stretch"
      alignItems={['center', 'center', 'center', 'unset']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Column>
        <Image src="/security.svg" width={300} />
      </Column>
      <Column
        marginTop={[6, 6, 6, 0]}
        alignItems={['center', 'center', 'center', 'unset']}
        justifyContent="center"
        maxWidth="500px"
      >
        <Heading
          variant="secondary"
          textAlign={['center', 'center', 'center', 'left']}
        >
          Security Focused
        </Heading>
        <Paragraph
          fontSize={3}
          textAlign={['center', 'center', 'center', 'left']}
        >
          We follow the best security practices across our systems. You will
          gain access to a variety of security features and controls that you
          didn't have before.
        </Paragraph>
      </Column>
    </Row>
  </Section>
);

export default Security;

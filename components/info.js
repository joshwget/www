import { Column, Row, Heading, Section, Icon, Paragraph } from './core';

const Info = () => (
  <Section>
    <Row
      justifyContent={['unset', 'unset', 'space-between']}
      alignItems={['center', 'center', 'unset']}
      alignSelf="stretch"
      flexDirection={['column', 'column', 'row']}
    >
      <Column
        maxWidth={13}
        marginRight={[0, 0, 10]}
        marginBottom={[10, 10, 0]}
        alignItems={['center', 'center', 'unset']}
      >
        <Icon icon="code" size={48} color="primary" marginBottom={2} />
        <Heading variant="secondary" textAlign={['center', 'center', 'left']}>
          Developer Focused
        </Heading>
        <Paragraph fontSize={3} textAlign={['center', 'center', 'left']}>
          Deploying to remote devices should be as easy as deploying to the
          cloud. We're building modern and accessible tooling so you can spend
          less time learning and more time shipping.
        </Paragraph>
      </Column>

      <Column maxWidth={13} alignItems={['center', 'center', 'unset']}>
        <Icon icon="lock" size={48} color="primary" marginBottom={2} />
        <Heading variant="secondary" textAlign={['center', 'center', 'left']}>
          Security Conscious
        </Heading>
        <Paragraph fontSize={3} textAlign={['center', 'center', 'left']}>
          We follow the best security practices across all of our systems. By
          using us, you'll gain access to a variety of security features and
          controls that you didn't have before.
        </Paragraph>
      </Column>
    </Row>
  </Section>
);

export default Info;

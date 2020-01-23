import { Column, Row, Heading, Section, Paragraph, Image, Link } from './core';

const Info = () => (
  <Section>
    <Row justifyContent="space-between" alignSelf="stretch" paddingBottom={11}>
      <Column alignItems="center" justifyContent="center" flex={1}>
        <Image height={64} width={64} src="/linux.svg" marginBottom={2} />
      </Column>
      <Column maxWidth="550px">
        <Heading variant="secondary">
          Support for any Linux distribution
        </Heading>
        <Paragraph fontSize={3}>
          We support any device running Linux regardless of distribution,
          architecture, or hardware. Our agent is a static binary that can be
          installed in a single command.
        </Paragraph>
      </Column>
    </Row>
  </Section>
);

export default Info;

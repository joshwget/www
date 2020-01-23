import {
  Column,
  Row,
  Heading,
  Section,
  Icon,
  Paragraph,
  Image,
  Link
} from './core';

const Info = () => (
  <Section bg="pageBackground" borderY={0}>
    <Row alignItems="space-between">
      <Column>
        <Image height={36} width={36} src="/github.svg" marginBottom={4} />
        <Heading variant="tertiary">Open Source</Heading>
        <Paragraph>
          Developer infrastructure is best when open source. Everything we build
          can be found on our{' '}
          <Link href="https://github.com/deviceplane/deviceplane">GitHub</Link>{' '}
          and is distributed under a permissive open source license.
        </Paragraph>
      </Column>

      <Column marginX={9}>
        <Icon icon="lock" size={36} color="primary" marginBottom={4} />
        <Heading variant="tertiary">Security Conscious</Heading>
        <Paragraph>
          We follow the best security practices across all of our systems. By
          using us, you'll gain access to a variety of security features and
          controls that you didn't have before.
        </Paragraph>
      </Column>

      <Column>
        <Icon icon="code" size={36} color="primary" marginBottom={4} />
        <Heading variant="tertiary">Developer Focused</Heading>
        <Paragraph>
          Deploying to remote devices should be as easy as deploying to the
          cloud. We're building modern and accessible tooling so you can spend
          less time learning and more time shipping.
        </Paragraph>
      </Column>
    </Row>
  </Section>
);

export default Info;

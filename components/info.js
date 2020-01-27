import {
  Grid,
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
  <Section bg="pageBackground" borderY={0} marginY={10}>
    <Grid
      gridGap={[8, 8, 8, 9, 11]}
      gridTemplateColumns={[
        'repeat(1, minmax(150px, 1fr))',
        'repeat(1, 500px)',
        'repeat(1, 500px)',
        'repeat(3, 300px)'
      ]}
    >
      <Column alignItems={['center', 'center', 'center', 'unset']}>
        <Image height={40} width={40} src="/github.svg" marginBottom={4} />
        <Heading
          variant="tertiary"
          textAlign={['center', 'center', 'center', 'left']}
        >
          Open Source
        </Heading>
        <Paragraph textAlign={['center', 'center', 'center', 'left']}>
          Developer infrastructure is best when open source. Everything we build
          can be found on our{' '}
          <Link href="https://github.com/deviceplane/deviceplane">GitHub</Link>{' '}
          and is distributed under a permissive open source license.
        </Paragraph>
      </Column>

      <Column alignItems={['center', 'center', 'center', 'unset']}>
        <Icon icon="lock" size={40} color="primary" marginBottom={4} />
        <Heading
          variant="tertiary"
          textAlign={['center', 'center', 'center', 'left']}
        >
          Security Conscious
        </Heading>
        <Paragraph textAlign={['center', 'center', 'center', 'left']}>
          We follow the best security practices across our systems. You will
          gain access to a variety of security features and controls that you
          didn't have before.
        </Paragraph>
      </Column>

      <Column alignItems={['center', 'center', 'center', 'unset']}>
        <Icon icon="code" size={40} color="primary" marginBottom={4} />
        <Heading
          variant="tertiary"
          textAlign={['center', 'center', 'center', 'left']}
        >
          Developer Focused
        </Heading>
        <Paragraph textAlign={['center', 'center', 'center', 'left']}>
          Deploying to remote devices should be as easy as deploying to the
          cloud. We're building modern and accessible tooling so you can spend
          less time learning and more time shipping.
        </Paragraph>
      </Column>
    </Grid>
  </Section>
);

export default Info;

import { Column, Row, Heading, Section, Paragraph, Image, Link } from './core';

const Info = () => (
  <Section>
    <Row
      justifyContent={['unset', 'unset', 'space-between']}
      alignItems={['center', 'center', 'unset']}
      alignSelf="stretch"
      flexDirection={['column', 'column', 'row']}
    >
      <Column
        maxWidth={[13, 13, '460px']}
        marginRight={[0, 0, 8]}
        marginBottom={[10, 10, 0]}
        alignItems={['center', 'center', 'unset']}
      >
        <Image height={48} width={48} src="/github.svg" marginBottom={2} />
        <Heading variant="secondary" textAlign={['center', 'center', 'left']}>
          Open Source
        </Heading>
        <Paragraph fontSize={3} textAlign={['center', 'center', 'left']}>
          Developer infrastructure is best when open source. Everything we build
          can be found on our{' '}
          <Link href="https://github.com/deviceplane/deviceplane">GitHub</Link>{' '}
          and is distributed under a permissive open source license.
        </Paragraph>
      </Column>

      <Column
        maxWidth={[13, 13, '460px']}
        alignItems={['center', 'center', 'unset']}
      >
        <Image height={48} width={48} src="/linux.svg" marginBottom={2} />
        <Heading variant="secondary" textAlign={['center', 'center', 'left']}>
          Linux Based
        </Heading>
        <Paragraph fontSize={3} textAlign={['center', 'center', 'left']}>
          We support any device running Linux regardless of distribution,
          architecture, or hardware. Our agent is a static binary that can be
          installed in a single command.
        </Paragraph>
      </Column>
    </Row>
  </Section>
);

export default Info;

import Logo from './icons/logo';
import {
  Text,
  Row,
  Column,
  Heading,
  Section,
  Paragraph,
  Image,
  Link
} from './core';

const OpenSource = () => (
  <Section>
    <Row
      justifyContent="space-between"
      alignSelf="stretch"
      alignItems="center"
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row'
      ]}
    >
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
          Open Source
        </Heading>
        <Paragraph
          fontSize={3}
          textAlign={['center', 'center', 'center', 'left']}
        >
          Developer infrastructure is best when open source. Everything we build
          can be found on our{' '}
          <Link href="https://github.com/deviceplane/deviceplane">GitHub</Link>{' '}
          and is distributed under a permissive open source license.
        </Paragraph>
      </Column>
      <Column>
        <Image src="/open-source.svg" width={300} />
      </Column>
    </Row>
  </Section>
);

export default OpenSource;

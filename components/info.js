import styled from 'styled-components';

import {
  Column,
  Row,
  Heading,
  Section,
  Button,
  Paragraph,
  Icon,
  Text
} from './core';

const Container = styled(Column)``;
Container.defaultProps = {
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '550px'
};

const Info = () => (
  <Section alignItems="center" paddingX={6}>
    <Row
      flex={1}
      alignItems={['center', 'center', 'center', 'flex-start']}
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Container marginBottom={9} marginRight={[0, 0, 0, 9]}>
        <Column alignItems="center">
          <Button
            variant="text"
            title={
              <Column alignItems="center">
                <Icon
                  icon="manual"
                  color="primary"
                  size="32"
                  marginBottom={2}
                />
                <Text color="inherit">Documentation</Text>
              </Column>
            }
            href="/docs"
            marginBottom={3}
          />
          <Heading variant="tertiary" fontSize={5}>
            Developer focused
          </Heading>
          <Paragraph>
            Deploying to remote devices should be as easy as deploying to the
            cloud. We're building modern and accessible tooling so developers
            can spend less time learning and more time shipping.
          </Paragraph>
        </Column>
      </Container>

      <Container marginBottom={9}>
        <Column alignItems="center">
          <Button
            variant="text"
            title={
              <Column alignItems="center">
                <Icon
                  icon="git-branch"
                  color="primary"
                  size="32"
                  marginBottom={2}
                />
                <Text color="inherit">Source code</Text>
              </Column>
            }
            href="https://github.com/deviceplane/deviceplane"
            marginBottom={3}
          />
          <Heading variant="tertiary" fontSize={5}>
            Open source
          </Heading>
          <Paragraph>
            Developer infrastructure is inherently best when open source.
            Everything we build can be found on our GitHub and is distributed
            under a permissive open source license.
          </Paragraph>
        </Column>
      </Container>
    </Row>

    <Container alignItems="center">
      <Column alignItems="center">
        <Icon color="primary" icon="lock" size="32" marginBottom={3} />
        <Heading variant="tertiary" fontSize={5}>
          Security conscious
        </Heading>
        <Paragraph>
          We follow the best security practices across all of our systems to
          ensure your devices are secure. By using us you'll gain access to a
          variety of security features and controls that you didn't have before.
        </Paragraph>
      </Column>
    </Container>
  </Section>
);

export default Info;

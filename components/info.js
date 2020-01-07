import styled from 'styled-components';

import { Column, Row, Heading, Section, Button, Paragraph, Icon } from './core';

const Container = styled(Column)``;
Container.defaultProps = {
  padding: 2,
  borderRadius: 2,
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: '550px'
};

const Info = () => (
  <Section alignItems="center">
    <Row
      flex={1}
      alignItems={['center', 'center', 'flex-start']}
      flexDirection={['column', 'column', 'row']}
      justifyContent={['initial', 'initial', 'space-between']}
    >
      <Container
        margin={['0 24px 64px 24px', '0 24px 64px 24px', '0 0 0 24px', 0]}
      >
        <Column alignItems="center">
          <Icon size="32" icon="manual" color="primary" marginBottom={2} />
          <Button
            variant="text"
            title="Documentation"
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

      <Container
        margin={[
          '0 24px 64px 24px',
          '0 24px 64px 24px',
          '0 24px 64px 24px',
          '0 0 0 64px'
        ]}
      >
        <Column alignItems="center">
          <Icon icon="git-branch" color="primary" size="32" marginBottom={2} />
          <Button
            variant="text"
            title="Source code"
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

    <Container
      alignItems="center"
      margin={['0 24px 64px 24px', '0 24px 64px 24px', '64px 24px 0 24px']}
    >
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

      {/*
        <a href="/docs/security">
          Learn more  <Arrow />
        </a>
      */}
    </Container>

    <style jsx>{`
      @keyframes shift {
        50% {
          transform: translateX(5px);
        }
      }

      .container:not(:last-child) {
        margin-right: 2rem;
      }

      @media screen and (max-width: 900px) {
        section {
          align-items: center;
          justify-content: unset;
          flex-direction: column;
        }

        .container {
          max-width: 28rem;
          margin: 2rem 0 !important;
        }

        .container:last-child {
          margin-bottom: 0 !important;
        }
      }
    `}</style>
  </Section>
);

export default Info;

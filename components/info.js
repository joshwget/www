import styled from 'styled-components';

import {
  Column,
  Row,
  Heading,
  Section,
  Badge,
  Text,
  Link,
  Image,
  Button,
  Paragraph
} from './core';
import Arrow from './icons/arrow';

const Container = styled(Column)`
  &:not(:last-child) {
    margin-right: 60px;
  }
`;
Container.defaultProps = {
  padding: 3,
  borderRadius: 2,
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  width: '540px'
};

const Icon = styled(Column)`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: 12px;
`;

const Info = () => (
  <Section>
    <Row marginBottom={10}>
      <Container>
        <Column alignItems="center">
          <Icon>
            <Image src="/code.svg" height="100%" />
          </Icon>
          <Link href="/docs" marginBottom={2}>
            Documentation
          </Link>
          <Heading variant="tertiary">Developer focused</Heading>
          <Paragraph>
            Deploying to remote devices should be as easy as deploying to the
            cloud. We're building modern and accessible tooling so developers
            can spend less time learning and more time shipping.
          </Paragraph>
        </Column>
      </Container>

      <Container>
        <Column alignItems="center">
          <Icon>
            <Image src="/github.svg" height="100%" />
          </Icon>
          <Link
            href="https://github.com/deviceplane/deviceplane"
            marginBottom={2}
          >
            Source Code
          </Link>
          <Heading variant="tertiary">Open source</Heading>
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
        <Icon>
          <Image src="/lock.svg" height="100%" />
        </Icon>
        <Heading variant="tertiary">Security conscious</Heading>
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

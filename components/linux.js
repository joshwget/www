import { css, keyframes } from 'styled-components';

import {
  Box,
  Column,
  Row,
  Heading,
  Section,
  Paragraph,
  Image,
  Link
} from './core';

const distros = [
  'alpine',
  'arch',
  'fedora',
  'opensuse',
  'debian',
  'ubuntu',
  'pi'
];

const degree = 360 / distros.length;

const frames = distros.map(
  (_, i) =>
    keyframes`
    0% {
      transform: rotate(${degree *
        i}deg) translate3d(80px, 80px, 0) rotate(-${degree * i}deg);
    }
    50% {
      transform: rotate(${degree * i +
        360}deg) translate3d(120px, 120px, 0) rotate(-${degree * i + 360}deg);
    }
  100% {
    transform: rotate(${degree * i +
      720}deg) translate3d(80px, 80px, 0) rotate(-${degree * i + 720}deg);
  }
`
);

const Icon = ({ src, index, alt, ...props }) => (
  <Column
    width={54}
    height={54}
    bg="white"
    borderRadius="99px"
    alignItems="center"
    justifyContent="center"
    position="absolute"
    flex={0}
    css={`
      backface-visibility: hidden;
      perspective: 1000;
      animation: 60s ${frames[index]} linear infinite;

      @media screen and (max-width: 600px) {
        animation: none;
        transform: rotate(${degree * index}deg) translate3d(80px, 80px, 0)
          rotate(-${degree * index}deg);
      }
    `}
    {...props}
  >
    <Image height={32} width={32} src={src} alt={alt} />
  </Column>
);

const Info = () => {
  return (
    <Section>
      <Row
        justifyContent="space-between"
        alignSelf="stretch"
        alignItems={['center', 'center', 'center', 'unset']}
        flexDirection={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row'
        ]}
      >
        <Column justifyContent="center" flex={1} marginTop={[8, 8, 8, 0]}>
          <Column
            marginLeft={[0, 0, 0, 8]}
            position="relative"
            width={320}
            height={320}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              height={70}
              width={70}
              src="/linux.svg"
              marginBottom={2}
              alt="Linux"
            />
            {distros.map((distro, index) => (
              <Icon
                key={distro}
                src={`/distros/${distro}.svg`}
                index={index}
                alt={distro}
              />
            ))}
          </Column>
        </Column>
        <Column
          maxWidth="500px"
          alignItems={['center', 'center', 'center', 'unset']}
          justifyContent="center"
        >
          <Heading
            variant="secondary"
            textAlign={['center', 'center', 'center', 'left']}
            maxWidth={['400px', '400px', '400px', 'unset']}
          >
            Easily setup any Linux device
          </Heading>
          <Paragraph
            fontSize={3}
            textAlign={['center', 'center', 'center', 'left']}
          >
            We support any device running Linux regardless of distro,
            architecture, or hardware. Our agent is a static binary that can be
            installed in a single command.
          </Paragraph>
        </Column>
      </Row>
    </Section>
  );
};

export default Info;

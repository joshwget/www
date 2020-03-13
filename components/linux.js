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
    100% {
      transform: rotate(${degree * i +
        720}deg) translate3d(80px, 80px, 0) rotate(-${degree * i + 720}deg);
    }
`
);

const Icon = ({ src, index, alt, ...props }) => (
  <Column
    width={60}
    height={60}
    bg="black"
    borderRadius="99px"
    alignItems="center"
    justifyContent="center"
    position="absolute"
    flex={0}
    css={`
      backface-visibility: hidden;
      perspective: 1000;
      animation: 80s ${frames[index]} linear infinite;

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

const Linux = () => {
  return (
    <Section>
      <Row
        justifyContent="space-between"
        alignSelf="stretch"
        alignItems={['center', 'center', 'center', 'unset']}
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Column justifyContent="center" flex={1}>
          <Column
            position="relative"
            width={300}
            height={300}
            alignItems="center"
            justifyContent="center"
          >
            <Column
              alignItems="center"
              justifyContent="center"
              width={90}
              height={90}
              borderRadius={7}
              bg="black"
            >
              <Image
                height={55}
                width={55}
                src="/linux.svg"
                marginBottom={2}
                alt="Linux"
              />
            </Column>

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
          marginTop={[6, 6, 6, 0]}
          maxWidth="500px"
          alignItems={['center', 'center', 'center', 'unset']}
          justifyContent="center"
        >
          <Heading
            variant="secondary"
            textAlign={['center', 'center', 'center', 'left']}
            maxWidth={['400px', '400px', '400px', 'unset']}
          >
            Support for any Linux device
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

export default Linux;

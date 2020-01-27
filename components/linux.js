import { useViewportScroll, transform } from 'framer-motion';
import { useState, useLayoutEffect } from 'react';

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

const Icon = ({ src, index, ...props }) => (
  <Column
    width={54}
    height={54}
    bg="white"
    borderRadius="99px"
    alignItems="center"
    justifyContent="center"
    position="absolute"
    style={{
      transform: `rotate(${index *
        degree}deg) translate(120px) rotate(-${index * degree}deg)`
    }}
    {...props}
  >
    <Image height={32} width={32} src={src} />
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
            position="relative"
            width={350}
            height={350}
            alignItems="center"
            justifyContent="center"
          >
            <Image height={70} width={70} src="/linux.svg" marginBottom={2} />
            {distros.map((distro, index) => (
              <Icon src={`/distros/${distro}.svg`} index={index} />
            ))}
          </Column>
        </Column>
        <Column
          maxWidth={['500px', '500px', '500px', '550px']}
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

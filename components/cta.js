import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Section, Text, Column, Row, Button } from './core';

const CTA = () => {
  const [ref, entry] = useInView();

  const animate = entry && entry.isIntersecting;

  return (
    <Section ref={ref}>
      <Row
        alignItems="center"
        bg={['none', 'black']}
        padding={[0, 8]}
        borderRadius={2}
        border={['none', 1]}
        flexDirection={['column', 'column', 'row']}
      >
        <Text fontSize={5} textAlign="center" fontWeight={1} color="primary">
          Get started today
        </Text>

        <Row
          alignSelf="stretch"
          alignItems="center"
          flexDirection={['column', 'column', 'row']}
          justifyContent={['unset', 'unset', 'center']}
          marginLeft={[0, 0, 8]}
          marginTop={[6, 6, 0]}
        >
          <Button
            title="Chat with us"
            variant="secondary"
            onClick={() => window.Intercom('show')}
            marginRight={[0, 0, 4]}
          />
          <Button
            title="Create free account"
            href="https://cloud.deviceplane.com/signup"
            marginTop={[4, 4, 0]}
          />
        </Row>
      </Row>
    </Section>
  );
};

export default CTA;

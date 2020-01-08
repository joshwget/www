import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Section, Heading, Column, Row, Button } from './core';

const CTA = () => {
  const [ref, entry] = useInView();

  const animate = entry && entry.isIntersecting;

  return (
    <Column width="100%" alignItems="center" bg="black" ref={ref}>
      <Section alignItems="center" paddingX={6}>
        <motion.div
          animate={animate && { opacity: [0, 1] }}
          transition={{ duration: 4, delay: 0.25 }}
        >
          <Heading variant="secondary" textAlign="center">
            Ready to get started?
          </Heading>
        </motion.div>

        <Row
          alignSelf="stretch"
          marginTop={6}
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
        >
          <Button
            title="Chat with us"
            variant="secondary"
            onClick={() => window.Intercom('show')}
            width="100%"
            maxWidth="340px"
            marginBottom={[6, 6, 0]}
            marginRight={[0, 0, 6]}
          />
          <Button
            title="Start now"
            width="100%"
            maxWidth="340px"
            href="https://cloud.deviceplane.com/register"
          />
        </Row>
      </Section>
    </Column>
  );
};

export default CTA;

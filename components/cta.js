import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Arrow from './icons/arrow';
import { Section, Heading, Column, Row, Button } from './core';

const CTA = () => {
  const [ref, entry] = useInView();

  const animate = entry && entry.isIntersecting;

  return (
    <Column width="100%" alignItems="center" bg="black" ref={ref}>
      <Section alignItems="center">
        <motion.div
          animate={animate && { opacity: [0, 1] }}
          transition={{ duration: 4, delay: 0.25 }}
        >
          <Heading variant="secondary" textAlign="center">
            Ready to get started?
          </Heading>
        </motion.div>

        <Row
          marginTop={8}
          flexDirection={['column', 'column', 'row']}
          alignItems="center"
        >
          <Button
            title="Chat with us"
            variant="secondary"
            onClick={() => window.Intercom('show')}
            icon={<Arrow />}
            width="300px"
            marginBottom={[5, 5, 0]}
            marginRight={[0, 0, 8]}
          />
          <Button
            title="Start now"
            width="300px"
            href="https://cloud.deviceplane.com/register"
          />
        </Row>
      </Section>
    </Column>
  );
};

export default CTA;

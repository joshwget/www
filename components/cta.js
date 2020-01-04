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
          <Heading variant="secondary">Ready to get started?</Heading>
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
      <style jsx>{`
        @keyframes shift {
          50% {
            transform: translateX(5px);
          }
        }

        button:hover .arrow {
          animation-name: shift;
          animation-duration: 1.2s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
          animation-direction: alternate;
        }

        .arrow {
          display: flex;
          margin-left: 0.75rem;
        }

        @media screen and (max-width: 900px) {
          section {
            flex-direction: column;
          }
          h2 {
            text-align: center;
            margin: 0 0 2rem 0;
          }
          .row {
            flex-direction: row-reverse;
          }
        }

        @media screen and (max-width: 600px) {
          .row {
            flex-direction: column;
          }
          a {
            width: 100%;
          }
          button {
            width: 100%;
            margin: 1.5rem 0;
          }
        }
      `}</style>
    </Column>
  );
};

export default CTA;

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Column, Row, Heading, Section, Text, Image, Button } from './core';

const plans = [
  {
    name: 'Developer',
    features: ['25 device limit', 'Single user'],
    price: 'Free',
    bottom: (
      <Text marginTop="auto" color="grays.8">
        Scale to another plan seamlessly as you grow.
      </Text>
    )
  },
  {
    name: 'Team',
    features: ['50 devices included', '3 users included', 'Support'],
    price: 'Starts at $250/month',
    bottom: (
      <Text marginTop="auto" color="grays.8">
        Cost based on each additional device or user.
      </Text>
    )
  },
  {
    name: 'Enterprise',
    features: [
      'Custom solutions',
      'Unlimited users',
      'Dedicated support',
      'Onboarding and integrations'
    ],
    price: 'Custom pricing',
    bottom: (
      <Button
        title="Contact sales"
        href="mailto:sales@deviceplane.com"
        paddingY="8px"
        borderColor="primary"
        marginTop="auto"
      />
    )
  }
];

const PlanContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  flex: 0 0 240px;
  height: 340px;
  padding: 24px;
  margin: 0 32px;
  background: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.white};
`;

const Check = styled.div`
  flex: 0 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const Plan = ({ name, features, price, bottom, index, animate }) => (
  <PlanContainer
    key={name}
    animate={animate && { opacity: [0, 1], y: [-50, 0] }}
    transition={{
      delay: index / 3,
      duration: 0.75,
      ease: 'easeIn'
    }}
  >
    <Column>
      <Text fontSize={5} fontWeight={3}>
        {name}
      </Text>
      <Text marginTop={1} fontWeight={1} fontSize={1} color="grays.8">
        {price}
      </Text>
    </Column>

    <Column>
      {features.map(feature => (
        <Row key={feature} marginTop={4}>
          <Check>
            <Image src="/check.svg" width={3} height={3} />
          </Check>
          <Text>{feature}</Text>
        </Row>
      ))}
    </Column>
    {bottom}
  </PlanContainer>
);

const Pricing = () => {
  const [ref, entry] = useInView();

  const animate = entry && entry.isIntersecting;

  return (
    <Column
      position="relative"
      width="100%"
      alignItems="center"
      overflow="hidden"
      ref={ref}
    >
      <div className="bg" />

      <Section position="relative">
        <motion.div
          animate={animate && { opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Heading variant="secondary">Flexible plans that scale</Heading>
        </motion.div>

        <Row marginTop={9} justifyContent="center">
          {plans.map((plan, index) => (
            <Plan key={plan.name} {...plan} index={index} animate={animate} />
          ))}
        </Row>
      </Section>

      <style jsx>{`
        .bg {
          position: absolute;
          z-index: 0;
          left: 0;
          height: 450px;
          background: linear-gradient(
            165deg,
            #141414 calc(50% - 1px),
            #000 50%
          );
          width: 100vw;
          bottom: 0;
        }
        @media screen and (max-width: 900px) {
          .content {
            padding: 0;
          }
          .container {
            width: 10rem;
            height: 17.5rem;
          }
          .border {
            width: 12.5rem;
            height: 19rem;
            margin: 4rem 1.25rem;
          }
        }
        @media screen and (max-width: 700px) {
          .border {
            margin: 2rem 0;
            border-radius: 0;
          }
          .border:first-child {
            border-bottom-left-radius: var(--radius);
          }
          .border:last-child {
            border-bottom-right-radius: var(--radius);
          }
          .bg {
            height: 28rem;
            background: linear-gradient(
              165deg,
              var(--bg) calc(50% - 1px),
              #000 50%
            );
          }
        }
        @media screen and (max-width: 600px) {
          h2 {
            margin: 0 0 3rem 0;
          }
          .plans {
            flex-direction: column;
          }
          .border {
            height: auto;
            margin: 0 0 2rem 0;
            width: 15.5rem;
            border-radius: 0;
          }
          .border:last-child {
            margin: 0;
          }
          .container {
            height: auto;
            width: 13rem;
            transform: unset !important;
          }
          .border:last-child {
            height: 16rem;
            border-bottom-right-radius: 4px;
            border-bottom-left-radius: 4px;
          }
          .border:last-child .container {
            height: 14rem;
          }
          .bg {
            height: 25rem;
            background: linear-gradient(
              150deg,
              var(--bg) calc(50% - 1px),
              #000 50%
            );
          }
        }
      `}</style>
    </Column>
  );
};

export default Pricing;

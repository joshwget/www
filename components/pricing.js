import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Box,
  Column,
  Row,
  Motion,
  Heading,
  Section,
  Text,
  Icon,
  Button
} from './core';

const plans = [
  {
    name: 'Developer',
    features: ['25 device limit', 'Single user'],
    price: 'Free',
    bottom: (
      <Text marginTop="auto" color="grays.8" fontWeight={1}>
        Scale to another plan seamlessly as you grow.
      </Text>
    )
  },
  {
    name: 'Team',
    features: ['50 devices included', '3 users included', 'Support'],
    price: 'Starts at $250/month',
    bottom: (
      <Text marginTop="auto" color="grays.8" fontWeight={1}>
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
      'Onboarding'
    ],
    price: 'Custom pricing',
    bottom: (
      <Button
        title="Contact sales"
        href="mailto:sales@deviceplane.com"
        borderColor="primary"
        marginTop="auto"
      />
    )
  }
];

const PlanContainer = styled(Motion)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  background: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.white};
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
    padding={5}
    height={['auto', 'auto', '320px']}
    marginTop={[8, 8, 0]}
    flex={['0 0 200px', '0 0 200px', '0 0 230px', '0 0 270px']}
  >
    <Column>
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
          <Row key={feature} marginTop={4} alignItems="center">
            <Row>
              <Icon icon="tick-circle" size={18} color="primary" />
            </Row>
            <Text marginLeft={2} fontWeight={1}>
              {feature}
            </Text>
          </Row>
        ))}
      </Column>
    </Column>

    <Column marginTop={6}>{bottom}</Column>
  </PlanContainer>
);

const Background = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  height: 450px;
  background: linear-gradient(
    174deg,
    transparent calc(50% - 1px),
    ${props => props.theme.colors.black} 50%
  );
  width: 100vw;
  bottom: 0;

  @media (max-width: 800px) {
    height: 1150px;
    background: linear-gradient(
      165deg,
      transparent calc(50% - 1px),
      ${props => props.theme.colors.black} 50%
    );
  }
`;

const Pricing = () => {
  const [ref, entry] = useInView();

  const animate = entry && entry.isIntersecting;

  return (
    <Column position="relative" width="100%" alignItems="center" ref={ref}>
      <Background />

      <Section position="relative" paddingX={6}>
        <motion.div
          animate={animate && { opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <Heading variant="secondary" textAlign="center">
            Flexible plans that scale
          </Heading>
        </motion.div>

        <Row
          alignSelf={['initial', 'initial', 'stretch']}
          justifyContent={['initial', 'initial', 'space-between']}
          flexDirection={['column', 'column', 'row']}
        >
          {plans.map((plan, index) => (
            <Plan key={plan.name} {...plan} index={index} animate={animate} />
          ))}
        </Row>
      </Section>
    </Column>
  );
};

export default Pricing;

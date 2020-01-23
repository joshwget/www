import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
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
    icon: 'person',
    bottom: (
      <Text textAlign="center" fontSize={3} maxWidth="200px">
        Scale to another plan as you grow.
      </Text>
    )
  },
  {
    name: 'Team',
    icon: 'people',
    features: ['50 devices included', '3 users included', 'Support'],
    price: '$250/month base',
    bottom: (
      <Text textAlign="center" fontSize={3}>
        Pricing based on each additional device or user.
      </Text>
    )
  },
  {
    name: 'Enterprise',
    features: [
      'Unique solutions',
      'Unlimited users',
      'Dedicated support',
      'Onboarding'
    ],
    icon: 'office',
    price: 'Custom',
    bottom: (
      <Button
        width="100%"
        variant="secondary"
        title="Contact sales"
        href="mailto:sales@deviceplane.com"
        marginTop="auto"
      />
    )
  }
];

const PlanContainer = styled(Motion)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  background: ${props => props.theme.colors.pageBackground};
`;

const Plan = ({ name, features, price, bottom, index, animate, icon }) => (
  <PlanContainer
    key={name}
    animate={animate && { opacity: [0, 1], y: [-50, 0] }}
    transition={{
      delay: index / 3,
      duration: 0.75,
      ease: 'easeIn'
    }}
    padding={6}
    height={['initial', 'initial', '400px']}
    marginY={8}
    marginX={[0, 0, 4, 6]}
    width="100%"
    maxWidth="280px"
    border={0}
  >
    <Column>
      <Icon icon={icon} size={32} color="primary" marginBottom={4} />
      <Text fontSize={5} fontWeight={2} color="pureWhite" marginBottom={2}>
        {name}
      </Text>
      <Text
        style={{ textTransform: 'uppercase' }}
        fontWeight={2}
        fontSize={0}
        color="grays.11"
      >
        {price}
      </Text>

      <Column marginTop={2}>
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

    <Column marginTop={6} alignItems="center">
      {bottom}
    </Column>
  </PlanContainer>
);

const Pricing = () => {
  const [ref, entry] = useInView();

  const animate = entry && entry.isIntersecting;

  return (
    <Section paddingTop={12}>
      <motion.div
        animate={animate && { opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Heading variant="secondary" textAlign="center">
          Flexible Pricing
        </Heading>
      </motion.div>

      <Row
        alignSelf={['initial', 'initial', 'stretch']}
        justifyContent="center"
        flexDirection={['column', 'column', 'row']}
      >
        {plans.map((plan, index) => (
          <Plan key={plan.name} {...plan} index={index} animate={animate} />
        ))}
      </Row>
    </Section>
  );
};

export default Pricing;

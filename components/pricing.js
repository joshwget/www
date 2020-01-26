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
    price: (
      <Row height="36px" alignItems="center">
        <Text
          style={{ textTransform: 'uppercase' }}
          fontWeight={2}
          fontSize={1}
          color="grays.11"
        >
          $0 Forever
        </Text>
      </Row>
    ),
    icon: 'person'
  },
  {
    name: 'Team',
    icon: 'people',
    features: ['50 devices included', '3 users included', 'Support'],
    price: (
      <Row height="36px" alignItems="center">
        <Text
          style={{ textTransform: 'uppercase' }}
          fontWeight={2}
          fontSize={1}
          color="grays.11"
        >
          $250/month base
        </Text>
      </Row>
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
    price: (
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
    marginX={[0, 0, 4, 6]}
    width="100%"
    maxWidth="280px"
    border={1}
  >
    <Column>
      <Row alignItems="center">
        <Icon
          icon={icon}
          size={name === 'Team' ? 40 : 32}
          color="primary"
          marginRight={4}
        />
        <Text fontSize={5} fontWeight={2} color="pureWhite">
          {name}
        </Text>
      </Row>
      <Row marginTop={4} marginBottom={2}>
        {price}
      </Row>

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
  </PlanContainer>
);

const Pricing = () => {
  const [ref, entry] = useInView();

  const animate = entry && entry.isIntersecting;

  return (
    <Section>
      <motion.div
        animate={animate && { opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <Heading variant="secondary" textAlign="center">
          Flexible pricing that scales
        </Heading>
      </motion.div>

      <Row
        marginTop={8}
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

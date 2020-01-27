import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import {
  Grid,
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

const PlanContainer = styled(Column)`
  justify-content: space-between;
  border-radius: 4px;
  background: ${props => props.theme.colors.pageBackground};
`;

const Plan = ({ name, features, price, index, animate, icon }) => (
  <PlanContainer key={name} padding={6} border={1}>
    <Column>
      <Icon
        icon={icon}
        size={name === 'Team' ? 40 : 32}
        color="primary"
        marginBottom={2}
      />
      <Text fontSize={5} fontWeight={2} color="pureWhite">
        {name}
      </Text>
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
      <Heading
        variant="secondary"
        textAlign="center"
        maxWidth={['400px', '400px', '400px', 'unset']}
      >
        Flexible pricing that scales
      </Heading>

      <Grid
        marginTop={8}
        gridGap={8}
        alignContent="center"
        gridTemplateColumns={[
          'repeat(1, 250px)',
          'repeat(1, 250px)',
          'repeat(1, 250px)',
          'repeat(3, 250px)'
        ]}
      >
        {plans.map((plan, index) => (
          <Plan key={plan.name} {...plan} index={index} animate={animate} />
        ))}
      </Grid>
    </Section>
  );
};

export default Pricing;

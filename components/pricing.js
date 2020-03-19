import styled from 'styled-components';

import {
  Grid,
  Column,
  Row,
  Heading,
  Section,
  Text,
  Icon,
  Button
} from './core';

const plans = [
  {
    name: 'Developer',
    color: 'green',
    features: ['Free forever', 'Up to 50 devices', 'Single user'],
    icon: 'person',
    button: (
      <Button
        variant="green"
        title="Create free account"
        alignSelf="stretch"
        href="https://cloud.deviceplane.com/signup"
      />
    )
  },
  {
    name: 'Enterprise',
    color: 'purple',
    button: (
      <Button
        variant="purple"
        title="Contact sales"
        alignSelf="stretch"
        href="mailto:sales@deviceplane.com"
      />
    ),
    features: [
      'Custom pricing',
      'Unlimited users',
      'Dedicated support',
      'Onboarding'
    ],
    icon: 'office'
  }
];

const PlanContainer = styled(Column)`
  align-items: center;
  border-radius: 4px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.2);
`;

const Plan = ({ name, features, price, color, icon, button }) => (
  <PlanContainer key={name} padding={6} bg="black">
    <Row position="relative" alignItems="center" marginBottom={6}>
      <Icon icon={icon} size={name === 'Team' ? 36 : 28} color={color} />
      <Text
        marginLeft={3}
        fontSize="20px"
        fontWeight={2}
        color="white"
        style={{ textTransform: 'uppercase' }}
      >
        {name}
      </Text>
    </Row>

    {button}

    <Column alignSelf="flex-start" marginTop={4}>
      {features.map(feature => (
        <Row key={feature} marginTop={5} alignItems="center">
          <Icon icon="tick-circle" size={20} color={color} />
          <Text marginLeft={3} fontWeight={1}>
            {feature}
          </Text>
        </Row>
      ))}
    </Column>

    <Row marginTop={6}>{price}</Row>
  </PlanContainer>
);

const Pricing = () => {
  return (
    <Section>
      <Heading
        variant="secondary"
        textAlign="center"
        maxWidth={['400px', '400px', '400px', 'unset']}
        marginBottom={8}
      >
        Simple pricing that scales
      </Heading>

      <Grid
        gridGap={9}
        gridTemplateColumns={[
          'minmax(250px, 1fr)',
          'minmax(250px, 1fr)',
          'repeat(2, 300px)'
        ]}
      >
        {plans.map((plan, index) => (
          <Plan key={plan.name} {...plan} index={index} />
        ))}
      </Grid>
    </Section>
  );
};

export default Pricing;

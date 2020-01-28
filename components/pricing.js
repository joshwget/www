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
    features: ['25 device limit', 'Single user'],
    price: (
      <Column alignItems="center" flex={1}>
        <Text fontWeight={2} fontSize={1} color="primary">
          $0{' '}
          <Text style={{ textTransform: 'uppercase' }} color="grays.11">
            / month
          </Text>
        </Text>

        <Button
          marginTop={3}
          width="100%"
          variant="secondary"
          title="Start now"
          href="https://cloud.deviceplane.com/signup"
        />
      </Column>
    ),
    icon: 'person'
  },
  {
    name: 'Team',
    icon: 'people',
    features: ['50 devices included', '3 users included', 'Support'],
    price: (
      <Column alignItems="center" flex={1}>
        <Text fontWeight={2} fontSize={1} color="primary">
          $250{' '}
          <Text style={{ textTransform: 'uppercase' }} color="grays.11">
            / month base
          </Text>
        </Text>

        <Button
          marginTop={3}
          width="100%"
          variant="secondary"
          title="Try for free"
          href="https://cloud.deviceplane.com/signup"
        />
      </Column>
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
    icon: 'office',
    price: (
      <Column flex={1} alignItems="center">
        <Text
          fontWeight={2}
          fontSize={1}
          color="primary"
          style={{ textTransform: 'uppercase' }}
        >
          Custom Pricing
        </Text>
        <Button
          marginTop={3}
          width="100%"
          variant="secondary"
          title="Contact sales"
          href="mailto:sales@deviceplane.com"
        />
      </Column>
    )
  }
];

const PlanContainer = styled(Column)`
  justify-content: space-between;
  border-radius: 4px;
  background: ${props => props.theme.colors.pageBackground};
`;

const Plan = ({ name, features, price, index, icon }) => (
  <PlanContainer key={name} padding={6} border={1}>
    <Column position="relative">
      <Icon
        position="absolute"
        top={name === 'Team' ? '-6px' : 0}
        icon={icon}
        size={name === 'Team' ? 42 : 32}
        color="primary"
        marginBottom={2}
      />
      <Text fontSize={5} fontWeight={2} color="pureWhite" marginTop={7}>
        {name}
      </Text>

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
      >
        Flexible pricing that scales
      </Heading>

      <Grid
        marginTop={8}
        gridGap={8}
        alignContent="center"
        gridTemplateColumns={[
          'repeat(1, 260px)',
          'repeat(1, 260px)',
          'repeat(1, 260px)',
          'repeat(3, 260px)'
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

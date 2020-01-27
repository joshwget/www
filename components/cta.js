import { useInView } from 'react-intersection-observer';

import theme from '../theme';
import { Section, Text, Column, Row, Button } from './core';

const CTA = () => {
  return (
    <Section>
      <Row
        alignItems="center"
        bg={['none', 'pageBackground']}
        padding={[0, 8]}
        borderRadius={2}
        border={['none', `6px solid ${theme.colors.primary}`]}
        flexDirection={['column', 'column', 'row']}
      >
        <Text fontSize={5} textAlign="center" fontWeight={1} color="primary">
          Get started now
        </Text>

        <Row
          alignSelf="stretch"
          alignItems="center"
          flexDirection={['column', 'column', 'row']}
          justifyContent={['unset', 'unset', 'center']}
          marginLeft={[0, 0, 10]}
          marginTop={[8, 8, 0]}
        >
          <Button
            title="Chat with us"
            variant="secondary"
            onClick={() => window.Intercom('show')}
            marginRight={[0, 0, 4]}
          />
          <Button
            title="Create free account"
            href="https://cloud.deviceplane.com/signup"
            marginTop={[4, 4, 0]}
          />
        </Row>
      </Row>
    </Section>
  );
};

export default CTA;

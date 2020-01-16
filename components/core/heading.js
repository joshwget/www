import React from 'react';
import styled, { css } from 'styled-components';
import { typography, color, space, layout, position } from 'styled-system';

const styles = css`
word-break: break-word;
margin: 0;
font-weight: 500;
color: ${props => props.theme.colors.white};
${typography} ${color} ${space} ${layout} ${position}
`;

export const H1 = styled.h1`
  ${styles}
`;

export const H2 = styled.h2`
  ${styles}
`;

export const H3 = styled.h3`
  ${styles}
`;

const Heading = ({ variant, ...rest }) => {
  switch (variant) {
    case 'secondary':
      return <H2 fontSize={[5, 5, 5, 6]} {...rest} />;
    case 'tertiary':
      return <H3 fontSize={[3, 3, 3, 4]} {...rest} />;
    case 'primary':
    default:
      return <H1 fontSize={7} {...rest} />;
  }
};

export default Heading;

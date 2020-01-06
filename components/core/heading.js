import React from 'react';
import styled, { css } from 'styled-components';
import { typography, color, space, layout } from 'styled-system';

const defaultProps = {
  color: 'white',
  margin: 0,
  fontWeight: 3
};

const styles = css`
word-break: break-word;
${typography} ${color} ${space} ${layout} 
`;

export const H1 = styled.h1`
  ${styles}
`;

H1.defaultProps = {
  ...defaultProps,
  fontSize: 7
};

export const H2 = styled.h2`
  ${styles}
`;

H2.defaultProps = {
  ...defaultProps,
  fontSize: 6
};

export const H3 = styled.h3`
  ${styles}
`;

H3.defaultProps = {
  ...defaultProps,
  fontSize: 5
};

const Heading = ({ variant, ...rest }) => {
  switch (variant) {
    case 'secondary':
      return <H2 {...rest} />;
    case 'tertiary':
      return <H3 {...rest} />;
    case 'primary':
    default:
      return <H1 {...rest} />;
  }
};

export default Heading;

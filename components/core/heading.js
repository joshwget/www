import React from 'react';
import styled from 'styled-components';
import { typography, color, space, layout } from 'styled-system';

const defaultProps = {
  color: 'white',
  margin: 0
};

const H1 = styled.h1`
  word-break: break-word;
  ${typography} ${color} ${space} ${layout} 
`;

H1.defaultProps = {
  ...defaultProps,
  fontSize: 7
};

const H2 = styled.h2`
  word-break: break-word;
  ${typography} ${color} ${space} ${layout} 
`;

H2.defaultProps = {
  ...defaultProps,
  fontSize: 7
};

const H3 = styled.h3`
  word-break: break-word;
  ${typography} ${color} ${space} ${layout} 
`;

H3.defaultProps = {
  ...defaultProps,
  fontSize: 6
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

import React from 'react';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};

  &:hover {
    text-decoration: underline;
  }

  ${color} ${layout} ${space} ${typography}
`;

const Link = ({ children, href, ...rest }) => {
  return <A {...rest}>{children}</A>;
};

export default Link;

import React from 'react';
import { default as NextLink } from 'next/link';
import styled from 'styled-components';
import { space, layout, color, typography, position } from 'styled-system';

import { Box } from './box';

const A = styled(Box).attrs({ as: 'a' })`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  ${color} ${layout} ${space} ${typography} ${position}
`;

A.defaultProps = {
  fontWeight: 2
};

const Link = ({ children, href, ...rest }) => {
  if (href.charAt(0) === '/') {
    return (
      <NextLink href={href}>
        <A {...rest}>{children}</A>
      </NextLink>
    );
  }
  return (
    <A href={href} {...rest}>
      {children}
    </A>
  );
};

export default Link;

import React from 'react';
import { default as NextLink } from 'next/link';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  font-weight: 600;

  ${color} ${layout} ${space} ${typography}
`;

const Link = ({ children, href, ...rest }) => {
  return (
    <NextLink href={href}>
      <A {...rest}>{children}</A>
    </NextLink>
  );
};

export default Link;

import React from 'react';
import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  typography,
  variant,
  shadow,
  flexbox
} from 'styled-system';

import theme from '../../theme';

const variants = {
  variants: {
    primary: {
      color: 'black',
      bg: 'primary',
      border: 0,
      '&:not(:disabled):hover': {
        bg: 'transparent',
        color: theme.colors.primary,
        boxShadow: `0px 0px 0px 1px ${theme.colors.primary} inset`
      },
      '&:not(:disabled):focus': {
        bg: 'transparent',
        color: theme.colors.primary,
        boxShadow: `0px 0px 0px 1px ${theme.colors.primary} inset`
      }
    },
    secondary: {
      color: 'white',
      border: 0,
      bg: 'transparent',
      borderColor: 'white',
      '&:not(:disabled):hover': {
        color: 'pureWhite',
        borderColor: 'pureWhite',
        boxShadow: `0px 0px 0px 1px ${theme.colors.pureWhite} inset`
      },
      '&:not(:disabled):focus': {
        color: 'pureWhite',
        borderColor: 'pureWhite',
        boxShadow: `0px 0px 0px 1px ${theme.colors.pureWhite} inset`
      }
    },
    text: {
      color: 'primary',
      border: 'none',
      padding: 0,
      '&:not(:disabled):hover': {
        color: 'white'
      },
      '&:not(:disabled):focus': {
        color: 'white'
      }
    },
    icon: {
      bg: 'transparent',
      border: 'none',
      padding: 0
    }
  }
};

export const Btn = styled.button`
appearance: none;
border: none;
outline: none;
font-family: inherit;
cursor: pointer;
transition: ${props => props.theme.transitions[0]};
transform: translateZ(0);
backface-visibility: hidden;
white-space: nowrap;
font-size: 14px;
padding: 10px 16px;
text-transform: uppercase;
text-renderering: geometricPercision;

&:disabled {
  cursor: not-allowed;
  opacity: .3;
}

&:focus {
  outline: none;
}

${variant(variants)}

${space} ${layout} ${typography} ${color} ${border} ${shadow} ${flexbox}
`;
Btn.defaultProps = {
  variant: 'primary',
  fontWeight: 2,
  borderRadius: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const LinkButton = styled(Btn).attrs({
  as: 'a'
})`
  text-decoration: none;
`;

const Button = ({ href, title, onClick, ...rest }) => {
  if (href) {
    return (
      <LinkButton href={href} {...rest}>
        {title}
      </LinkButton>
    );
  }

  return (
    <Btn onClick={onClick} {...rest}>
      {title}
    </Btn>
  );
};

Button.defaultProps = {
  href: null,
  title: ''
};

export default Button;

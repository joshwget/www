import React from 'react';
import styled, { css } from 'styled-components';
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

const defaultProps = {
  variant: 'primary',
  fontSize: 0,
  fontWeight: 2,
  borderRadius: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const styles = css`
appearance: none;
border: none;
outline: none;
font-family: inherit;
cursor: pointer;
transition: ${props => props.theme.transitions[0]};
transform: translateZ(0);
backface-visibility: hidden;
white-space: nowrap;
text-transform: uppercase;

&:disabled {
  cursor: not-allowed;
  opacity: .3;
}

&:focus {
  outline: none;
}

padding: ${props => props.theme.sizes[1]}px;

${variant(variants)}

${space} ${layout} ${typography} ${color} ${border} ${shadow} ${flexbox}
`;

export const Btn = styled.button`
  ${styles}
`;

Btn.defaultProps = defaultProps;

export const LinkButton = styled.a`
  ${styles}
`;
LinkButton.defaultProps = defaultProps;

const Button = ({ href, title, onClick, ...rest }) => {
  if (href) {
    return <LinkButton {...rest}>{title}</LinkButton>;
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

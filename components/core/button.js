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
import titlify from 'title';

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
        boxShadow: `0px 0px 0px 2px ${theme.colors.primary} inset`
      },
      '&:not(:disabled):focus': {
        bg: 'transparent',
        color: theme.colors.primary,
        boxShadow: `0px 0px 0px 2px ${theme.colors.primary} inset`
      }
    },
    secondary: {
      color: 'white',
      border: 0,
      bg: 'transparent',
      borderColor: 'white',
      '&:not(:disabled):hover': {
        borderColor: 'white',
        boxShadow: `0px 0px 0px 2px ${theme.colors.white} inset`
      },
      '&:not(:disabled):focus': {
        boxShadow: `0px 0px 0px 2px ${theme.colors.white} inset`
      }
    },
    text: {
      color: 'white',
      border: 'none',
      opacity: 0.8,
      padding: 0,
      '&:not(:disabled):hover': {
        opacity: 1
      },
      '&:not(:disabled):focus': {
        opacity: 1
      }
    },
    icon: {
      bg: 'transparent',
      border: 'none',
      padding: 0,
      boxShadow: 'none'
    }
  }
};

const defaultProps = {
  variant: 'primary',
  fontSize: 1,
  fontWeight: 2,
  borderRadius: 1,
  boxShadow: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const Btn = styled.button`
  appearance: none;
  border: none;
  outline: none;
  font-family: inherit;
  cursor: pointer;
  transition: all 250ms;
  transform: translateZ(0);
  backface-visibility: hidden;
  white-space: nowrap;

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

Btn.defaultProps = defaultProps;

export const LinkButton = styled.a`
  text-decoration: none;
  font-family: inherit;
  cursor: pointer;
  transition: all 250ms;
  transform: translateZ(0);
  backface-visibility: hidden;
  white-space: nowrap;

  &:disabled {
    opacity: .3;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  padding: ${props => props.theme.sizes[1]}px;

  ${variant(variants)}

  ${space} ${layout} ${typography} ${color} ${border} ${shadow} ${flexbox}
`;
LinkButton.defaultProps = defaultProps;

const Button = ({ href, title, onClick, ...rest }) => {
  title = typeof title === 'string' ? titlify(title) : title;
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

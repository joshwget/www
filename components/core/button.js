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
        color: theme.colors.primary
      },
      '&:not(:disabled):focus': {
        bg: 'transparent',
        color: theme.colors.primary
      }
    },
    secondary: {
      color: 'black',
      border: 0,
      bg: 'white',
      borderColor: 'white',
      '&:not(:disabled):hover': {
        color: 'pureWhite',
        bg: 'transparent',
        borderColor: 'pureWhite'
      },
      '&:not(:disabled):focus': {
        color: 'pureWhite',
        bg: 'transparent',
        borderColor: 'pureWhite'
      }
    },
    green: {
      color: 'black',
      border: 0,
      bg: 'green',
      borderColor: 'green',
      '&:not(:disabled):hover': {
        color: 'green',
        bg: 'transparent',
        borderColor: 'green'
      },
      '&:not(:disabled):focus': {
        color: 'green',
        bg: 'transparent',
        borderColor: 'green'
      }
    },
    purple: {
      color: 'black',
      border: 0,
      bg: 'purple',
      borderColor: 'purple',
      '&:not(:disabled):hover': {
        color: 'purple',
        bg: 'transparent',
        borderColor: 'purple'
      },
      '&:not(:disabled):focus': {
        color: 'purple',
        bg: 'transparent',
        borderColor: 'purple'
      }
    },
    orange: {
      color: 'black',
      border: 0,
      bg: 'orange',
      borderColor: 'orange',
      '&:not(:disabled):hover': {
        color: 'orange',
        bg: 'transparent',
        borderColor: 'orange'
      },
      '&:not(:disabled):focus': {
        color: 'orange',
        bg: 'transparent',
        borderColor: 'orange'
      }
    },
    text: {
      color: 'primary',
      border: 'none',
      padding: 0,
      fontSize: 1,
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
font-size: 12px;
padding: 10px 12px;
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

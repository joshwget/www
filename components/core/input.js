import React, { useState, forwardRef } from 'react';
import styled from 'styled-components';
import {
  typography,
  color,
  space,
  layout,
  border,
  shadow
} from 'styled-system';

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.colors.grays[0]};
  outline: none;
  margin: 0;
  transition: border-color 200ms;
  width: 100%;
  caret-color: ${props => props.theme.colors.primary};

  &:focus {
    border-color: ${props => props.theme.colors.white};
  }

  &::placeholder {
    font-size: 16px;
    color: ${props => props.theme.colors.grays[10]};
  }

  -webkit-autofill,
  -webkit-autofill:hover, 
  -webkit-autofill:focus, 
  -webkit-autofill:active  {
      box-shadow: 0 0 0 30px ${props =>
        props.theme.colors.grays[1]} inset !important;
  }

  ${space} ${border} ${layout} ${color} ${typography} ${shadow}
`;

StyledInput.defaultProps = {
  color: 'white',
  bg: 'grays.0',
  borderRadius: 1,
  fontWeight: 2,
  boxShadow: 0,
  fontSize: 2
};

const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref} padding={3} {...props} />;
});

export default Input;

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
  border: 1px solid ${props => props.theme.colors.primary};
  outline: none;
  margin: 0;
  transition: ${props => props.theme.transitions[0]};
  width: 100%;
  caret-color: ${props => props.theme.colors.primary};
  padding: 8px;

  &:not(:disabled):focus {
    box-shadow: 0px 0px 0px 1px ${props => props.theme.colors.primary} inset;
  }

  &::placeholder {
    font-size: 16px;
    color: ${props => props.theme.colors.grays[8]};
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
  bg: 'transparent',
  borderRadius: 1,
  fontWeight: 1,
  boxShadow: 0,
  fontSize: 2
};

const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;

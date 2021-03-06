import React from 'react';
import styled, { css } from 'styled-components';
import { space, color, typography } from 'styled-system';

import { Row } from './core';

const Container = styled(Row)``;

const styles = css`
  border: none;
  outline: none;
  border-radius: 0;
  transition: ${props => props.theme.transitions[0]};
  border-radius: 4px;
  padding: 10px 14px;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;

  &:not(:last-child) {
    margin-right: 18px;
  }

  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights[2]};
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  background-color: ${props =>
    props.active ? props.theme.colors.black : 'transparent'};
  &:hover {
    background-color: ${props => props.theme.colors.black};
  }
`;

const LinkTab = styled.a`
  text-decoration: none !important;

  ${color} ${typography} ${space}

  ${styles}
`;

const ButtonTab = styled.button`
  appearance: none;

  ${color} ${typography} ${space}

  ${styles}
`;

const Tab = ({ title, href, onClick, active = true }) => {
  if (href) {
    return <LinkTab href={href}>{title}</LinkTab>;
  }

  return (
    <ButtonTab onClick={onClick} active={active}>
      {title}
    </ButtonTab>
  );
};

const Tabs = ({ tabs = [] }) => {
  return (
    <Container marginX={4}>
      {tabs.map(tab => (
        <Tab key={tab.title} {...tab} />
      ))}
    </Container>
  );
};

export default Tabs;

import styled, { css } from 'styled-components';

import theme from '../../theme';

const listStyles = css`
  margin: 16px 0;
  list-style-type: none;
  padding: 0 0 0 24px;
  color: ${props => props.theme.colors.grays[11]};
`;

const itemStyles = css`
  margin: 8px 0;
`;

export const UnorderedList = styled.ul`
  ${listStyles}

  & > li {
    ${itemStyles}
  }

  & > li:before {
    content: '●';
    margin-right: 6px;
    color: ${theme.colors.primary};
  }
`;

export const OrderedList = styled.ol`
  ${listStyles}
  counter-reset: item;

  & > li {
    ${itemStyles}
    counter-increment: item;
  }

  & > li:before {
    transform: translateY(-2px);
    flex: 0 0 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    content: counter(item);
    font-size: 12px;
    background: ${theme.colors.primary};
    border-radius: 99px;
    width: 18px;
    height: 18px;
    font-weight: 500;
    margin-right: 6px;
    color: ${theme.colors.black};
  }
`;

const List = ({ ordered = false, items }) => {
  const Container = ordered ? StyledOrderedList : StyledUnorderedList;

  return (
    <Container>
      {items.map(item => (
        <StyledListItem>{item}</StyledListItem>
      ))}
    </Container>
  );
};

export default List;

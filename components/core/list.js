import styled from 'styled-components';

const StyledUnorderedList = styled.ul``;

const StyledOrderedList = styled.ol``;

const StyledListItem = styled.li``;

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

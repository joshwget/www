import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  flexbox,
  typography,
  position
} from 'styled-system';

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 48px 0;
max-width: ${props => props.theme.pageWidth}px;
  ${space} ${layout} ${color} ${border} ${typography} ${flexbox} ${position}
`;

export default Section;

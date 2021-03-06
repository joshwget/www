import styled from 'styled-components';
import { layout, space, color, typography, border } from 'styled-system';

const Paragraph = styled.p`
  word-wrap: break-word;
  color: ${props => props.theme.colors.grays[12]};
  margin: 16px 0;
  line-height: 1.4;
  ${color} ${space} ${typography} ${layout} ${border};
`;

export default Paragraph;

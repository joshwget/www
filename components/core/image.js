import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  typography,
  shadow
} from 'styled-system';

const Image = styled.img`
  user-select: none;
  ${space} ${layout} ${color} ${border} ${typography} ${shadow}
`;

export default Image;

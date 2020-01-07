import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  flexbox,
  typography,
  shadow,
  position
} from 'styled-system';
import { motion } from 'framer-motion';

export const Box = styled.div`
  ${space} ${layout} ${color} ${border} ${typography} ${shadow} ${position} ${flexbox}
`;

export const Row = styled(Box)``;
Row.defaultProps = {
  display: 'flex'
};

export const Column = styled(Row)``;
Column.defaultProps = {
  flexDirection: 'column'
};

export const Motion = styled(motion.div)`
  ${space} ${layout} ${color} ${border} ${typography} ${shadow} ${position} ${flexbox}
`;

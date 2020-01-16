import styled from 'styled-components';

import theme from '../../theme';
import { Column, Box } from './box';

export const StyledSection = styled(Box).attrs({ as: 'section' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = ({ children, ...props }) => (
  <StyledSection paddingY={10} {...props}>
    <Column
      maxWidth={theme.pageWidth}
      width="100%"
      paddingX={6}
      alignItems="center"
    >
      {children}
    </Column>
  </StyledSection>
);

export default Section;

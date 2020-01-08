import styled from 'styled-components';

import Logo from './icons/logo';
import { Row, Column, Link, Text } from './core';

const links = [
  { href: '/docs', label: 'Documentation' },
  //{ href: '/blog', label: 'Blog' },
  { mailto: 'support@deviceplane.com', label: 'Support' },
  { href: '/careers', label: 'Careers' },
  //{ href: '/press', label: 'Press' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy' }
];

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 32px;
`;

const Container = styled(Column)`
  max-width: ${props => props.theme.pageWidth}px;
  width: 100%;
`;

const FooterLink = styled(Link)`
  text-decoration: none !important;
  transition: ${props => props.theme.transitions[0]};
  color: ${props => props.theme.colors.grays[8]};
  &:hover {
    color: ${props => props.theme.colors.pureWhite};
  }
  font-size: ${props => props.theme.fontSizes[0]}px;
`;

FooterLink.defaultProps = {
  color: 'grays.8'
};

const FooterNav = styled.nav`
  margin: 32px 0;
`;

const Footer = () => (
  <StyledFooter>
    <Container alignItems={['flex-start', 'center']}>
      <Column>
        <Link href="/">
          <Logo size={28} />
        </Link>
      </Column>

      <FooterNav>
        <Row flexDirection={['column', 'row']}>
          {links.map(({ href, label, mailto }) => (
            <FooterLink
              margin={['0 0 16px 0', 4]}
              key={href}
              href={mailto ? `mailto:${mailto}` : href}
            >
              {label}
            </FooterLink>
          ))}
        </Row>
      </FooterNav>

      <Text fontSize={0} fontWeight={2} color="grays.5">
        © deviceplane
      </Text>
    </Container>
  </StyledFooter>
);

export default Footer;

import styled from 'styled-components';

import Logo from './icons/logo';
import { Box, Row, Column, Link, Text } from './core';

const linkGroups = [
  [
    { href: '/docs', label: 'Documentation' },
    //{ href: '/blog', label: 'Blog' },
    { mailto: 'support@deviceplane.com', label: 'Support' },
    { href: '/careers', label: 'Careers' }
  ],
  [
    //{ href: '/press', label: 'Press' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/privacy', label: 'Privacy Policy' }
  ]
];

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
`;

const Container = styled(Column)`
  max-width: ${props => props.theme.pageWidth}px;
  align-items: center;
  width: 100%;
  padding: 64px 32px 32px;
`;

const FooterLink = styled(Link)`
  text-decoration: none !important;
  font-weight: 400;
  white-space: nowrap;
  transition: ${props => props.theme.transitions[0]};
  color: ${props => props.theme.colors.grays[8]};
  &:hover {
    color: ${props => props.theme.colors.pureWhite};
  }
  font-size: ${props => props.theme.fontSizes[1]}px;
  margin: 12px 0;
`;

FooterLink.defaultProps = {
  color: 'grays.8'
};

const FooterNav = styled(Box).attrs({ as: 'nav' })`
  display: flex;
  margin: 32px 0;
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Row marginBottom={4}>
        <Link href="/">
          <Logo size={36} />
        </Link>
      </Row>

      <FooterNav
        flexDirection={['column', 'row']}
        alignItems={['center', 'unset']}
      >
        {linkGroups.map(links =>
          links.map(({ href, label, mailto }) => (
            <FooterLink
              key={label}
              marginBottom={4}
              marginX={4}
              href={mailto ? `mailto:${mailto}` : href}
            >
              {label}
            </FooterLink>
          ))
        )}
      </FooterNav>

      <Row alignSelf="flex-start">
        <Text fontSize={0} color="grays.5" fontWeight={1}>
          © Deviceplane
        </Text>
      </Row>
    </Container>
  </StyledFooter>
);

export default Footer;

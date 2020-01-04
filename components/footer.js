import styled from 'styled-components';

import Logo from './icons/logo';
import { Column, Link, Text } from './core';

const links = [
  { href: '/docs', label: 'Documentation' },
  //{ href: '/blog', label: 'Blog' },
  { mailto: 'support@deviceplane.com', label: 'Support' },
  { href: '/careers', label: 'Careers' },
  //{ href: '/press', label: 'Press' },
  { href: '/legal', label: 'Legal & Privacy' }
];

const StyledFooter = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 64px 24px 24px 24px;
`;

const Container = styled(Column)`
  align-items: center;
  max-width: ${props => props.theme.pageWidth}px;
  width: 100%;
`;

const FooterLink = styled(Link)`
  text-decoration: none !important;
  transition: color 150ms;
  color: ${props => props.theme.colors.grays[5]};
  &:hover {
    color: ${props => props.theme.colors.white};
  }
  font-size: ${props => props.theme.fontSizes[1]}px;
  margin: 0 12px;
`;

FooterLink.defaultProps = {
  color: 'grays.8'
};

const FooterNav = styled.nav`
  margin: 32px 0;
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      <Column>
        <Link href="/">
          <Logo size={28} />
        </Link>
      </Column>

      <FooterNav>
        <ul>
          {links.map(({ href, label, mailto }) => (
            <li key={label}>
              {mailto ? (
                <FooterLink href={`mailto:${mailto}`}>{label}</FooterLink>
              ) : (
                <FooterLink href={href}>{label}</FooterLink>
              )}
            </li>
          ))}
        </ul>
      </FooterNav>

      <Text fontSize={0} color="grays.5">
        © Deviceplane
      </Text>
    </Container>

    <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
        display: flex;
      }

      li {
        display: flex;
      }

      .bottom {
        padding: 1rem;
        display: flex;
        justify-content: center;
      }

      .logo:hover :global(polyline) {
        stroke: var(--primary);
      }
      .logo:hover :global(polygon) {
        fill: var(--primary);
      }

      @media screen and (max-width: 600px) {
        .container {
          padding: 4rem 2rem;
          align-items: flex-start;
        }

        ul {
          flex-direction: column;
        }

        li {
          margin: 0.5rem 0;
        }
      }
    `}</style>
  </StyledFooter>
);

export default Footer;

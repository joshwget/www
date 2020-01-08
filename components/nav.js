import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { routeGroups as docRoutes } from './docs';
import Logo from './icons/logo';
import { Row, Column, Button, Text, Link, Icon } from './core';

const Overlay = styled(Column)`
  position: fixed;
  left: 0;
  top: 66px;
  padding: 32px;
  width: 100%;
  height: calc(100% - 64px);
  z-index: 1;
  background-color: ${props => props.theme.colors.black};
`;

const NavLink = styled(Link)`
  text-decoration: none !important;
  transition: ${props => props.theme.transitions[0]};
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  &:hover {
    color: ${props =>
      props.active ? props.theme.colors.primary : props.theme.colors.pureWhite};
  }
  margin-right: 24px;
  font-size: ${props => props.theme.fontSizes[1]}px;
`;

const MobileNavLinkContainer = styled(Row)`
  margin-left: ${props => (props.nested ? '16px' : 0)};
  margin-right: 0;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  color: ${props =>
    props.nested ? props.theme.colors.grays[8] : props.theme.colors.white};
`;

const MobileNavLink = styled(NavLink)`
  margin-right: 0;
  color: ${props => (props.active ? props.theme.colors.primary : 'inherit')};
`;

const MobileMenu = ({ show, pathname }) => {
  const isDocs = pathname.includes('/docs');
  const [expand, setExpand] = React.useState(isDocs);

  if (!show) {
    return null;
  }

  return (
    <Overlay>
      <Row alignSelf="stretch" justifyContent="center" marginBottom={6}>
        <Button
          title="Log in"
          variant="secondary"
          href="https://cloud.deviceplane.com/login"
          marginRight={6}
          flex={1}
        />

        <Button
          title="Sign up"
          href="https://cloud.deviceplane.com/register"
          flex={1}
        />
      </Row>

      <Column overflow="auto">
        <Row
          onClick={() => setExpand(!expand)}
          marginBottom={4}
          alignItems="center"
        >
          <Text
            color={isDocs ? 'primary' : 'white'}
            fontSize={1}
            fontWeight={2}
          >
            Documentation
          </Text>
          <Icon
            marginLeft={4}
            icon={expand ? 'chevron-down' : 'chevron-right'}
            size={16}
            color={isDocs ? 'primary' : 'white'}
          />
        </Row>

        {expand && (
          <Column
            borderLeft={0}
            borderColor={isDocs ? 'primary' : 'white'}
            paddingLeft={4}
            marginBottom={4}
          >
            {docRoutes.map(routes =>
              routes.map(({ href, title, nested }) => (
                <MobileNavLinkContainer key={title} nested={nested}>
                  <MobileNavLink
                    href={href}
                    active={title !== 'Managing' && pathname === href}
                  >
                    {title}
                  </MobileNavLink>
                </MobileNavLinkContainer>
              ))
            )}
          </Column>
        )}
        <MobileNavLinkContainer>
          <MobileNavLink href="mailto:support@deviceplane.com">
            Support
          </MobileNavLink>
        </MobileNavLinkContainer>
        <MobileNavLinkContainer>
          <MobileNavLink href="/careers" active={pathname === '/careers'}>
            Careers
          </MobileNavLink>
        </MobileNavLinkContainer>
        <MobileNavLinkContainer>
          <MobileNavLink href="/terms" active={pathname === '/terms'}>
            Terms of Service
          </MobileNavLink>
        </MobileNavLinkContainer>
        <MobileNavLinkContainer>
          <MobileNavLink href="/privacy" active={pathname === '/privacy'}>
            Privacy Policy
          </MobileNavLink>
        </MobileNavLinkContainer>
      </Column>
    </Overlay>
  );
};

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex: 1;
  z-index: 2;
  max-width: ${props => props.theme.pageWidth}px;
  align-self: stretch;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  padding: 32px;
`;

const Name = () => (
  <Link href="/">
    <Row marginRight={6} alignItems="center">
      <Logo />

      <Text
        fontWeight={2}
        fontSize="26px"
        color="#fff"
        marginLeft="8px"
        style={{ textTransform: 'none' }}
      >
        deviceplane
      </Text>
    </Row>
  </Link>
);

const Nav = ({ transparent }) => {
  const [overlay, setOverlay] = React.useState(false);
  const { pathname } = useRouter();

  return (
    <>
      <Row
        bg={transparent ? 'transparent' : 'black'}
        justifyContent="center"
        flex={1}
      >
        <StyledNav>
          <Row
            justifyContent="space-between"
            flex={1}
            alignItems="center"
            display={['none', 'none', 'flex']}
          >
            <Name />
            <Row justifyContent="flex-end" alignItems="center">
              <NavLink href="/docs" active={pathname.includes('docs')}>
                Documentation
              </NavLink>
              <NavLink href="mailto:support@deviceplane.com">Support</NavLink>
              <NavLink href="https://cloud.deviceplane.com/login">
                Log in
              </NavLink>
              <Button
                title="Sign up"
                href="https://cloud.deviceplane.com/register"
              />
            </Row>
          </Row>

          <Row
            flex={1}
            justifyContent="space-between"
            display={['flex', 'flex', 'none']}
          >
            <Name />
            <Row>
              <Button
                variant="icon"
                title={
                  <Icon
                    icon={overlay ? 'cross' : 'menu'}
                    size={24}
                    color="white"
                  />
                }
                onClick={() => setOverlay(!overlay)}
              />
            </Row>
          </Row>
        </StyledNav>
      </Row>

      <MobileMenu show={overlay} pathname={pathname} />
    </>
  );
};

export default Nav;

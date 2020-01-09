import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { routeGroups as docRoutes } from './docs';
import Logo from './icons/logo';
import { Box, Row, Column, Button, Text, Link, Icon } from './core';

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

const MobileNavLinkContainer = styled(Box)`
  margin-left: ${props => (props.nested ? '16px' : 0)};
  margin-right: 0;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
  flex-shrink: 0;
`;

const MobileNavLink = styled(NavLink)`
  color: ${props =>
    props.active
      ? props.theme.colors.primary
      : props.nested
      ? props.theme.colors.grays[8]
      : props.theme.colors.white};
  white-space: nowrap;
`;

const MobileMenu = ({ show, pathname }) => {
  const isDocs = pathname.includes('/docs');
  const [expand, setExpand] = React.useState(isDocs);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <Overlay>
      <Row
        alignSelf="stretch"
        justifyContent="center"
        marginBottom={6}
        flexShrink={0}
      >
        <Button
          title="Log in"
          variant="secondary"
          href="https://cloud.deviceplane.com/login"
          marginRight={6}
          flex={1}
        />

        <Button
          title="Start now"
          href="https://cloud.deviceplane.com/signup"
          flex={1}
        />
      </Row>

      <Column overflowY="auto">
        <Row
          onClick={() => setExpand(!expand)}
          marginBottom={4}
          alignItems="center"
          style={{ cursor: 'pointer' }}
          flexShrink={0}
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
            flexShrink={0}
            borderLeft={0}
            borderColor={isDocs ? 'primary' : 'white'}
            paddingLeft={4}
            marginBottom={4}
          >
            {docRoutes.map(routes =>
              routes.map(({ href, title, nested }) => (
                <MobileNavLinkContainer nested={nested}>
                  <MobileNavLink
                    key={title}
                    href={href}
                    nested={nested}
                    active={
                      title === 'Quick start'
                        ? pathname === '/docs' || pathname === href
                        : title === 'Managing'
                        ? false
                        : pathname === href
                    }
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
  display: flex;
  flex: 1;
  max-width: ${props => props.theme.pageWidth}px;
  align-self: stretch;
  padding: 32px;
`;

const Header = styled.header`
  display: flex;
  z-index: 2;
  background-color: ${props => (props.transparent ? 'transparent' : 'black')};
  justify-content: center;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
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
      <Header transparent={transparent}>
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
                href="https://cloud.deviceplane.com/signup"
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
      </Header>

      <MobileMenu show={overlay} pathname={pathname} />
    </>
  );
};

export default Nav;

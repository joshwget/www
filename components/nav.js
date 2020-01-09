import React from 'react';
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

const MobileNavLink = styled(NavLink)`
  margin-left: ${props => (props.nested ? '16px' : 0)};
  margin-right: 0;
  margin-bottom: 16px;
  color: ${props =>
    props.active
      ? props.theme.colors.primary
      : props.nested
      ? props.theme.colors.grays[8]
      : props.theme.colors.white};
  flex: 0;
  white-space: nowrap;

  &:last-child {
    margin-bottom: 0;
  }
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
          title="Start now"
          href="https://cloud.deviceplane.com/signup"
          flex={1}
        />
      </Row>

      <Column height="100%" overflow="hidden">
        <Column alignItems="flex-start" flex={1} overflow="auto">
          <Row
            onClick={() => setExpand(!expand)}
            marginBottom={4}
            alignItems="center"
            style={{ cursor: 'pointer' }}
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
              alignItems="flex-start"
            >
              {docRoutes.map(routes =>
                routes.map(({ href, title, nested }) => (
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
                ))
              )}
            </Column>
          )}

          <Row marginBottom={4} flex={0}>
            <MobileNavLink href="mailto:support@deviceplane.com">
              Support
            </MobileNavLink>
          </Row>
          <Row marginBottom={4} flex={0}>
            <MobileNavLink href="/careers" active={pathname === '/careers'}>
              Careers
            </MobileNavLink>
          </Row>
          <Row marginBottom={4} flex={0}>
            <MobileNavLink href="/terms" active={pathname === '/terms'}>
              Terms of Service
            </MobileNavLink>
          </Row>
          <Row marginBottom={4} flex={0}>
            <MobileNavLink href="/privacy" active={pathname === '/privacy'}>
              Privacy Policy
            </MobileNavLink>
          </Row>
        </Column>
      </Column>

      <style jsx global>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
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

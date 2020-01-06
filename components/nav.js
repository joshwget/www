import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { routeGroups as docRoutes } from './docs';
import Logo from './icons/logo';
import { Row, Column, Button, Text, Link } from './core';

const Overlay = styled(Column)`
  display: ${props => (props.show ? 'block' : 'none')};
  box-sizing: border-box;
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  min-height: 100%;
  padding: 1rem 2rem;
  z-index: 1;
`;

const NavLink = styled(Link)`
  text-decoration: none !important;
  transition: color 150ms;
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};
  &:hover {
    color: ${props =>
      props.active ? props.theme.colors.primary : props.theme.colors.pureWhite};
  }
  margin-right: 24px;
  font-size: ${props => props.theme.fontSizes[1]}px;
`;

const MobileNav = ({ show, pathname }) => {
  const [expand, setExpand] = React.useState(pathname.includes('/docs'));

  return (
    <Overlay>
      <Column>
        <Row>
          <Button
            title="Log in"
            variant="text"
            href="https://cloud.deviceplane.com/login"
          />

          <Button
            title="Sign up"
            href="https://cloud.deviceplane.com/register"
          />
        </Row>

        <ul>
          <li>
            <div className="expander" onClick={() => setExpand(!expand)}>
              <NavLink>Documentation</NavLink>
              <img className="caret" src="/caret.svg" />
            </div>
          </li>
          <Column>
            {docRoutes.map(routes =>
              routes.map(({ href, title, nested }) => (
                <NavLink href={href} nested={nested}>
                  {title}
                </NavLink>
              ))
            )}
          </Column>
          <li>
            <NavLink href="mailto:support@deviceplane.com">Support</NavLink>
          </li>
          <li>
            <NavLink href="/careers">Careers</NavLink>
          </li>
          <li>
            <NavLink href="/legal">Legal & Privacy</NavLink>
          </li>
        </ul>
      </Column>

      <style jsx>
        {`
          @keyframes slideDown {
            100% {
              transform: translateY(0);
            }
          }
          @keyframes fadeIn {
            100% {
              opacity: 1;
            }
          }

          a {
            text-decoration: none;
            color: var(--white);
          }
          .arrow {
            display: flex;
            margin-left: 0.75rem;
          }
          .arrow :global(svg) {
            fill: var(--white);
          }
          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
          li a {
            border-bottom: 2px solid var(--black);
          }
          li a.selected {
            border-color: var(--primary);
          }
          li:not(:last-child) {
            margin-bottom: 1.25rem;
          }
          .docs {
            border-left: 2px solid var(--primary);
            margin-bottom: 1.25rem;
            display: ${expand ? 'block' : 'none'};
            user-select: none;
          }
          .doc-route {
            margin-left: 1rem;
          }
          .doc-route.nested {
            margin-left: 2rem;
          }
          .expander {
            display: flex;
            align-items: start;
          }
          .expander a {
            color: ${expand ? 'var(--primary)' : 'var(--white)'};
          }
          .caret {
            width: 0.8rem;
            margin-left: 0.5rem;
            transform: rotate(${expand ? 0 : -90}deg);
            padding-top: 0.25rem;
          }
        `}
      </style>
    </Overlay>
  );
};

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  z-index: 2;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.sizes[3]}px ${props => props.theme.sizes[4]}px;
  background-color: ${props => props.theme.colors.black};
`;

const Container = styled(Row)`
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Nav = () => {
  const [overlay, setOverlay] = React.useState(false);
  const { pathname } = useRouter();

  return (
    <StyledNav>
      <Container>
        <Row alignItems="center">
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
        </Row>
        <Row justifyContent="flex-end" alignItems="center">
          <NavLink href="/docs" active={pathname.includes('docs')}>
            Documentation
          </NavLink>
          <NavLink href="mailto:support@deviceplane.com">Support</NavLink>
          <NavLink href="https://cloud.deviceplane.com/login">Log in</NavLink>
          <Button
            title="Sign up"
            href="https://cloud.deviceplane.com/register"
          />
        </Row>
      </Container>

      <MobileNav show={overlay} pathname={pathname} />
      {/* 
      <div className="mobile">
        <Row padding={2} flex={1} justifyContent="space-between">
          <Row className="left">
            <NavLink href="/">
              <div className="logo">
                <img src="/logo.svg" />

                <a className="name">deviceplane</a>
              </div>
            </NavLink>
          </Row>
          <Row>
            <button onClick={() => setOverlay(!overlay)}>
              <img className="cancel" src="/cancel.svg" />
              <img className="hamburger" src="/hamburger.svg" />
            </button>
          </Row>
        </Row>
      </div> */}

      <style jsx>{`
        @keyframes fadeIn {
          100% {
            opacity: 1;
          }
        }
        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-right: 1rem;
          margin-bottom: 0.55rem;
        }
        img {
          width: 56px;
          height: 56px;
        }

        .hamburger,
        .cancel {
          opacity: 0;
          animation: fadeIn 200ms;
          animation-fill-mode: forwards;
        }

        .hamburger {
          display: ${overlay ? 'none' : 'block'};
          width: 1.5rem;
        }
        .cancel {
          display: ${overlay ? 'block' : 'none'};
          width: 1.25rem;
        }

        @media screen and (max-width: 760px) {
          .logo {
            margin-right: 0.5rem;
          }
          .name {
            display: none;
          }
        }

        @media screen and (max-width: 600px) {
          .mobile {
            display: flex;
            align-items: center;
          }
          .name {
            display: flex;
          }
          .desktop {
            display: none;
          }
          .container {
            padding: 1rem 2rem;
          }
        }
      `}</style>
    </StyledNav>
  );
};

export default Nav;

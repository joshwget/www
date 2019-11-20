import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { routes as docRoutes } from './docs';

const MobileNav = ({ show, pathname }) => {
  const [expand, setExpand] = React.useState(pathname.includes('/docs'));

  return (
    <div className="overlay">
      <div className="container">
        <div className="row">
          <a
            className="mobile-login"
            href="https://cloud.deviceplane.com/login"
          >
            Log in
          </a>

          <a
            className="mobile-signup"
            href="https://cloud.deviceplane.com/register"
          >
            Sign up
          </a>
        </div>

        <ul>
          <li>
            <div className="expander" onClick={() => setExpand(!expand)}>
              <a>Documentation</a>
              <img className="caret" src="/caret.svg" />
            </div>
          </li>
          <div className="docs">
            <li className="doc-route">
              <Link href="/docs/quick-start">
                <a
                  className={
                    pathname === '/docs/quick-start' || pathname === '/docs'
                      ? 'selected'
                      : ''
                  }
                >
                  Quick start
                </a>
              </Link>
            </li>
            {docRoutes
              .slice(1, docRoutes.length)
              .map(({ href, title, nested }) => (
                <li
                  key={href}
                  className={nested ? 'doc-route nested' : 'doc-route'}
                >
                  <Link href={href}>
                    <a className={href === pathname ? 'selected' : ''}>
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
          </div>
          <li>
            <a href="mailto:support@deviceplane.com">Support</a>
          </li>
          <li>
            <Link href="/careers">
              <a className={pathname.includes('/careers') ? 'selected' : ''}>
                Careers
              </a>
            </Link>
          </li>
          <li>
            <Link href="/legal">
              <a className={pathname.includes('/legal') ? 'selected' : ''}>
                Legal & Privacy
              </a>
            </Link>
          </li>
        </ul>
      </div>

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
          .overlay {
            display: ${show ? 'block' : 'none'};
            box-sizing: border-box;
            position: absolute;
            top: 5rem;
            left: 0;
            width: 100%;
            height: 45rem;
            min-height: 100%;
            padding: 1rem 2rem;
            background-color: var(--black);
            z-index: 1;
          }
          .row {
            display: flex;
            margin-bottom: 2rem;
          }
          .mobile-login,
          .mobile-signup {
            display: flex;
            flex: 1;
            height: 2.5rem;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            font-weight: 500;
            border-radius: var(--radius);
          }
          .mobile-login {
            color: var(--white);
            border: 2px solid var(--white);
            margin-right: 1rem;
          }
          .mobile-signup {
            color: var(--black);
            background-color: var(--primary);
            border: 2px solid var(--primary);
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
    </div>
  );
};

const Nav = () => {
  const [overlay, setOverlay] = React.useState(false);
  const { pathname } = useRouter();

  return (
    <nav>
      <div className="container desktop">
        <div className="left">
          <Link href="/">
            <div className="logo">
              <img src="/logo-white.svg" />

              <a className="name">deviceplane</a>
            </div>
          </Link>
          <ul>
            <li className="link">
              <Link href="/docs">
                <a className={pathname.includes('/docs') ? 'selected' : ''}>
                  Documentation
                </a>
              </Link>
            </li>
            <li className="link">
              <a href="mailto:support@deviceplane.com">Support</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <a href="https://cloud.deviceplane.com/login" className="login">
            Log in
          </a>
          <a href="https://cloud.deviceplane.com/register" className="signup">
            Sign up
          </a>
        </div>
      </div>

      <MobileNav show={overlay} pathname={pathname} />

      <div className="mobile">
        <div className="container">
          <div className="left">
            <Link href="/">
              <div className="logo">
                <img src="/logo-white.svg" />

                <a className="name">deviceplane</a>
              </div>
            </Link>
          </div>
          <div className="right">
            <button onClick={() => setOverlay(!overlay)}>
              <img className="cancel" src="/cancel.svg" />
              <img className="hamburger" src="/hamburger.svg" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          100% {
            opacity: 1;
          }
        }
        nav {
          display: flex;
          justify-content: center;
          background-color: var(--black);
          color: var(--white);
        }
        .container {
          max-width: var(--page-width);
          padding: 2rem 2rem;
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          margin: 0;
          padding: 0;
          display: flex;
        }
        li {
          display: flex;
        }
        a {
          text-decoration: none;
          user-select: none;
        }

        .link {
          margin: 0 1rem;
        }
        .link a {
          color: var(--white);
          padding-bottom: 4px;
          border-bottom: 2px solid var(--black);
          transition: border-color 150ms, color 150ms;
        }
        .link a:not(.selected):hover {
          border-color: var(--primary);
        }
        .link a.selected {
          color: var(--primary);
        }

        .name {
          font-size: 28px;
          font-weight: 300;
          margin-right: 1rem;
        }
        .login {
          margin-right: 2rem;
          color: var(--white);
          transition: opacity 200ms;
        }
        .login:hover {
          opacity: 0.9;
        }
        .signup {
          background-color: var(--primary);
          border-radius: var(--radius);
          padding: 0.7rem 1rem;
          color: #000;
          transition: opacity 200ms;
        }

        .signup:hover {
          opacity: 0.9;
        }
        .left,
        .right {
          display: flex;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-right: 1rem;
          margin-bottom: 0.55rem;
        }
        img {
          width: 3rem;
          height: 3rem;
        }

        .mobile {
          position: relative;
          display: none;
          flex: 1;
          background-color: var(--black);
          z-index: 2;
          height: 5rem;
        }

        .mobile button {
          padding: 0;
          margin: 0;
          background: none;
          border: none;
          outline: none;
          appearance: none;
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

        @media screen and (max-width: 700px) {
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
    </nav>
  );
};

export default Nav;

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav id="nav">
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
              <Link href="mailto:support@deviceplane.com">
                <a>Support</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <a href="/login" className="login">
            Log in
          </a>
          <a href="/signup" className="signup">
            Sign up
          </a>
        </div>
      </div>

      <div className="container mobile">
        <div className="left">
          <Link href="/">
            <div className="logo">
              <img src="/logo-white.svg" />
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          background-color: var(--black);
        }
        .container {
          width: 100%;
          max-width: var(--page-width);
          padding: 2rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ul {
          margin: 6px 0 0 0;
          padding: 0;
          display: flex;
          align-items: center;
        }
        li {
          display: flex;
        }
        a {
          color: var(--white);
          text-decoration: none;
          user-select: none;
        }

        .link {
          font-size: 1rem;
          font-weight: 500;
          margin: 0 0.5rem;
        }
        .link a {
          padding-bottom: 2px;
          border-bottom: 2px solid var(--black);
          transition: border-color 150ms, color 150ms;
        }
        .link a:not(.selected):hover {
          border-color: var(--secondary);
        }
        .link a.selected {
          color: var(--secondary);
        }

        .name {
          font-size: 1.5rem;
          font-weight: 300;
        }
        .login {
          margin-right: 2rem;
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.85rem;
          transition: opacity 200ms;
        }
        .login:hover {
          opacity: 0.9;
        }
        .signup {
          background-color: var(--secondary);
          border-radius: 4px;
          padding: 0.75rem 1.25rem;
          color: var(--black);
          font-weight: 500;
          transition: opacity 150ms;
          text-transform: uppercase;
          font-size: 0.85rem;
        }

        .signup:hover {
          opacity: 0.9;
        }
        .left {
          display: flex;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-right: 2rem;
        }
        img {
          width: 48px;
          height: 48px;
        }

        .mobile {
          padding: 1rem;
          display: none;
        }

        .mobile img {
          width: 64px;
          height: 64px;
        }

        @media screen and (max-width: 768px) {
          .logo {
            margin-right: 1rem;
          }
          .name {
            display: none;
          }
          .container {
            padding: 1rem;
          }
        }

        @media screen and (max-width: 600px) {
          .mobile {
            display: flex;
          }
          .desktop {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Overlay = ({ show, pathname }) => (
  <div className="overlay">
    <div className="container">
      <div className="row">
        <a className="mobile-login" href="https://cloud.deviceplane.com/login">
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
          <Link href="/docs">
            <a className={pathname.includes('/docs') ? 'selected' : ''}>
              Documentation
            </a>
          </Link>
        </li>
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
          height: 100vh;
          width: 100%;
          padding: 1rem 2rem;
          background-color: var(--black);
          animation: slideDown 150ms;
          animation-fill-mode: forwards;
          transform: translateY(-100%);
          z-index: 1;
        }

        .container {
          opacity: 0;
          animation: fadeIn 100ms;
          animation-delay: 125ms;
          animation-fill-mode: forwards;
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
          border-radius: 4px;
        }

        .mobile-login {
          color: var(--white);
          border: 2px solid var(--white);
          margin-right: 1rem;
        }

        .mobile-signup {
          color: var(--black);
          background-color: var(--secondary);
          border: 2px solid var(--secondary);
        }

        ul {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }

        li a {
          padding-bottom: 0.25rem;
          border-bottom: 2px solid var(--black);
        }

        li a.selected {
          border-color: var(--secondary);
        }

        li:not(:last-child) {
          margin-bottom: 1.25rem;
        }
      `}
    </style>
  </div>
);

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

      <Overlay show={overlay} pathname={pathname} />

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
        }
        .container {
          max-width: var(--page-width);
          padding: 2rem;
          display: flex;
          flex: 1;
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
          margin: 0 1rem;
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
          transition: opacity 200ms;
        }
        .login:hover {
          opacity: 0.9;
        }
        .signup {
          background-color: var(--secondary);
          border-radius: 4px;
          padding: 0.6rem 1.25rem;
          color: var(--black);
          font-weight: 500;
          transition: opacity 150ms;
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
          margin-right: 1rem;
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

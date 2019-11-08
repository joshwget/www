import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/documentation', label: 'Documentation' },
  { href: '/blog', label: 'Blog' },
  { href: '/support', label: 'Support' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <div className="container">
      <div className="left">
        <div className="logo">
          <img src="/logo-white.svg" />
          <Link href="/">
            <a className="name">deviceplane</a>
          </Link>
        </div>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key} className="link">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="right">
        <a href="/login" className="login">
          Login
        </a>
        <a href="/signup" className="signup">
          Sign up
        </a>
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
      }
      .link {
        font-size: 1rem;
        font-weight: 400;
        margin: 0 0.5rem;
        transition: opacity 250ms;
        padding-bottom: 2px;
        border-bottom: 2px solid var(--black);
        transition: border-color 100ms;
      }
      .link:hover {
        border-color: var(--blue);
      }
      .name {
        font-size: 1.5rem;
        font-weight: 700;
        margin-right: 2rem;
        font-family: 'Exo 2', var(--font-family);
      }
      .login {
        margin-right: 1.5rem;
        font-weight: 600;
        transition: color 250ms;
      }
      .login:hover {
        color: var(--blue);
      }
      .signup {
        background-color: var(--white);
        border-radius: 4px;
        padding: 0.7rem 1.4rem;
        color: var(--black);
        font-weight: 600;
        transition: color 150ms;
      }

      .signup:hover {
        color: var(--blue);
      }
      .left {
        display: flex;
        align-items: center;
      }
      .logo {
        display: flex;
        align-items: center;
      }
      img {
        width: 48px;
        height: 48px;
      }
    `}</style>
  </nav>
);

export default Nav;

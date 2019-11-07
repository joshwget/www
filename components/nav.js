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
            <li key={key}>
              <a className="link" href={href}>
                {label}
              </a>
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
        opacity: 0.9;
        transition: opacity 250ms;
      }
      .link:hover {
        opacity: 1;
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
        opacity: 0.9;
        transition: opacity 250ms;
      }
      .login:hover {
        opacity: 1;
      }
      .signup {
        border: 2px solid var(--white);
        //background-color: var(--white);
        border-radius: 4px;
        padding: 0.7rem 1.4rem;
        color: var(--white);
        font-weight: 600;
        transition: border-color 150ms;
      }

      .signup:hover {
        border-color: var(--blue);
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

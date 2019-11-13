import Link from 'next/link';

import Logo from './logo';

const links = [
  { href: '/docs', label: 'Documentation' },
  //{ href: '/blog', label: 'Blog' },
  { mailto: 'support@deviceplane.com', label: 'Support' },
  { href: '/careers', label: 'Careers' },
  //{ href: '/press', label: 'Press' },
  { href: '/legal', label: 'Legal & Privacy' }
];

const Footer = () => (
  <footer>
    <div className="container">
      <div className="logo">
        <Link href="/">
          <a>
            <Logo width={36} height={36} />
          </a>
        </Link>
      </div>

      <nav>
        <ul>
          {links.map(({ href, label, mailto }) => (
            <li key={label}>
              {mailto ? (
                <a href={`mailto:${mailto}`} className="link">
                  {label}
                </a>
              ) : (
                <Link href={href}>
                  <a className="link">{label}</a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <style jsx>{`
      footer {
        background: var(--black);
        color: var(--white);
        margin-top: auto;
      }

      .container {
        max-width: var(--page-width);
        display: flex;
        align-self: stretch;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0;
        margin: 0 auto;
      }

      ul {
        margin: 0;
        padding: 0;
        display: flex;
      }

      li {
        display: flex;
        margin: 0 0.5rem;
      }

      .link {
        color: var(--white);
        opacity: 0.8;
        text-decoration: none;
        transition: opacity 250ms;
        font-size: 0.85rem;
      }

      .link:hover {
        opacity: 1;
      }

      .bottom {
        padding: 1rem;
        display: flex;
        justify-content: center;
      }

      .copyright {
        color: var(--white);
        opacity: 0.3;
        margin-top: 3rem;
        font-size: 10px;
      }

      .logo {
        margin-bottom: 2rem;
        cursor: pointer;
      }

      .logo:hover :global(polyline) {
        stroke: var(--secondary);
      }
      .logo:hover :global(polygon) {
        fill: var(--secondary);
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
  </footer>
);

export default Footer;

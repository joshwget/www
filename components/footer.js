import Logo from './logo';

const links = [
  { href: '/documentation', label: 'Documentation' },
  { href: '/blog', label: 'Blog' },
  { href: '/support', label: 'Support' },
  { href: '/careers', label: 'Careers' },
  { href: '/press', label: 'Press' },
  { href: '/legal', label: 'Legal & Privacy' }
].map(link => {
  link.key = `footer-link-${link.href}-${link.label}`;
  return link;
});

const Footer = () => (
  <footer>
    <div className="container">
      <div className="logo">
        <Logo width={64} height={64} hover />
      </div>

      <nav>
        <ul>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a className="link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <div className="bottom">
      <span className="copyright">deviceplane © 2019</span>
    </div>

    <style jsx>{`
      footer {
        background: var(--black);
        color: var(--white);
        display: flex;
        flex-direction: column;
        padding: 0 1rem 2rem 1rem;
        position: relative;
      }

      .container {
        width: 100%;
        margin: 0 auto;
        max-width: var(--page-width);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      ul {
        margin: 0;
        padding: 0;
        display: flex;
      }

      li {
        display: flex;
        margin: 0 1rem;
      }

      a {
        color: var(--white);
        opacity: 0.7;
        text-decoration: none;
        transition: opacity 250ms;
      }

      a:hover {
        opacity: 1;
      }

      .bottom {
        margin: 0 auto;
        width: 100%;
        padding: 1rem;
        max-width: var(--page-width);
      }

      .copyright {
        color: var(--white);
        opacity: 0.4;
        margin-top: 3rem;
        font-size: 10px;
      }

      .logo {
        margin-bottom: 4rem;
        cursor: pointer;
      }
    `}</style>
  </footer>
);

export default Footer;

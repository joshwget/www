import Logo from './logo';

const links = [
  { href: '/documentation', label: 'Documentation' },
  //{ href: '/blog', label: 'Blog' },
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
        <a href="#nav">
          <Logo width={36} height={36} />
        </a>
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

    {/* <div className="bottom">
      <span className="copyright">deviceplane © 2019</span>
    </div> */}

    <style jsx>{`
      footer {
        background: var(--black);
        color: var(--white);
        display: flex;
        flex-direction: column;
        padding: 0 1rem 4rem 1rem;
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

      .link {
        color: var(--white);
        opacity: 0.7;
        text-decoration: none;
        transition: opacity 250ms;
      }

      .link:hover {
        opacity: 1;
      }

      .logo :global(svg) {
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
    `}</style>
  </footer>
);

export default Footer;

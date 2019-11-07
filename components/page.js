const Page = ({ children }) => (
  <div className="page">
    {children}
    <style global jsx>{`
      :root {
        --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;

        --black: #000;
        --white: #fff;
        --blue: #194cfa;

        --page-width: 1080px;
      }

      html {
        height: 100%;
        font-size: 16px;
        scroll-behavior: smooth;
      }

      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: var(--font-family);
        font-smoothing: antialiased;
      }

      section {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: var(--page-width);
        width: 100%;
        padding: 4rem 1rem;
      }

      h1 {
        font-size: 3rem;
        margin: 0;
        font-family: 'Exo 2', var(--font-family);
      }

      h2 {
        font-size: 2rem;
        margin: 0;
        font-family: 'Exo 2', var(--font-family);
      }

      h3 {
        font-size: 1.6rem;
        margin: 0 0 1rem 0;
        font-family: 'Exo 2', var(--font-family);
      }

      h4 {
        font-size: 1.2rem;
        margin: 0;
      }

      .page {
      }
    `}</style>
  </div>
);

export default Page;

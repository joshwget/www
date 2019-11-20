const Page = ({ children }) => (
  <div className="page">
    {children}

    <style global jsx>
      {`
        :root {
          --font-family: 'Rubik', -apple-system, 'Roboto', 'Helvetica Neue',
            'Arial', sans-serif;

          --black: #000;
          --white: #fff;
          --primary: #57e3ff;
          --secondary: #57e3ff;

          --page-width: 1080px;

          --radius: 4px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 500;
        }

        html {
          height: 100%;
          font-size: 16px;
          scroll-behavior: smooth;
        }

        body {
          padding: 0;
          margin: 0;
          height: 100%;
          overflow-x: hidden;
          font-weight: 400;
          font-family: var(--font-family);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        p {
          line-height: 1.4em;
        }

        button {
          font-family: var(--font-family);
        }

        input,
        input::placeholder {
          color: var(--black);
          font-family: var(--font-family);
        }

        #__next {
          height: 100%;
          overflow-x: hidden;
        }
      `}
    </style>

    <style jsx>
      {`
        .page {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
      `}
    </style>
  </div>
);

export default Page;

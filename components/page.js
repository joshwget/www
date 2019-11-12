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
          --primary: #3ae8b0; //#543bff;
          --secondary: #3ae8b0;

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

        button {
          font-family: var(--font-family);
        }

        input,
        input::placeholder {
          font-family: var(--font-family);
        }
      `}
    </style>
  </div>
);

export default Page;

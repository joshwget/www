import React from 'react';
import { useRouter } from 'next/router';

const Page = ({ children }) => {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <div className="page">
      {children}

      <style global jsx>
        {`
          :root {
            --font-family: -apple-system, BlinkMacSystemFont, 'Roboto',
              'Helvetica Neue', sans-serif;

            --black: #000;
            --white: #fff;
            --bg: lightslategray;
            --primary: #57e3ff;

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
            background-color: slategray;
            color: #fff;
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
            font-size: 14px;
            font-weight: 500;
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
};

export default Page;

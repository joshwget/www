import { default as NextHead } from 'next/head';

const Head = ({ title }) => (
  <NextHead>
    <title>{title ? `${title} - deviceplane` : 'deviceplane'}</title>

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

export default Head;

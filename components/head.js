import { default as NextHead } from 'next/head';

const Head = ({ title }) => (
  <NextHead>
    <title>{title ? `${title} - deviceplane` : 'deviceplane'}</title>
    <link rel="icon" href="/favicon.ico" />
    <link
      href={`https://fonts.googleapis.com/css?family=Exo+2&display=swap`}
      rel="stylesheet"
    ></link>
  </NextHead>
);

export default Head;

import { default as NextHead } from 'next/head';

const Head = ({ title }) => (
  <NextHead>
    <title>{title ? `${title} | Deviceplane` : 'Deviceplane'}</title>

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta
      name="description"
      content="Update, monitor, and access remote devices and servers with ease. Let us handle the hard infrastructure problems around managing remote hardware so you stay focused on your business."
    />

    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

export default Head;

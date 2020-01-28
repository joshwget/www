import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { default as NextApp } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
  }

  ::selection {
    background-color: rgba(255,255,255,.99);
    color: #000;
  }

  html {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.default};
    font-size: 16px;
    font-weight: 400;
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }

  html,body {
    text-rendering: optimizelegibility;
    shape-rendering: geometricprecision;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
  }

  strong * {
    font-weight: 700 !important;
  }
`;

const RouteListener = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return null;
};

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Deviceplane | Manage your devices at the edge</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouteListener />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;

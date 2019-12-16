import React from 'react';
import { useRouter } from 'next/router';
import { default as NextApp } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.default};
    
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    background-color: ${props => props.theme.colors.pageBackground};
  }

  body {
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouteListener />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default App;

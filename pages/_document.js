import {
  default as NextDocument,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const INTERCOM_ID = 'vm7fcuub';

const Intercom = () => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.intercomSettings = {
        app_id: '${INTERCOM_ID}'
      };`
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + '${INTERCOM_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`
      }}
    />
  </>
);

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1, minimum-scale=1, width=device-width"
          />
          <meta httpEquiv="Content-Language" content="en" />
          <meta
            name="description"
            content="Deviceplane is a management tool for embedded systems and edge
        computing. We make it easy to securely update, monitor, and access your
        devices."
          />
          <meta property="og:url" content="https://deviceplane.com" />
          <meta
            property="og:title"
            content="Deviceplane | Manage your devices at the edge"
          />
          <meta
            property="og:description"
            content="Deviceplane is a management tool for embedded systems and edge
        computing. We make it easy to securely update, monitor, and access your
        devices."
          />
          <meta property="og:site_name" content="Deviceplane" />

          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900&display=swap"
            rel="stylesheet"
          />

          {process.env['NODE_ENV'] === 'development' ? null : <Intercom />}
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

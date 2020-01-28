import {
  default as NextDocument,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const INTERCOM_ID = 'vm7fcuub';
const SEGMENT_ID = 'EqiLytdu39FhdhOZ6yd0MFWPEjhaQMNq';

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

const Segment = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
    analytics.load("${SEGMENT_ID}");
    analytics.page();
    }}();`
    }}
  />
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
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />

          {process.env['NODE_ENV'] === 'development' ? null : (
            <>
              <Intercom />
              <Segment />
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default Document;

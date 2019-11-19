import { default as NextHead } from 'next/head';

const INTERCOM_ID = 'vm7fcuub';

const Head = ({ title }) => (
  <NextHead>
    <title>{title ? `${title} | Deviceplane` : 'Deviceplane'}</title>

    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta
      name="description"
      content="Update, monitor, and access remote devices and servers with ease. Let us handle the hard infrastructure problems around managing remote hardware so you stay focused on your business."
    />

    <link rel="icon" href="/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&display=swap"
      rel="stylesheet"
    />

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
  </NextHead>
);

export default Head;

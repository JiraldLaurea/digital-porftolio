// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content="#0070f3" />
                    <link rel="apple-touch-icon" href="/icons/icon-192.png" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script>
                        {`
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/service-worker.js').then(registration => {
                    console.log('SW registered: ', registration);
                  }).catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `}
                    </script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;

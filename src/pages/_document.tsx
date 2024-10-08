import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="dns-prefetch" href="//www.google.com" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/images/android-chrome-192x192.png" sizes="192x192" />
        </Head>
        <body className="font-raleway text-base font-normal leading-[1.875] text-black-2">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

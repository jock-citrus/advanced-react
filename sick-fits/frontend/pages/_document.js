import Document, { Html, Head, NextScript, Main } from 'next/document';

// This Document page is necessary because we need access to be able to do
// custom <Html> attributes as well as add the CSS inside of the <Head>.
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-au">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

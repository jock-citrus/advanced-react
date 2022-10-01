import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// This Document page is necessary because we need access to be able to do
// custom <Html> attributes as well as add the CSS inside of the <Head>.
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    // Goes through every component that needs to be rendered to the page
    // and see if any styles-components in those. If there is, it will rip
    // out the CSS.
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement();
    // Taking whatever the page initially had to get and then adding
    // on all the styles.
    return {...page, styleTags}
  }
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

import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render() {
    return (
      <Html>
        <Head />
        <title>Nexus</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class ColeDocument extends Document {

  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(
      App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>
            {this.title}
          </title>
          <meta charSet="utf-8"/>
          <meta name="viewport"
                content="initial-scale=1.0, width=device-width"/>
          <meta name="description"
                content="Cole Inman Full Stack Software Developer Resume and Project showcase"/>
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display+SC" rel="stylesheet"/>

          {this.props.styleTags}

        </Head>

        <body style={{ margin: 0 }}>
          <Main/>
          <NextScript/>
        </body>

      </html>
    )
  }
}

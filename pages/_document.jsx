import React from "react"
import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class ColeDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Cole Inman</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="Cole Inman Full Stack Software Engineer Resume and Project showcase"
          />
          <link rel="preconnect"
                href="https://fonts.googleapis.com" />
          <link rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
                rel="stylesheet" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon"
                href="/static/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body style={bodyStyle}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

// Styles
const bodyStyle = {
  margin: "0",
  backgroundColor: "black"
}

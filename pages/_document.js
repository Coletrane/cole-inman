import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import {ServerStyleSheet} from 'styled-components'


export default class ColeDocument extends Document {

  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>
            Cole Inman
          </title>
          <meta charSet="utf-8"/>
          <meta name="viewport"
                content="initial-scale=1.0, width=device-width"/>
          <meta name="description"
                content="Cole Inman Full Stack Software Developer Resume and Project showcase"/>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans|Vidaloka" rel="stylesheet"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
          {this.props.styleTags}
        </Head>

        <body style={bodyStyle}>
          <Main/>
          <NextScript/>
        </body>

      </html>
    )
  }
}

// Styles
const bodyStyle = {
  margin: "0"
}

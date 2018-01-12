import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class ColeDocument extends Document {

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

import React, {Component} from "react"

import {boxShadow, colors} from "../util/styles.js"
// Components
import Navigation from "./Navigation"

const title = "COLE INMAN"

export default class Header extends Component {

  render() {
    return (
        <header style={headerStyle}>
          <h1 style={titleStyle}>
            {title}
          </h1>
          <Navigation bottom={false}/>
        </header>
    )
  }
}

// Styles
const headerStyle = {
  color: colors.barFontColor,
  textAlign: "center",
  backgroundColor: colors.barColor,
  boxShadow: boxShadow,
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100%"
}

const titleStyle = {
  margin: 0
}


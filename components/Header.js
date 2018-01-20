import React, {Component} from "react"
import {boxShadow, colors} from "../util/styles.js"

// Components
import {TopNav} from "./Navigation"

const title = "Cole Inman"

export default class Header extends Component {

  render() {
    return (
        <header style={headerStyle}>
          <h1 style={titleStyle}>
            {title}
          </h1>
          {/*<img src="/static/img/linkedin.jpg"*/}
               {/*style={profilePicStyle}/>*/}
          <TopNav/>
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
  width: "100%",
  zIndex: "2"
}

const titleStyle = {
  margin: 0
}

const profilePicStyle = {
  width: "10%"
}

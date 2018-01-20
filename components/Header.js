import React, {Component} from "react"
import {boxShadow, topBarStyle} from "../util/styles.js"

// Components
import {TopNav} from "./Navigation"


export default class Header extends Component {

  render() {
    return (
        <header style={{
          ...headerStyle,
          ...topBarStyle
        }}>
          <TopNav/>
        </header>
    )
  }
}

// Styles
const headerStyle = {
  textAlign: "center",
  boxShadow: boxShadow,
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100%",
  zIndex: "2"
}

const profilePicStyle = {
  width: "10%"
}

import React, {Component} from "react"
import styled from 'styled-components'
import {
  boxShadow,
  topBarStyle,
  mediaQuery,
  titleStyle
} from "../util/styles.js"

// Components
import {TopNav} from "./Navigation"


export default class Header extends Component {

  render() {
    return (
        <header style={{
          ...headerStyle,
          ...topBarStyle
        }}>
          <MobileTitle style={{
            ...titleStyle
          }}>
            Cole Inman
          </MobileTitle>
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

const MobileTitle = styled.h1`
  ${mediaQuery.desktop`
    display: none;
  `}
  ${mediaQuery.tablet`
    display: block;
  `}
`

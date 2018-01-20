import React, {Component} from "react"
import styled from 'styled-components'
import {colors, mediaQuery} from "../util/styles.js"
import {isMobile} from "../util/functions"

// Components
import {BottomNav} from "./Navigation.js"
import Header from "./Header"


export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header/>
        <MainContent>
          {this.props.children}
        </MainContent>
        <BottomNav/>
      </div>
    )
  }
};

// Styles
const titleStyle = {
  color: "white",
  textAlign: "center"
}

const MainContent = styled.div`
  ${mediaQuery.ceiling`
    padding-top: 100px;
  `}
  ${mediaQuery.tablet`
    padding-top: 60px;
  `}
  margin-bottom: 60px;
`


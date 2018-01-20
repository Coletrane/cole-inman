import React, {Component} from "react"
import styled from 'styled-components'
import {mediaQuery} from "../util/styles.js"
import {svgDimensions} from "./Navigation"

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
const MainContent = styled.div`
  ${mediaQuery.ceiling`
    padding-top: 160px;
  `}
  ${mediaQuery.tablet`
    padding-top: 70px;
  `}
  margin-bottom: ${svgDimensions}
`


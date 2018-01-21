import React, {Component} from "react"
import styled from 'styled-components'
import {mediaQuery} from "../util/styles.js"
import {svgDimensions} from "./generic/NavIcons"
import {boxShadow, topBarStyle} from "../util/styles"

// Components
import Header from "./Header"
import NavIcons from "./generic/NavIcons"

export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header/>
        <MainContent>
          {this.props.children}
        </MainContent>
        <BottomNavStyle className="bottom-nav">
          <NavIcons/>
        </BottomNavStyle>
      </div>
    )
  }
};

// Styles
const MainContent = styled.div`
  ${mediaQuery.ceiling`
    padding-top: 300px;
  `}
  ${mediaQuery.tablet`
    padding-top: 70px;
  `}
  margin-bottom: ${svgDimensions}
`

const BottomNavStyle = styled.div`
  ${mediaQuery.ceiling`
    display: none;
  `}
  ${mediaQuery.tablet`
    display: inline;
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    text-align: center;
    background-color: ${topBarStyle.backgroundColor};
    box-shadow: ${boxShadow};
  `}
`


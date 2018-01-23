import React, {Component} from "react"
import styled from 'styled-components'
import {mediaQuery} from "../util/styles.js"
import {svgDimensions} from "./header/NavIcons"
import {boxShadow, topBarStyle} from "../util/styles"

// Components
import Header from "./header/Header"
import NavIcons from "./header/NavIcons"

export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header/>
        <MainContent>
          {this.props.children}
        </MainContent>
        <BottomNavStyle>
          <NavIcons/>
        </BottomNavStyle>
      </div>
    )
  }
};

// Styles
const MainContent = styled.div`
  ${mediaQuery.ceiling`
    padding-top: 600px;
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


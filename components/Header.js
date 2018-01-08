import React, {Component} from "react"
import styled from "styled-components"

import {boxShadow, colors} from "../util/styles.js"
// Components
import Navigation from "./Navigation"

const title = "COLE INMAN"

export default class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <header>
          <Title>
            {title}
          </Title>
          <Navigation bottom={false}/>
        </header>
      </HeaderWrapper>
    )
  }
}

// Styles
const HeaderWrapper = styled.div`
  color: ${colors.barFontColor};
  text-align: center;
  
  background-color: ${colors.barColor};
  box-shadow: ${boxShadow};
  
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
`

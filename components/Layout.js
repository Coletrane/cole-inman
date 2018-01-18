import React, {Component} from "react"
import styled from 'styled-components'
import {colors, mediaQuery} from "../util/styles.js"
import {isMobile} from "../util/functions"

// Components
import Navigation from "./Navigation.js"
import Header from "./Header"


export default class Layout extends Component {

  render() {
    return (
      <div>
        <Header/>
        <MainContent>
          {this.props.children}
        </MainContent>
        <Navigation bottom={true}/>
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
    padding-top: 80px;
  `}
  ${mediaQuery.tablet`
    padding-top: 30px;
  `}
  margin-bottom: 60px;
`


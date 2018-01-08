import React, {Component} from "react"
import styled from "styled-components"

import {colors} from "../util/styles.js"
import {isMobile} from "../util/functions"
// Components
import Navigation from "./Navigation.js"
import Header from "./Header"


export default class Layout extends Component {

  render() {
    return (
      <AppWrapper>
        <Header/>
        <MainContent children={this.props.children}/>
        <Navigation bottom={true}/>
      </AppWrapper>
    )
  }
};

class MainContent extends Component {

  constructor(props) {
    super(props)
    this.onResize = this.onResize.bind(this)
    this.state = {
      mobile: isMobile()
    }
  }

  onResize() {
    this.setState({
      mobile: isMobile()
    })
  }

  // Lifecycle
  componentDidMount() {
    if (process.browser) {
      window.addEventListener("resize", this.onResize)
    }
  }

  componentWillUnmount() {
    if (process.browser) {
      window.removeEventListener("resize", this.onResize)
    }
  }

  // Check if we are under the mobile threshold to avoid needless calls to render
  shouldComponentUpdate(nextProps, nextState) {
    return (isMobile() !== this.state.mobile)
  }

  render() {
    if (!this.state.mobile) {
      return (
        <MainContentDesktop>
          {this.props.children}
        </MainContentDesktop>
      )
    } else {
      return (
        <MainContentMobile>
          {this.props.children}
        </MainContentMobile>
      )
    }
  }
}

// Styles
const AppWrapper = styled.div`
  //background-color: #001880;
  // background-image: url('../static/img/dark-wood.png');
  
  header {
    background-color: ${colors.barColor};
  }
`
const AppBarWrapper = styled.div`
  
`

const Title = styled.div`
  color: white;
  text-align: center;
`

const MainContentDesktop = styled.div`
  margin-top: 100px;
  margin-bottom: 60px;
`

const MainContentMobile = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
`

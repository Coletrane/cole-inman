import React, {Component} from "react"
import styled from 'styled-components'
import {
  boxShadow,
  topBarStyle,
  mediaQuery,
  titleStyle
} from "../util/styles.js"

const minBarHeight = 72
const maxBarHeight = 500
const animationDone = 350

// This may be the first time I've used calculus/algebra since college
const barHeightLinear = (scroll) => {
  return (minBarHeight-maxBarHeight)/animationDone * scroll + maxBarHeight
}

// Components
import NavIcons from "./generic/NavIcons"

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      barStyleDynamic: {
        height: `${maxBarHeight}px`
      },
      navStyleDynamic: {
        width: "100%",
      },
      previousScrollY: 0
    }
  }

  // Helpers
  get title() {
    return "Cole Inman"
  }

  handleScroll(event) {
    // Defining this since window.scrollY can change during execution of this method
    const scroll = window.scrollY
      this.setState(prev => {

        let newState = {
          navStyleDynamic: {
            ...prev.navStyleDynamic
          },
          barStyleDynamic: {
            ...prev.barStyleDynamic
          },
          previousScrollY: scroll
        }

        let barChange = barHeightLinear(scroll)

        if (barChange > minBarHeight && barChange < maxBarHeight) {
          newState.barStyleDynamic.height = `${barChange}px`
        }
        if (scroll > animationDone) {
          newState.barStyleDynamic.height = `${minBarHeight}px`
        } else if (scroll === 0) {
          newState.barStyleDynamic.height = `${maxBarHeight}px`
        }

        return newState
      })
  }
  // Lifecycle
  componentDidMount() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll)
    }
  }

  componentWillUnmount() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll)
    }
  }

  render() {
    return (
        <header style={{
          ...headerStyle,
          ...topBarStyle}}>
          <MobileTitle style={{
            ...titleStyle}}>
            {this.title}
          </MobileTitle>
          <TopNavMedia>
            <div style={{
              ...this.state.barStyleDynamic,
              ...barStyle}}>
              <h1 style={{
                ...titleStyle}}>
                {this.title}
              </h1>
              <div style={{
                ...this.state.navStyleDynamic}}>
                <NavIcons/>
              </div>
            </div>
          </TopNavMedia>
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
  ${mediaQuery.ceiling`
    display: none;
  `}
  ${mediaQuery.tablet`
    display: block;
  `}
`

const TopNavMedia = styled.div`
  ${mediaQuery.desktop`
    display: block;
  `}
  ${mediaQuery.tablet`
    display: none;
  `}
`

const barStyle = {
  display: "grid",
  gridTemplateColumns: "50% 50%"
}

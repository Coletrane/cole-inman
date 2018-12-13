import React, { Component } from "react"
import styled from "styled-components"
import {
  boxShadow,
  topBarStyle,
  mediaQuery,
  titleStyle,
  subtitleStyle
} from "../../util/styles.js"

// Components
import Profile from "./Profile"
import NavIcons from "./NavIcons"

// Constants
const minBarHeight = 80
const maxBarHeight = 300
const animationDone = 350
const profileAnimationStart = 75

// This may be the first time I've used calculus/algebra since college
const barHeightLinear = scroll => {
  return ((minBarHeight - maxBarHeight) / animationDone) * scroll + maxBarHeight
}

export default class Header extends Component {
  // TODO: change bar height to css transition?
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      barStyleDynamic: {
        height: `${maxBarHeight}px`
      },
      scrollDirection: "none",
      profileFadeOutIn: "none",
      profileHasFaded: false,
      barIsCollapsed: false,
      previousScrollY: 0
    }
  }

  // Helpers
  get title() {
    return "Cole Inman"
  }

  get subtitle() {
    if (this.state.barIsCollapsed) {
      return null
    } else {
      return <h4 style={subtitleStyle}>Full Stack Software Developer</h4>
    }
  }

  handleScroll(event) {
    // Defining this since window.scrollY can change during execution of this method
    const scroll = window.scrollY
    this.setState(prev => {
      let newState = {
        ...this.state,
        previousScrollY: scroll
      }

      this.updateBarCollapsed(scroll, newState)
      this.updateScrollDirection(scroll, newState)
      this.updateProfile(scroll, newState)
      this.updateTopBar(newState)

      return newState
    })
  }

  updateBarCollapsed(scroll, newState) {
    if (scroll >= animationDone - 60) {
      newState.barIsCollapsed = true
    } else {
      newState.barIsCollapsed = false
    }
  }

  updateScrollDirection(scroll, newState) {
    if (scroll > this.state.previousScrollY) {
      newState.scrollDirection = "down"
    } else if (scroll < this.state.previousScrollY) {
      newState.scrollDirection = "up"
    } else {
      newState.scrollDirection = "none"
    }
  }

  updateProfile(scroll, newState) {
    if (
      window.scrollY >= profileAnimationStart &&
      newState.scrollDirection === "down"
    ) {
      if (!this.state.profileHasFaded) {
        newState.profileHasFaded = true
      }
      newState.profileFadeOutIn = "out"
    } else if (
      window.scrollY < profileAnimationStart &&
      newState.scrollDirection === "up"
    ) {
      newState.profileFadeOutIn = "in"
    }
  }

  updateTopBar(newState) {
    if (
      barHeightLinear(window.scrollY) > minBarHeight &&
      barHeightLinear(window.scrollY) < maxBarHeight
    ) {
      newState.barStyleDynamic.height = `${barHeightLinear(window.scrollY)}px`
    }
    if (window.scrollY > animationDone) {
      newState.barStyleDynamic.height = `${minBarHeight}px`
    } else if (window.scrollY === 0) {
      newState.barStyleDynamic.height = `${maxBarHeight}px`
    }
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
      <HeaderStyle style={topBarStyle}>
        <MobileTitle>{this.title}</MobileTitle>
        <TopNavMedia>
          <div
            style={{
              ...this.state.barStyleDynamic,
              ...barStyle
            }}
          >
            <div className="desktop-title">
              <h1 style={titleStyle}>{this.title}</h1>
              {this.subtitle}
            </div>
            <div className="nav-icons">
              <NavIcons />
            </div>
          </div>
          <Profile
            fadeOutIn={this.state.profileFadeOutIn}
            hasFaded={this.state.profileHasFaded}
            scrollDirection={this.state.scrollDirection}
          />
        </TopNavMedia>
      </HeaderStyle>
    )
  }
}

// Styles
const HeaderStyle = styled.div`
  box-shadow ${boxShadow};
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 2;
   
  .desktop-title {
    padding-left: 2rem;
  }
  .nav-icons {
    padding-right: 2rem;
    text-align: right;
    margin-top: 9px;
    margin-bottom: auto;
  }
`
const headerStyle = {
  textAlign: "center",
  boxShadow: boxShadow,
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100%",
  zIndex: "2"
}

const MobileTitle = styled.h1`
  ${mediaQuery.ceiling`
    display: none;
  `} ${mediaQuery.tablet`
    display: block;
    text-align: center;
  `};
`

const TopNavMedia = styled.div`
  ${mediaQuery.desktop`
    display: block;
  `} ${mediaQuery.tablet`
    display: none;
  `};
`

const barStyle = {
  display: "grid",
  gridTemplateColumns: "50% 50%"
}

import React, { Component } from "react"
import styled from "styled-components"
import { boxShadow, topBarStyle, mediaQuery, sizes } from "../../util/styles.js"
// Components
import Profile from "./Profile"
import NavIcons from "./NavIcons"

// Constants
const minBarHeight = 130
const maxBarHeight = 300
const animationDone = 350
const profileAnimationStart = 75

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

  componentDidMount() {
    this.handleScroll()
  }

  // Helpers

  handleScroll() {
    // Defining this since window.scrollY can change during execution of this method
    const scroll = window.scrollY
    this.setState(() => {
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
    if (window.innerWidth >= sizes.tablet) {
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
    } else {
      newState.barStyleDynamic.height = `${minBarHeight}px`
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
        <TopBarStyle
          style={{
            ...this.state.barStyleDynamic
          }}
        >
          <div className="title-container">
            <h1>Cole Inman</h1>
            <h2>Full Stack Software Developer</h2>
          </div>
          <div className="nav-icons">
            <NavIcons/>
          </div>
        </TopBarStyle>
        <ProfileStyle>
          <Profile
            fadeOutIn={this.state.profileFadeOutIn}
            hasFaded={this.state.profileHasFaded}
            scrollDirection={this.state.scrollDirection}
          />
        </ProfileStyle>
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
    margin-top: 24px;
    margin-bottom: auto;
  }
  
  .title-container {
    padding-left: .5rem;
  }
  
  h1 {
    margin-top: -.5rem;
    font-size: 4.5rem;
    color: white;
  }
  ${mediaQuery.tablet`
    h1 {
      font-size: 2rem;
      padding-top: 17px;
    }
    h2 {
      font-size: 1rem;
    }
  `}
  
`

const TopBarStyle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const ProfileStyle = styled.div`
  ${mediaQuery.tablet`
    display: none;
  `}
`


import React, {Component} from "react"
import styled from 'styled-components'
import {
  boxShadow,
  topBarStyle,
  mediaQuery,
  titleStyle
} from "../../util/styles.js"

// Components
import Profile from "./Profile"
import NavIcons from "./NavIcons"

// Constants
const minBarHeight = 72
const maxBarHeight = 300
const animationDone = 350
const profileAnimationStart = 150

// This may be the first time I've used calculus/algebra since college
const barHeightLinear = (scroll) => {
  return (minBarHeight-maxBarHeight)/animationDone * scroll + maxBarHeight
}

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
      profileFade: false,
      profileHasFaded: false,
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
          ...this.state,
          previousScrollY: scroll
        }

        if (scroll > profileAnimationStart) {
          newState.profileFade = true
          if (!this.state.profileHasFaded) {
            newState.profileHasFaded = true
          }
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
        <div style={{
          ...headerStyle,
          ...topBarStyle}}>
          <MobileTitle>
            {this.title}
          </MobileTitle>
          <TopNavMedia>
            <div style={{
              ...this.state.barStyleDynamic,
              ...barStyle}}>
              <h1 style={titleStyle}>
                {this.title}
              </h1>
              <div style={{
                ...this.state.navStyleDynamic}}>
                <NavIcons/>
              </div>
            </div>
             <Profile fade={this.state.profileFade}
                      hasFaded={this.state.profileHasFaded}/>
          </TopNavMedia>
        </div>
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

const MobileTitle = styled.h1`
  ${mediaQuery.ceiling`
    display: none;
  `}
  ${mediaQuery.tablet`
    display: block;
    text-align: center;
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

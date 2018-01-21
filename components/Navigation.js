import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import {
  boxShadow,
  topBarStyle,
  mediaQuery,
  titleStyle
} from "../util/styles.js"

// Components
import {
  FaEnvelopeSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinSquare
} from "react-icons/lib/fa"

const linkedIn = "https://www.linkedin.com/in/cole-inman-61738565/"
export const gitHub = "https://github.com/coletrane/" // exporting this for constructing github links in components
const facebook = "https://www.facebook.com/uhmcole"
const email = "eloc49@gmail.com"

export const svgDimensions = "3rem"

export class TopNav extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      barStyle: {
        height: "120px"
      },
      navStyle: {
        width: "100%",
        display: "block",
        margin: "auto"
      },
      previousScrollY: 0
    }
  }

  handleScroll(event) {
    const animationDone = 100

    if (window.scrollY < animationDone)
      this.setState(prev => {

        let newState = {
          navStyle: {
            ...prev.navStyle
          },
          barStyle: {
            ...prev.barStyle
          },
          previousScrollY: window.scrollY
        }

        // TODO: make this proptional to window.scrollY
        const iconAnimationFactor = 8
        const minLogoWidth = 24
        const maxLogoWidth = 100
        let iconChange = parseInt(prev.navStyle.width)

        const barAnimationFactor = 6
        const minBarWidth = 72
        const maxBarWidth = 150
        let barChange = parseInt(prev.barStyle.height)


        if (prev.previousScrollY < window.scrollY) {
          iconChange -= iconAnimationFactor
          barChange -= barAnimationFactor
        } else if (prev.previousScrollY > window.scrollY) {
          iconChange += iconAnimationFactor
          barChange += barAnimationFactor
        }

        if (iconChange > minLogoWidth && iconChange < maxLogoWidth) {
          newState.navStyle.width = `${iconChange}%`
        }
        // if (barChange > minBarWidth && barChange < maxBarWidth) {
        //   newState.barStyle.height = `${barChange}px`
        // }

        return newState
      })
  }

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
      <TopNavStyle>
        <div style={{
          ...this.state.barStyle
        }}>
          <h1 style={titleStyle}>
            Cole Inman
          </h1>
          <div style={{
            ...this.state.navStyle
          }}>
            <Icons/>
          </div>
        </div>
      </TopNavStyle>
    )
  }
}

const TopNavStyle = styled.div`
  ${mediaQuery.desktop`
    display: block;
    margin: auto;
  `}
  ${mediaQuery.tablet`
    display: none;
  `}
`

export class BottomNav extends Component {

  render() {
    return (
      <BottomNavStyle className="bottom-nav">
        <Icons/>
      </BottomNavStyle>
    )
  }
}

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
    background-image: ${topBarStyle.backgroundImage};
    box-shadow: ${boxShadow};
  `}
`

class Icons extends Component {

  render() {
    return (
      <IconsStyle>
        <span>
          <a href={linkedIn}>
            <FaLinkedinSquare/>
          </a>
        </span>
        <span>
          <a href={gitHub}>
            <FaGithubSquare/>
          </a>
        </span>
        <span>
          <a href={facebook}>
            <FaFacebookSquare/>
          </a>
        </span>
        <span>
          <a href={"mailto:" + email}>
            <FaEnvelopeSquare/>
          </a>
        </span>
      </IconsStyle>
    )
  }
}

const IconsStyle = styled.div` 
  svg {
    width: ${svgDimensions};
    height: ${svgDimensions};
    fill: white;
  } 
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  align-items: flex-start;
  
  span {
    order: 0;
    flex: 1 1 auto;
    align-self: auto;
  }
`

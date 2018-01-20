import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import {boxShadow, colors, mediaQuery} from "../util/styles.js"

// Components
import IconButton from "material-ui/IconButton"
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

export class TopNav extends Component {

  constructor(props) {
    super(props)
    // this.handleScroll.bind(this)
    this.state = {
      navStyle: {
        width: "100%"
      }
    }
  }

  // TODO: do a cool scroll animation
  // handleScroll() {
  //   const animationDone = 50
  //   console.log(this.navStyle)
  //   if (window.scrollY < animationDone) {
  //     this.setState(prev => {
  //       return {
  //         navStyle: {
  //           width: `${parseInt(prev.navStyle) / animationDone}%`
  //         }
  //       }
  //     })
  //   }
  // }
  //
  // componentDidMount() {
  //   if (process.browser) {
  //     window.addEventListener("scroll", this.handleScroll)
  //   }
  // }
  //
  // componentWillUnmount() {
  //   if (process.browser) {
  //     window.removeEventListener("scroll", this.handleScroll)
  //   }
  // }

  render() {
    return (
      <TopNavStyle style={this.state.navStyle}>
        <Icons/>
      </TopNavStyle>
    )
  }
}

const TopNavStyle = styled.div`
  ${mediaQuery.desktop`
    display: block;
    box-shadow: ${boxShadow};
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
  ${mediaQuery.desktop`
    display: none;
  `}
  ${mediaQuery.tablet`
    display: inline;
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    text-align: center;
    background-color: ${colors.barColor};
    box-shadow: ${boxShadow};
  `}
`

class Icons extends Component {

  render() {
    return (
      <IconsStyle>
        <span>
          <a href={linkedIn}>
            <IconButton aria-label="LinkedIn">
              <FaLinkedinSquare/>
            </IconButton>
          </a>
        </span>
        <span>
          <a href={gitHub}>
            <IconButton aria-label="Github">
              <FaGithubSquare/>
            </IconButton>
          </a>
        </span>
        <span>
          <a href={facebook}>
            <IconButton aria-label="Facebook">
              <FaFacebookSquare/>
            </IconButton>
          </a>
        </span>
        <span>
          <a href={"mailto:" + email}>
            <IconButton aria-label="Email">
              <FaEnvelopeSquare/>
            </IconButton>
          </a>
        </span>
      </IconsStyle>
    )
  }
}

const IconsStyle = styled.div` 
  svg {
    width: 3rem;
    height: 3rem;
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

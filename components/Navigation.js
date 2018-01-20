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

  render() {
    return (
      <TopNavStyle>
        <Icons/>
      </TopNavStyle>
    )
  }
}

const TopNavStyle = styled.div`
  ${mediaQuery.desktop`
    display: block;
    box-shadow: ${boxShadow};

  `}
  ${mediaQuery.tablet`
    display: none;
  `}
`

export class BottomNav extends Component {

  render() {
    return (
      <BottomNavStyle>
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
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background-color: ${colors.barColor};
    box-shadow: ${boxShadow};
  `}
`

class Icons extends Component {

  render() {
    return (
      <SvgStyle>
        <a href={linkedIn}>
          <IconButton aria-label="LinkedIn">
            <FaLinkedinSquare/>
          </IconButton>
        </a>
        <a href={gitHub}>
          <IconButton aria-label="Github">
            <FaGithubSquare/>
          </IconButton>
        </a>
        <a href={facebook}>
          <IconButton aria-label="Facebook">
            <FaFacebookSquare/>
          </IconButton>
        </a>
        <a href={"mailto:" + email}>
          <IconButton aria-label="Email">
            <FaEnvelopeSquare/>
          </IconButton>
        </a>
      </SvgStyle>
    )
  }
}

// Styles
const SvgStyle = styled.div` // Not sure why this doesn't work in Nav
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: white;
  } 
`


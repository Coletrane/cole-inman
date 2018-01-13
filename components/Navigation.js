import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import {boxShadow, colors, mediaQueries} from "../util/styles.js"
import {isMobile} from "../util/functions.js"

// Components
import IconButton from "material-ui/IconButton"
import MediaQuery from "react-responsive"
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

export default class Navigation extends Component {

  static propTypes = {
    bottom: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div>
        <MediaQuery query={mediaQueries.mobileAndDesktop.mobile}>
          <NavLinks style={bottomNav}/>
        </MediaQuery>
        <MediaQuery query={mediaQueries.mobileAndDesktop.desktop}>
          <NavLinks style={topNav}/>
        </MediaQuery>
      </div>
    )
  }
}

class NavLinks extends Component {
  render() {
    return (
      <SvgStyle style={this.props.style}>
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
const SvgStyle = styled.div`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: white;
  }
`
const topNav = {}

const bottomNav = {
  display: "flex",
  flexShrink: "0",
  justifyContent: "center",
  width: "100%",
  position: "fixed",
  left: "0px",
  bottom: "0px",
  backgroundColor: colors.barColor,
  boxShadow: boxShadow
}


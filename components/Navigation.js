import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

import {boxShadow, colors, mediaQuery} from "../util/styles.js"
import {isMobile} from "../util/functions.js"

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

export default class Navigation extends Component {

  static propTypes = {
    bottom: PropTypes.bool.isRequired
  }

  render() {
    return (
      <Nav>
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
      </Nav>
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
const Nav = styled.div`
  ${mediaQuery.desktop`
    display: block;
  `}
  ${mediaQuery.tablet`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
  `}
  background-color: ${colors.barColor};
  box-shadow: ${boxShadow};
  
  
`


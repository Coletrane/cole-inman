import React, { Component } from "react"
import styled from "styled-components"
import { mediaQuery } from "../../util/styles"
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
export const email = "eloc49@gmail.com"

export const svgDimensions = {
  mobile: "2.5rem",
  desktop: "4rem"
}

export default class Icons extends Component {
  render() {
    return (
      <IconsStyle>
        <span>
          <a href={linkedIn}>
            <FaLinkedinSquare />
          </a>
        </span>
        <span>
          <a href={facebook}>
            <FaFacebookSquare />
          </a>
        </span>
        <span>
          <a href={"mailto:" + email}>
            <FaEnvelopeSquare />
          </a>
        </span>
        <span>
          <a href={gitHub}>
            <FaGithubSquare />
          </a>
        </span>
      </IconsStyle>
    )
  }
}

const IconsStyle = styled.div`
  ${mediaQuery.ceiling`
    svg {
      width: ${svgDimensions.desktop};
      height: ${svgDimensions.desktop};
      fill: white;
    } 
  `} ${mediaQuery.tablet`
    svg {
      width: ${svgDimensions.mobile};
      height: ${svgDimensions.mobile};
      fill: white;
    }
    
    display flex;
    
    span {
      flex: 1 1 auto;
    } 
  `};
`

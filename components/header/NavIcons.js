import React, {Component} from "react"
import styled from "styled-components"

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

export const svgDimensions = "4rem"

export default class Icons extends Component {
  render() {
    return (
      <IconsStyle>
        <a href={linkedIn}>
          <FaLinkedinSquare/>
        </a>
        <a href={gitHub}>
          <FaGithubSquare/>
        </a>
        <a href={facebook}>
          <FaFacebookSquare/>
        </a>
        <a href={"mailto:" + email}>
          <FaEnvelopeSquare/>
        </a>
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
  
`

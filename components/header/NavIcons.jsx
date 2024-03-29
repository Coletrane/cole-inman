import React, { Component } from "react"
import styled from "styled-components"
import { mediaQuery } from "../../util/styles"
// Components
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiUpwork } from "react-icons/si"

const linkedIn = "https://www.linkedin.com/in/cole-inman-61738565/"
export const gitHub = "https://github.com/coletrane/" // exporting this for constructing github links in components
const upwork = "https://www.upwork.com/freelancers/~01003ea0c20a3ab5b5"
export const email = "eloc49@gmail.com"

export const svgDimensions = {
  mobile: "2rem",
  desktop: "2rem"
}

export default class NavIcons extends Component {
  render() {
    return (
      <IconsStyle>
        <span>
          <a href={linkedIn}>
            <FaLinkedin/>
          </a>
        </span>
        <span>
          <a href={gitHub}>
            <FaGithub/>
          </a>
        </span>
        <span>
          <a href={upwork}>
            <SiUpwork/>
          </a>
        </span>
      </IconsStyle>
    )
  }
}

const IconsStyle = styled.div`
  span {
    padding: 0 .25rem;
  }
  svg {
    fill: white;
  }
  ${mediaQuery.ceiling`
    svg {
      width: ${svgDimensions.desktop};
      height: ${svgDimensions.desktop};
    } 
  `} ${mediaQuery.tablet`
    svg {
      width: ${svgDimensions.mobile};
      height: ${svgDimensions.mobile};
    }
  `};
`

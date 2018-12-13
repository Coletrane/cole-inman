import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { mediaQuery } from "../../../util/styles"

// Components

export default class Skill extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired
  }

  get imgSrc() {
    let filename
    if (this.props.name.includes("(")) {
      filename = this.props.name.split(" ")[0].toLowerCase()
    } else {
      filename = this.props.name
        .split(" ")
        .join("")
        .toLowerCase()
    }

    return `/static/img/logos/${filename}.png`
  }

  render() {
    return (
      <div style={listItemStyle}>
        <LogoImg
          src={this.imgSrc}
          desktop={this.props.desktop}
          mobile={this.props.mobile}
          style={this.props.imgStyle}
        />
        <SkillName name={this.props.name} />
      </div>
    )
  }
}

// Using this to stop C name from being printed since its reduntant to the logo
function SkillName(props) {
  if (props.name !== "C") {
    return <div style={skillTitleStyle}>{props.name}</div>
  } else {
    return null
  }
}

// Styles
const listItemStyle = {
  // padding: "5px",
  // borderRadius: "5px"
}

const LogoImg = styled.img`
  ${mediaQuery.ceiling`
    width: ${props => props.desktop};
  `} ${mediaQuery.phablet`
    width: ${props => props.mobile};
  `};
`
const skillTitleStyle = {
  margin: "0",
  fontSize: ".8rem"
}

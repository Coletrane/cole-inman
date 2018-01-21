import React, {Component} from "react"
import styled from "styled-components"
import {mediaQuery} from "../../../util/styles"

// Components

export default class SkillsList extends Component {

  render() {
    return (
      <div>
        <span style={skillsListTitle}>
          {this.props.title}
        </span>
        <SkillsListColumns>
          {this.props.children}
        </SkillsListColumns>
      </div>
    )
  }
}

// Styles
const skillsListTitle = {
  margin: "0",
  fontSize: "2rem"
}

// TODO: make this flexbox?
const SkillsListColumns = styled.div`
  display: grid;
  text-align: center;
  ${mediaQuery.ceiling`
    grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
  `}
  ${mediaQuery.desktop`
    grid-template-columns: 20% 20% 20% 20% 20%;
  `}
  ${mediaQuery.dablet`
    grid-template-columns: 25% 25% 25% 25%; 
  `}
  ${mediaQuery.phablet`
    grid-template-columns: 33.3% 33.3% 33.3%;
  `}
`

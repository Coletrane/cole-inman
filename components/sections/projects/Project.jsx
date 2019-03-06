import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// Components
import ProjectButton from "./ProjectButton"
import Card from "../Card"
import CardHeader from "../CardHeader"

export default class Project extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    customButtons: PropTypes.object
  }

  // This method is needed as a check since we are appending
  // http:// to the beginning of the live site url
  get liveSite() {
    if (this.props.liveSite) {
      return `http://${this.props.liveSite}`
    }
  }

  render() {
    return (
      <ProjectCard>
        <Card>
          <CardHeader
            title={this.props.title}
            subheader={this.props.subheader}
          />
          <ProjectImg src={this.props.imgSrc} alt={this.props.title} />
          {this.props.children}
          <ProjectButton url={this.liveSite} text="Live Site" />
          <ProjectButton url={this.props.gitHub} text="Github Repo" />
          {this.props.customButtons}
        </Card>
      </ProjectCard>
    )
  }
}

// Styles
const ProjectCard = styled.div`
  margin-bottom: 2rem;
`

const ProjectImg = styled.img`
  width: 100%;
  height: auto;
`

const TechStackStyle = styled.div`
  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`

export const TechStack = props => {
  return (
    <TechStackStyle>
      <span>Tech Stack:</span>
      {props.children}
    </TechStackStyle>
  )
}

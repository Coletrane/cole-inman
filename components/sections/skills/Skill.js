import React, {Component} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {skillMediaQueries} from "../../../util/styles"

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
      filename = this.props.name.split(" ").join("").toLowerCase()
    }

    return `/static/img/logos/${filename}.png`
  }

  render() {
    return (
      <ListItem>
        <Img src={this.imgSrc}
             desktop={this.props.desktop}
             mobile={this.props.mobile}/>
        <SkillTitle> {this.props.name} </SkillTitle>
      </ListItem>
    )
  }
}

const ListItem = styled.div`
  padding: 5px;
  border-radius: 5px;
`

const SkillTitle = styled.div`
  margin: 0;
`

const Img = styled.img`
  @media (min-width: ${skillMediaQueries.minWidth}) {
    width: ${props => props.desktop};
  }
  @media (max-width: ${skillMediaQueries.maxWidth}) {
    width: ${props => props.mobile};
  }
`


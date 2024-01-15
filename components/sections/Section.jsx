import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// Components
import Card from "./Card"

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <SectionCard>
          <Card>{this.props.children}</Card>
        </SectionCard>
      </div>
    )
  }
}

export const Title = styled.div`
  text-align: center;
  color: white;
  text-shadow: 0px 3px 1px #000000;
  font-size: 4rem;
  font-family: "Cutive Mono", monospace !important;
  text-shadow: 4px 1px 1px #000000;
`

export const SectionCard = styled.div`
  margin: 0 10%;
`
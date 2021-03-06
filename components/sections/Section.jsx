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
        <Card>{this.props.children}</Card>
      </div>
    )
  }
}

export const Title = styled.div`
  text-align: center;
  color: white;
  text-shadow: 0px 3px 1px #000000;
  font-size: 4rem;
  font-family: "Lobster", cursive !important;
`

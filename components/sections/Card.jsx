import React, { Component } from "react"
import styled from "styled-components"
import { boxShadow } from "../../util/styles"

export default class Card extends Component {
  render() {
    return (
      <CardContainer>
        <CardStyle>{this.props.children}</CardStyle>
      </CardContainer>
    )
  }
}

// Styles
const CardContainer = styled.div`
  margin: 1rem;
`
const CardStyle = styled.div`
  background-color: white;
  box-shadow: ${boxShadow};
  padding: 1rem;
  opacity: 0.95;
  text-align: center;
`

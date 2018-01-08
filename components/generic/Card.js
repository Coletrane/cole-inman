import React, {Component} from "react"
import styled from "styled-components"
import {boxShadow} from "../../util/styles"

export default class Card extends Component {

  render() {
    return (
      <CardContainer>
        {this.props.children}
      </CardContainer>
    )
  }
}

const CardContainer = styled.div`
  box-shadow: ${boxShadow};
  padding: 1rem;
  margin: 1rem;
`

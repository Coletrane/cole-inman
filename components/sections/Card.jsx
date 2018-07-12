import React, { Component } from "react";
import styled from "styled-components";
import { boxShadow } from "../../util/styles";

export default class Card extends Component {
  render() {
    return (
      <CardContainer>
        <CardStyle className="card-style">{this.props.children}</CardStyle>
      </CardContainer>
    );
  }
}

// Styles
const CardContainer = styled.div`
  .card-style {
    margin: 1rem;
  }
  .card-style:last-child {
    margin: 1rem 1rem 0 1rem;
  }
`;
const CardStyle = styled.div`
  background-color: white;
  box-shadow: ${boxShadow};
  padding: 1rem;
  opacity: 0.95;
  text-align: center;
`;

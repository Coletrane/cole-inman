import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default class CardHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  };

  render() {
    return (
      <div>
        <Title>{this.props.title}</Title>
        <Subtitle text={this.props.subtitle} />
      </div>
    );
  }
}

function Subtitle(props) {
  if (props.subtitle) {
    return <h4>{props.subtitle}</h4>;
  } else {
    return null;
  }
}

// Styles
const Title = styled.span`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
`;

import React, { Component } from "react"
import PropTypes from "prop-types"
import { topBarStyle } from "../../../util/styles"
// Components

export default class ProjectButton extends Component {
  static propTypes = {
    url: PropTypes.string,
    text: PropTypes.string
  }

  render() {
    if (this.props.url && this.props.text) {
      return (
        <a href={this.props.url} className="btn btn-dark" style={buttonStyle}>
          {this.props.text}
        </a>
      )
    } else {
      return null
    }
  }
}

const buttonStyle = {
  margin: ".5rem",
  backgroundColor: topBarStyle.backgroundColor,
  borderRadius: "0"
}

import React, {Component} from "react"
import {boxShadow} from "../../util/styles"

export default class Card extends Component {

  render() {
    return (
      <div style={cardStyle}>
        {this.props.children}
      </div>
    )
  }
}

const cardStyle = {
  boxShadow: boxShadow,
  padding: "1rem",
  margin: "1rem"
}
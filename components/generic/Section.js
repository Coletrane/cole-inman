import React, {Component} from "react"
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
        <SectionHeader title={this.props.title}/>
          <Card>
          {this.props.children}
        </Card>
      </div>
    )
  }
}

export class SectionHeader extends Component {
  render() {
    return(
      <h1 style={headingStyle}>
        {this.props.title}
      </h1>
    )
  }
}

// Styles
const headingStyle = {
  textAlign: "center",
  color: "white",
  textShadow: "0px 3px 1px #000000"
}


import React, {Component} from "react"
import PropTypes from "prop-types"

export default class CardHeader extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <Subtitle text={this.props.subtitle}/>
      </div>
    )
  }
}

function Subtitle(props) {
  if (props.subtitle) {
    return (
      <h4>{props.subtitle}</h4>
    )
  } else {
    return (null)
  }
}

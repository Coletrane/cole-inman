import React, {Component} from "react"

// Components
import Button from "material-ui/Button"

export default class ProjectButton extends Component {

  render() {
    if (this.props.url && this.props.text) {
      return (
        <a href={this.props.url}>
          <Button raised>
            <span>
            {this.props.text}
            </span>
          </Button>
        </a>
      )
    } else {
      return (null)
    }
  }
}

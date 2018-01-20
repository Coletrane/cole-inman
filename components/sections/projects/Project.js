import React, {Component} from "react"
import PropTypes from "prop-types"

// Components
import ProjectButton from "../../generic/ProjectButton"
import Card from "../../generic/Card"
import CardHeader from "../../generic/CardHeader"

export default class Project extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    customButtons: PropTypes.object
  }

  // This method is needed as a check since we are appending
  // http:// to the beginning of the live site url
  get liveSite() {
    if (this.props.liveSite) {
      return `http://${this.props.liveSite}`
    }
  }

  render() {

    return (
      <div>
        <CardHeader title={this.props.title}
                    subheader={this.props.subheader}/>
        <img src={this.props.imgSrc}
             alt={this.props.title}
             style={projectImgStyle}/>
        {this.props.children}
        <ProjectButton url={this.liveSite}
                       text="Live Site"/>
        <ProjectButton url={this.props.gitHub}
                       text="Github Repo"/>
        {this.props.customButtons}
      </div>
    )
  }
}

// Styles
const projectImgStyle = {
  width: "100%",
  height: "auto"
}

const cardStyle = {
  backgroundColor: "black"
}

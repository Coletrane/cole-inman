import React, {Component} from "react"
import PropTypes from "prop-types"

// Components
import Button from "material-ui/Button"
import Card from "../../generic/Card"

export default class AbstractProject extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }

  render() {

    return (
      <Card>
        {/*<CardHeader title={this.props.title}*/}
        {/*subheader={this.props.subheader}/>*/}
        <img src={this.props.imgSrc}
             alt={this.props.title}
             style={projectImgStyle}/>
        {this.props.children}
        <ProjectButton url={"http://" + this.props.liveSite}
                       text="Live Site"/>
        <ProjectButton url={this.props.gitHub}
                       text="Github Repo"/>
      </Card>
    )
  }
}

function ProjectButton(props) {
  if (props.url && props.text) {
    return (
      <a href={props.url}>
        <Button raised>
          <span>
            {props.text}
          </span>
        </Button>
      </a>
    )
  } else {
    return (null)
  }
}

// Styles
const projectImgStyle = {
  width: "50%",
  height: "auto"
}

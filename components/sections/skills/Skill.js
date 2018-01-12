import React, {Component} from "react"
import PropTypes from "prop-types"
import {mediaQueries} from "../../../util/styles"

// Components
import MediaQuery from 'react-responsive'

export default class Skill extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    desktop: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired
  }

  get imgSrc() {
    let filename
    if (this.props.name.includes("(")) {
      filename = this.props.name.split(" ")[0].toLowerCase()
    } else {
      filename = this.props.name.split(" ").join("").toLowerCase()
    }

    return `/static/img/logos/${filename}.png`
  }

  render() {
    return (
      <div style={listItemStyle}>
        <MediaQuery query={mediaQueries.mobileAndDesktop.mobile}>
        <img src={this.imgSrc}
             style={skillImgStyle({
               width: this.props.mobile
             })}/>
        </MediaQuery>
        <MediaQuery query={mediaQueries.mobileAndDesktop.desktop}>
          <img src={this.imgSrc}
               style={skillImgStyle({
                 width: this.props.desktop
               })}/>
        </MediaQuery>
        <div style={skillTitleStyle}> {this.props.name} </div>
      </div>
    )
  }
}

const listItemStyle = {
  padding: "5px",
  borderRadius: "5px"
}

const skillTitleStyle = {
  margin: "0"
}

const skillImgStyle = (props) => {
  width: props.width
}

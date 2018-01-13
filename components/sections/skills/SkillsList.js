import React, {Component} from "react"
import {mediaQueries} from "../../../util/styles"

// Components
import MediaQuery from "react-responsive"

export default class SkillsList extends Component {

  mainDiv(style) {
    return (
      <div style={{...skillsList, ...style}}>
        {this.props.children}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3 style={skillsListTitle}>
          {this.props.title}
        </h3>
        <MediaQuery query={mediaQueries.all.mobile}>
          {this.mainDiv(skillsListMobile)}
        </MediaQuery>
        <MediaQuery query={mediaQueries.all.tablet}>
          {this.mainDiv(skillsListTablet)}
        </MediaQuery>
        <MediaQuery query={mediaQueries.all.desktop}>
          {this.mainDiv(skillsListDesktop)}
        </MediaQuery>
      </div>
    )
  }
}

// Styles
const skillsListTitle = {
  margin: "0"
}

const skillsList = {
  textAlign: "center",
  display: "grid"
}

const skillsListMobile = {
  gridTemplateColumns: "33.3% 33.3% 33.3%"
}

const skillsListTablet = {
  gridTemplateColumns: "25% 25% 25% 25%"
}

const skillsListDesktop = {
  gridTemplateColumns: "16.6% 16.6% 16.6% 16.6% 16.6% 16.6%"
}

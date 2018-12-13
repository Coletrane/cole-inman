import React, { Component } from "react"
import webshots from "../../../util/webshots"

// Components
import Project from "./Project"

export default class Handsmith extends Component {
  render() {
    return (
      <div>
        <Project
          title="Handsmith"
          subheader="Wordpress site with custom JS, HTML, and CSS"
          imgSrc={webshots.localSrc(webshots.pages.handsmith)}
          liveSite={webshots.pages.handsmith.url}
        >
          <p>
            Handsmith is a nonprofit organization with a mission to deliver
            bionic hands at a fraction of the current prices in the medical
            devices industry. I am responsible for maintenance and new features
            on this website. It uses Wordpress, but I often end up writing
            custom HTML,CSS, and JavaScript to accomplish new feature goals.
          </p>
        </Project>
      </div>
    )
  }
}

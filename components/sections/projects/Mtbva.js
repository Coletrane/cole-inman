import React, {Component} from "react"
import webshots from "../../../util/webshots"
import {gitHub} from "../../header/NavIcons"

// Components
import Project from "./Project"

export default class Mtbva extends Component {

  render() {
    return (
      <div>
        <Project title="Mountain Bike Virginia"
                 subheader="Server Side Rendered app using Vue.js, Nuxt.js, Node.js, and AWS EC2"
                 imgSrc={webshots.localSrc(webshots.pages.mtbva)}
                 liveSite={webshots.pages.mtbva.url}
                 gitHub={gitHub + "mountain-bike-virginia"}>
          <p>
            Site my father and I's bike race production business. Used for blog posts and race results.</p>
        </Project>
      </div>
    )
  }
}

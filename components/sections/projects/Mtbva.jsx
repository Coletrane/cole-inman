import React, { Component } from "react"
import webshots from "../../../util/webshots"
import { gitHub } from "../../header/NavIcons"
// Components
import Project, { TechStack } from "./Project"
import ProjectButton from "./ProjectButton"

export default class Mtbva extends Component {
  render() {
    return (
      <div>
        <Project
          title="Mountain Bike Virginia"
          subheader="Server Side Rendered app using Vue.js, Nuxt.js, Node.js, and AWS EC2"
          imgSrc={webshots.localSrc(webshots.pages.mtbva)}
          liveSite={webshots.pages.mtbva.url}
          gitHub={gitHub + "mountain-bike-virginia"}>
          <p>
            Mountain Bike Virginia is the website for my father and I's bike
            race hosting business. We use it for blog posts and race results.
          </p>
          <TechStack>
            <ul>
              <li>Ghost CMS</li>
              <li>Node.js</li>
              <li>AWS EC2</li>
              <li>Cloudflare</li>
            </ul>
          </TechStack>
          <ProjectButton
            url={`https://${webshots.pages.mtbva.url}`}
            text="Live Site"
          />
        </Project>
      </div>
    )
  }
}

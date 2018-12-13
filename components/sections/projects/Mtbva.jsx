import React, { Component } from "react"
import webshots from "../../../util/webshots"
import { gitHub } from "../../header/NavIcons"

// Components
import Project from "./Project"

export default class Mtbva extends Component {
  render() {
    return (
      <div>
        <Project
          title="Mountain Bike Virginia"
          subheader="Server Side Rendered app using Vue.js, Nuxt.js, Node.js, and AWS EC2"
          imgSrc={webshots.localSrc(webshots.pages.mtbva)}
          liveSite={webshots.pages.mtbva.url}
          gitHub={gitHub + "mountain-bike-virginia"}
        >
          <p>
            Mountain Bike Virginia is the website for my father and I's bike
            race hosting business. We use it for blog posts and race results.
            The site is built using Vue.js and Nuxt.js for server side rendering
            and static site generation. It is deployed as a static site on AWS
            S3 and served using AWS CloudFront. It follows responsive design,
            and has a good deal of Selenium and Unit tests.{" "}
          </p>
        </Project>
      </div>
    )
  }
}

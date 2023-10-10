import React, { Component } from "react"
import webshots from "../../../util/webshots"
import { gitHub } from "../../header/NavIcons"
// Components
import Project, { TechStack } from "./Project"
import ProjectButton from "./ProjectButton"
import CardHeader from "../CardHeader"

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
            The website used to be a Vue app using the Nuxt.js framework, but
            I needed a content management system to allow others to contribute
            to the site. I picked the Ghost CMS because it is open source and
            Node.js based. The current deployment of the site is a static site
            generated from the Ghost CMS running on my local machine to generate
            the static files, which are hosted on Google Cloud Storage.
          </p>
          <TechStack>
            <ul>
              <li>Ghost CMS</li>
              <li>Node.js</li>
              <li>Google Cloud Storage</li>
              <li>Cloudflare</li>
            </ul>
          </TechStack>
          <ProjectButton
            url={`https://${webshots.pages.mtbva.url}`}
            text="Live Site"
          />

          <CardHeader
            title="Vue/Nuxt.js Implementation"
          />
          <p>
            This is the original implementation of the site. It is a Vue.js
            app using the Nuxt.js framework. It was originally hosted on AWS EC2,
            but was moved to the Ghost CMS for easier content management.
          </p>
          <TechStack>
            <ul>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
              <li>Node.js</li>
              <li>AWS EC2</li>
            </ul>
          </TechStack>
          <ProjectButton
            url={`https://github.com/Coletrane/mountain-bike-virginia`}
            text="GitHub Repo"
          />

          <CardHeader
            title="Node.js API for the Vue/Nuxt.js implementation"
          />
          <p>
            This is the Node.js API that the Vue/Nuxt.js implementation used
            to fetch and cache weather information in a MySQL database. It also
            rewrote some routes that the old site used.
          </p>
          <TechStack>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>AWS EC2</li>
            </ul>
          </TechStack>
          <ProjectButton
            url={`https://github.com/Coletrane/bikeva-node`}
            text="GitHub Repo"
          />

        </Project>
      </div>
    )
  }
}

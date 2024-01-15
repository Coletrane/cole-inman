import React, { Component } from "react"
import webshots from "../../../util/webshots"
import { gitHub } from "../../header/NavIcons"
// Components
import Project, { TechStack } from "./Project"
import ProjectButton from "./ProjectButton"
import CardHeader from "../CardHeader"

export default class SoundiizApiExtensions extends Component {
  render() {
    return (
      <div>
        <Project
          title="Soundiiz API Extensions"
          subheader="Additional functionalities and scripts designed to enhance and extend the capabilities of the Soundiiz API."
          imgSrc={webshots.localSrc(webshots.pages.soundiizApiExtensions)}
          liveSite={webshots.pages.soundiizApiExtensions.url}
          gitHub={gitHub + "soundiiz-api-extensions"}>
          <p>
            Soundiiz API Extensions is a collection of additional functionalities and scripts designed to enhance and
            extend the capabilities of the Soundiiz API.
            Soundiiz is a comprehensive online tool that enables users to transfer playlists and favorite tracks between
            various music streaming platforms. Check them out at <a href="https://soundiiz.com">soundiiz.com.</a>
          </p>
          <CardHeader
            title="Node.js Implementation"
          />
          <TechStack>
            <ul>
              <li>Node.js</li>
              <li>Axios</li>
              <li>Lodash</li>
            </ul>
          </TechStack>
          <CardHeader
            title="Kotlin Implementation"
          />
          <TechStack>
            <ul>
              <li>Kotlin</li>
              <li>Ktor Client</li>
            </ul>
          </TechStack>
          <ProjectButton
            url={`https://${webshots.pages.soundiizApiExtensions.url}`}
            text="GitHub Repo"
          />
        </Project>
      </div>
    )
  }
}
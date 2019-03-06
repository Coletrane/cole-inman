import React, { Component } from "react"
import webshots from "../../../util/webshots"

// Components
import Project, { TechStack } from "./Project"
import ProjectButton from "./ProjectButton"

export default class LuvTrails extends Component {
  render() {
    return (
      <Project
        title="LuvTrails"
        subheader="iOS and Android app for trail passes and donations"
        imgSrc={webshots.localSrc(webshots.pages.luvtrails)}>
        <p>
          We love all trails and support the owners, builders and volunteers
          that maintain them for us to enjoy. Join us to fund their hard work.
          We have partnered with leading trail owners and advocacy organizations
          to create a platform dedicated to the relationship between them and
          the millions of trail users. Donate to your favorite bike and hiking
          trails or buy a pass to enter an access controlled park.
        </p>
        <TechStack>
          <ul>
            <li>Angular</li>
            <li>Ionic</li>
            <li>Node.js</li>
            <li>Firebase</li>
          </ul>
        </TechStack>
        <ProjectButton
          url={`https://${webshots.pages.luvtrails.url}`}
          text="Website"
        />
        <ProjectButton
          url="https://itunes.apple.com/us/app/luvtrails/id1318099045"
          text="iOS App"
        />
        <ProjectButton
          url="https://play.google.com/store/apps/details?id=com.luvtrails.app"
          text="Android App"
        />
      </Project>
    )
  }
}

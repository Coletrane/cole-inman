import React, { Component } from "react"
import webshots from "../../../util/webshots"
import { gitHub } from "../../header/NavIcons"

// Components
import Project, { TechStack } from "./Project"
import ProjectButton from "./ProjectButton"

export default class PaddleMax extends Component {
  render() {
    return (
      <Project
        title="PaddleMax"
        subheader="API, iOS, Android, and Webapp for connected paddles"
        imgSrc={webshots.localSrc(webshots.pages.paddlemax)}>
        <p>
          PaddleMax is an app who's mission is to give kayak and paddle board
          paddles connected abilities such as data recording and analytics. It
          is an Android, iOS, and watchOS app developed using Kotlin and Swift,
          respectively.
        </p>
        <TechStack>
          <ul>
            <li>Kotlin</li>
            <li>Java</li>
            <li>Swift</li>
            <li>Node.js</li>
          </ul>
        </TechStack>
        <ProjectButton url={gitHub + "paddlemax-api"} text="API Repo" />
        <ProjectButton
          url={gitHub + "paddlemax-api-spring-boot"}
          text="API Kotlin Spring Boot Prototype Repo"
        />
        <ProjectButton url={gitHub + "paddlemax-ios"} text="iOS App Repo" />
        <ProjectButton url={gitHub + "paddlemax-web"} text="Web App Repo" />
      </Project>
    )
  }
}

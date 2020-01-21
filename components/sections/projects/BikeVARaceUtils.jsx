import React, { Component } from "react"
import styled from "styled-components"
import webshots from "../../../util/webshots"
import { gitHub } from "../../header/NavIcons"
// Components
import Project, { TechStack } from "./Project"
import ProjectButton from "./ProjectButton"

export default class BikeVARaceUtils extends Component {
  render() {
    return (
      <BikeVARaceUtilsStyle>
        <Project
          title="BikeVA.com Race Utils"
          subheader="Python and Pandas scripts for transforming race time data"
          imgSrc={webshots.localSrc(webshots.pages.bikevaRaceUtils)}>
          <p>
            In an effort to reduce the amount (and amount of errors) of manual data entry for the mountain bike races we
            promote, I decided to begin using the Webscorer app on an iPad, rather than hand timing using a stopwatch.
            Considerations had to be taken into account when transforming the final time data, such as different start
            times for different races, racers who registered day of (using paper) instead of registering online.
          </p>
          <TechStack>
            <ul>
              <li>Python</li>
              <li>Pandas</li>
              <li>BikeReg</li>
              <li>Webscorer iOS App</li>
            </ul>
          </TechStack>
          <ProjectButton
            url={gitHub + "bikeva.com-race-utils"}
            text="Github Repo"
          />
        </Project>
      </BikeVARaceUtilsStyle>
    )
  }
}

const BikeVARaceUtilsStyle = styled.div`
  img {
    width: 50%;
  }
`

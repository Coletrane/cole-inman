import React, {Component} from "react"

// Components
import Section from "../generic/Section"
import GeneralSkills from "./skills/GeneralSkills"
import FrontEndSkills from "./skills/FrontEndSkills"
import BackEndSkills from "./skills/BackEndSkills"

export default class Skills extends Component {

  render() {
    return (
      <div>
        <Section title="Skills">
          <div style={skillsStyle}>
            <GeneralSkills/>
            <FrontEndSkills/>
            <BackEndSkills/>
          </div>
        </Section>
      </div>
    )
  }
}

const skillsStyle = {
  img: {
    height: "auto"
  }
}


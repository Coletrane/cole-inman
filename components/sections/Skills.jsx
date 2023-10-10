import React, { Component } from "react"
import styled from "styled-components"
// Components
import Section from "./Section"
import GeneralSkills from "./skills/GeneralSkills"
import FrontEndSkills from "./skills/FrontEndSkills"
import BackEndSkills from "./skills/BackEndSkills"
import DatabaseSkills from "./skills/DatabaseSkills"

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Section title="Skills">
          <GlobalSkillStyles>
            <GeneralSkills/>
            <BackEndSkills/>
            <FrontEndSkills/>
            <DatabaseSkills/>
          </GlobalSkillStyles>
        </Section>
      </div>
    )
  }
}

const GlobalSkillStyles = styled.div`
  img {
    height: auto;
  }
`

import React, { Component } from "react"
import styled from "styled-components"
// Components
import Section from "./Section"
import GeneralSkills from "./skills/GeneralSkills"
import FrontEndSkills from "./skills/FrontEndSkills"
import BackEndSkills from "./skills/BackEndSkills"

export default class Skills extends Component {
  render() {
    return (
      <div>
        <Section title="Skills">
          <GlobalSkillStyles>
            <GeneralSkills/>
            <BackEndSkills/>
            <FrontEndSkills/>
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

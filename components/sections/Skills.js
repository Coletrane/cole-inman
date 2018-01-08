import React, {Component} from "react"
import styled from "styled-components"
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
          <SkillsStyle>
            <GeneralSkills/>
            <FrontEndSkills/>
            <BackEndSkills/>
          </SkillsStyle>
        </Section>
      </div>
    )
  }
}

const SkillsStyle = styled.div`
  img {
    height: auto;
  }
`

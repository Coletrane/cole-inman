import React, {Component} from "react"
// Components
import Skill from "./Skill"
import SkillsList from "./SkillsList"

export default class GeneralSkills extends Component {

  render() {
    return (
      <SkillsList title="General">
        <Git/>
        <Scrum/>
        <AWS/>
        <TDD/>
        <Bash/>
        <Linux/>
      </SkillsList>
    )
  }
}

// Skill Components
function Git() {
  return (
    <Skill name="Git"
           desktop="50px"
           mobile="35px"/>
  )
}

function Scrum() {
  return (
    <Skill name="Scrum"
           desktop="50px"
           mobile="35px"/>
  )
}

function AWS() {
  return (
    <Skill name="Amazon Web Services"
           desktop="50px"
           mobile="35px"/>
  )
}

function TDD() {
  return (
    <Skill name="Test Driven Development"
           desktop="50px"
           mobile="35px"/>
  )
}

function Bash() {
  return (
    <Skill name="Bash"
           desktop="50px"
           mobile="35px"/>
  )
}

function Linux() {
  return (
    <Skill name="Linux"
           desktop="50px"
           mobile="35px"/>
  )
}

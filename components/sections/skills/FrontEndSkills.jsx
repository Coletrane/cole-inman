import React, { Component } from "react"
// Components
import Skill from "./Skill"
import SkillsList from "./SkillsList"

export default class FrontEndSkills extends Component {
  render() {
    return (
      <SkillsList title="Front End">
        <Javascript/>
        <Typescript/>
        <ReactLolNameCollision/>
        <Angular/>
        <Vue/>
      </SkillsList>
    )
  }
}

// Skill Components
function Javascript() {
  return (
    <Skill
      name="Javascript"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "10px",
        paddingBottom: "10px"
      }}
    />
  )
}

function Typescript() {
  return (
    <Skill
      name="Typescript"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "10px",
        paddingBottom: "10px"
      }}
    />
  )
}

function ReactLolNameCollision() {
  return (
    <Skill
      name="React (What this site is written in)"
      desktop="60px"
      mobile="35px"
    />
  )
}

function Angular() {
  return <Skill name="Angular"
                desktop="59px"
                mobile="35px"/>
}

function Vue() {
  return (
    <Skill
      name="Vue"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "4px",
        paddingBottom: "4px"
      }}
    />
  )
}


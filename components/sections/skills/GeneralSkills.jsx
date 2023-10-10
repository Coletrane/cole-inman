import React, { Component } from "react"
// Components
import Skill from "./Skill"
import SkillsList from "./SkillsList"

export default class GeneralSkills extends Component {
  render() {
    return (
      <SkillsList title="General">
        <Git/>
        <Docker/>
        <Agile/>
        <AWS/>
        <GoogleCloud/>
        <UnitTesting/>
        <IntegrationTesting/>
        <Shell/>
        <Zapier/>
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

function Docker() {
  return (
    <Skill name="Docker"
           desktop="55px"
           mobile="35px"
           imgStyle={{
             paddingTop: "7px",
             paddingBottom: "5px"
           }}/>
  )
}

function Agile() {
  return (
    <Skill name="Agile"
           desktop="50px"
           mobile="35px"
    />
  )
}

function AWS() {
  return (
    <Skill
      name="Amazon Web Services"
      desktop="80px"
      mobile="65px"
      imgStyle={
        {
          paddingTop: "8px",
          paddingBottom:
            "10px"
        }
      }
    />
  )
}

function GoogleCloud() {
  return (
    <Skill name="Google Cloud"
           desktop="50px"
           mobile="42px"/>
  )
}

function UnitTesting() {
  return (
    <Skill name="Unit Testing"
           desktop="50px"
           mobile="35px"
    />
  )
}

function IntegrationTesting() {
  return (
    <Skill name="Integration Testing"
           desktop="50px"
           mobile="35px"
    />
  )
}

function Shell() {
  return (
    <
      Skill
      name="Shell"
      desktop="50px"
      mobile="35px"
      imgStyle={
        {
          paddingTop: "6px",
          paddingBottom:
            "10px"
        }
      }
    />
  )
}

function Linux() {
  return <Skill name="Linux"
                desktop="50px"
                mobile="35px"
  />
}

function Zapier() {
  return (
    <Skill name="Zapier"
           desktop="50px"
           mobile="35px"
    />
  )
}
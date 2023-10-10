import React, { Component } from "react"
// Components
import Skill from "./Skill"
import SkillsList from "./SkillsList"

export default class BackEndSkills extends Component {
  render() {
    return (
      <SkillsList title="Database">
        <MySQL/>
        <SQLServer/>
        <AWSDynamoDB/>
        <PostgreSQL/>
        <Oracle/>
      </SkillsList>
    )
  }
}

// Skill Components
function MySQL() {
  return (
    <Skill
      name="MySQL"
      desktop="60px"
      mobile="45px"
      imgStyle={{
        paddingTop: "5px",
        paddingBottom: "4px"
      }}
    />
  )
}

function SQLServer() {
  return <Skill name="SQL Server"
                desktop="50px"
                mobile="40px"
                imgStyle={{
                  paddingTop: "5px",
                  paddingBottom: "10px"
                }}
  />
}

function PostgreSQL() {
  return (
    <Skill
      name="PostgreSQL"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "12px",
        paddingBottom: "10px"
      }}
    />
  )
}

function AWSDynamoDB() {
  return (
    <Skill
      name="AWS DynamoDB"
      desktop="45px"
      mobile="35px"
      imgStyle={{
        paddingTop: "10px",
        paddingBottom: "-10px"
      }}
    />
  )
}

function Oracle() {
  return (
    <Skill
      name="Oracle"
      desktop="60px"
      mobile="50px"
      imgStyle={{
        paddingTop: "5px",
        paddingBottom: "10px"
      }}
    />
  )
}


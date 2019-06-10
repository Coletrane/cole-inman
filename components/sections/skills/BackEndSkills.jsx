import React, { Component } from "react"
// Components
import Skill from "./Skill"
import SkillsList from "./SkillsList"

export default class BackEndSkills extends Component {
  render() {
    return (
      <SkillsList title="Back End">
        <Java/>
        <Kotlin/>
        <Groovy/>
        <Python/>
        <Node/>
        <Spring/>
        <Elasticsearch/>
        <Spark/>
        <C/>
      </SkillsList>
    )
  }
}

// Skill Components
function Java() {
  return (
    <Skill
      name="Java"
      desktop="60px"
      mobile="45px"
      imgStyle={{
        paddingBottom: "4px"
      }}
    />
  )
}

function Python() {
  return <Skill name="Python"
                desktop="70px"
                mobile="55px"/>
}

function Kotlin() {
  return (
    <Skill
      name="Kotlin"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "12px",
        paddingBottom: "10px"
      }}
    />
  )
}

// Try and shorten this name, Uglify!
function C() {
  return <Skill name="C"
                desktop="70px"
                mobile="55px"/>
}

function Groovy() {
  return (
    <Skill
      name="Groovy"
      desktop="80px"
      mobile="65px"
      imgStyle={{
        paddingTop: "20px",
        paddingBottom: "10px"
      }}
    />
  )
}

function Node() {
  return (
    <Skill
      name="Node.js"
      desktop="55px"
      mobile="35px"
      imgStyle={{
        paddingTop: "10px",
        paddingBottom: "5px"
      }}
    />
  )
}

function Spring() {
  return (
    <Skill
      name="Spring"
      desktop="60px"
      mobile="40px"
      imgStyle={{
        paddingTop: "10px"
      }}
    />
  )
}

function Elasticsearch() {
  return (
    <Skill
      name="Elasticsearch"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "10px"
      }}
    />
  )
}

function Spark() {
  return (
    <Skill name="Spark"
           desktop="80px"
           mobile="50px"
           imgStyle={{
             paddingTop: "12px",
             paddingBottom: "5px"
           }}
    />
  )
}


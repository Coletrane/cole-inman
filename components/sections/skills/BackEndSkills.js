import React, {Component} from "react"
// Components
import Skill from "./Skill"
import SkillsList from "./SkillsList"

export default class BackEndSkills extends Component {

  render() {
    return (
      <SkillsList title="Back End">
        <Java/>
        <Python/>
        <Kotlin/>
        <Swift/>
        <C/>
        <Groovy/>
        <Spring/>
        <JaxRs/>
        <Hibernate/>
        <Postgresql/>
        <MongoDB/>
        <Elasticsearch/>
        <Hadoop/>
      </SkillsList>
    )
  }
}

// Skill Components
function Java() {
  return (
    <Skill name="Java"
           desktop="60px"
           mobile="45px"
           imgStyle={{
             paddingBottom: "4px"
           }}/>
  )
}

function Python() {
  return (
    <Skill name="Python"
           desktop="70px"
           mobile="55px"/>
  )
}

function Kotlin() {
  return (
    <Skill name="Kotlin"
           desktop="50px"
           mobile="35px"
           imgStyle={{
             paddingTop: "12px",
             paddingBottom: "10px"
           }}/>

  )
}

function Swift() {
  return (
    <Skill name="Swift"
           desktop="50px"
           mobile="35px"
           imgStyle={{
             paddingTop: "12px",
             paddingBottom: "14px"
           }}/>
  )
}

// Try and shorten this name, Uglify!
function C() {
  return (
    <Skill name="C"
           desktop="70px"
           mobile="55px"/>
  )
}

function Groovy() {
  return (
    <Skill name="Groovy"
           desktop="80px"
           mobile="65px"
           imgStyle={{
             paddingTop: "15px",
             paddingBottom: "5px"
           }}/>
  )
}

function Spring() {
  return (
    <Skill name="Spring"
           desktop="50px"
           mobile="35px"
           imgStyle={{
             paddingTop: "10px"
           }}/>
  )
}

function JaxRs() {
  return (
    <Skill name="JAX-RS"
           desktop="70px"
           mobile="55px"
           imgStyle={{
             paddingTop: "20px",
             paddingBottom: "6px"
           }}/>
  )
}

function Hibernate() {
  return (
    <Skill name="Hibernate"
           desktop="50px"
           mobile="35px"
           imgStyle={{
             paddingTop: "10px"
           }}/>
  )
}

function Postgresql() {
  return (
    <Skill name="PostgreSQL"
           desktop="50px"
           mobile="35px"
           imgStyle={{
             paddingTop: "10px",
             paddingBottom: "5px"
           }}/>
  )
}

function MongoDB() {
  return (
    <Skill name="MongoDB"
           desktop="70px"
           mobile="35px"
           imgStyle={{
             paddingTop: "10px"
           }}/>
  )
}

function Elasticsearch() {
  return (
    <Skill name="Elasticsearch"
           desktop="50px"
           mobile="35px"
           imgStyle={{
             paddingTop: "10px"
           }}/>
  )
}

function Hadoop() {
  return (
    <Skill name="Hadoop"
           desktop="50px"
           mobile="35px"
           imgStyle={{
             paddingTop: "10px"
           }}/>
  )
}

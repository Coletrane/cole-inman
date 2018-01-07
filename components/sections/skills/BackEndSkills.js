import React, { Component, cloneElement } from 'react'
import styled from 'styled-components'

// Components
import Skill from './Skill'
import SkillsList from './SkillsList'

export default class BackEndSkills extends Component {

  render() {
    return (
      <SkillsList title="Back End">
        <Java/>
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
           desktop="50px"
           mobile="35px"/>
  )
}

function Kotlin() {
  return (
    <Skill name="Kotlin"
           desktop="50px"
           mobile="35px"/>
  )
}

function Swift() {
  return (
    <Skill name="Swift"
           desktop="50px"
           mobile="35px"/>
  )
}

// Try and shorten this name, Uglify!
function C() {
  return (
    <Skill name="C"
           desktop="50px"
           mobile="35px"/>
  )
}

function Groovy() {
  return (
    <Skill name="Groovy"
           desktop="50px"
           mobile="35px"/>
  )
}

function Spring() {
  return (
    <Skill name="Spring Framework"
           desktop="50px"
           mobile="35px"/>
  )
}

function JaxRs() {
  return (
    <Skill name="JAX-RS"
           desktop="50px"
           mobile="35px"/>
  )
}

function Hibernate() {
  return(
    <Skill name="Hibernate"
           desktop="50px"
           mobile="35px"/>
  )
}

function Postgresql() {
  return(
    <Skill name="PostgreSQL"
           desktop="50px"
           mobile="35px"/>
  )
}

function MongoDB() {
  return(
    <Skill name="MongoDB"
           desktop="50px"
           mobile="35px"/>
  )
}

function Elasticsearch() {
  return(
    <Skill name="Elasticsearch"
           desktop="50px"
           mobile="35px"/>
  )
}

function Hadoop() {
  return(
    <Skill name="Hadoop"
           desktop="50px"
           mobile="35px"/>
  )
}

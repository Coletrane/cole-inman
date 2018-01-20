import React, {Component} from "react"
// Components
import Skill from "./Skill"
import SkillsList from "./SkillsList"

export default class FrontEndSkills extends Component {

  render() {
    return (
      <SkillsList title="Front End">
        <Html/>
        <Css/>
        <Jquery/>
        <Javascript/>
        <Typescript/>
        <Aurelia/>
        <ReactLolNameCollision/>
        <Redux/>
        <Angular/>
        <Vue/>
        <Node/>
        <Webpack/>
        <Express/>
        <Rails/>
      </SkillsList>
    )
  }
}

// Skill Components
// TODO: align the text and images
function Html() {
  return (
    <Skill name="HTML"
           desktop="56px"
           mobile="35px"/>
  )
}

function Css() {
  return (
    <Skill name="CSS"
           desktop="45px"
           mobile="30px"/>
  )
}

function Jquery() {
  return (
    <Skill name="jQuery"
           desktop="50px"
           mobile="35px"/>
  )
}

function Javascript() {
  return (
    <Skill name="Javascript"
           desktop="50px"
           mobile="35px"/>
  )
}

function Typescript() {
  return (
    <Skill name="Typescript"
           desktop="50px"
           mobile="35px"/>
  )
}

function ReactLolNameCollision() {
  return (
    <Skill name="React (What this site is written in)"
           desktop="50px"
           mobile="35px"/>
  )
}

function Angular() {
  return (
    <Skill name="Angular"
           desktop="59px"
           mobile="35px"/>
  )
}

function Vue() {
  return (
    <Skill name="Vue"
           desktop="50px"
           mobile="35px"/>
  )
}

function Aurelia() {
  return (
    <Skill name="Aurelia"
           desktop="50px"
           mobile="35px"/>
  )
}

function Node() {
  return (
    <Skill name="Node.js"
           desktop="55px"
           mobile="35px"/>
  )
}

function Webpack() {
  return (
    <Skill name="Webpack"
           desktop="65px"
           mobile="45px"/>
  )
}

function Redux() {
  return (
    <Skill name="Redux"
           desktop="50px"
           mobile="35px"/>
  )
}

function Express() {
  return (
    <Skill name="Express.js"
           desktop="60px"
           mobile="40px"/>
  )
}


function Rails() {
  return (
    <Skill name="Ruby on Rails"
           desktop="55px"
           mobile="35px"/>
  )
}

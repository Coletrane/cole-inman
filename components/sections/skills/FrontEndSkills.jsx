import React, { Component } from "react";
// Components
import Skill from "./Skill";
import SkillsList from "./SkillsList";

export default class FrontEndSkills extends Component {
  render() {
    return (
      <SkillsList title="Front End">
        <Html />
        <Css />
        <Javascript />
        <Typescript />
        <Jquery />
        <ReactLolNameCollision />
        <Redux />
        <Angular />
        <Vue />
        <Node />
        <Express />
        <Webpack />
        <Aurelia />
        <Rails />
      </SkillsList>
    );
  }
}

// Skill Components
// TODO: align the text and images
function Html() {
  return (
    <Skill
      name="HTML"
      desktop="56px"
      mobile="35px"
      imgStyle={{
        paddingTop: "4px"
      }}
    />
  );
}

function Css() {
  return <Skill name="CSS" desktop="45px" mobile="30px" />;
}

function Jquery() {
  return (
    <Skill
      name="jQuery"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingBottom: "12px"
      }}
    />
  );
}

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
  );
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
  );
}

function ReactLolNameCollision() {
  return (
    <Skill
      name="React (What this site is written in)"
      desktop="60px"
      mobile="35px"
    />
  );
}

function Angular() {
  return <Skill name="Angular" desktop="59px" mobile="35px" />;
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
  );
}

function Aurelia() {
  return <Skill name="Aurelia" desktop="50px" mobile="35px" />;
}

function Node() {
  return (
    <Skill
      name="Node.js"
      desktop="55px"
      mobile="35px"
      imgStyle={{
        paddingTop: "2px",
        paddingBottom: "2px"
      }}
    />
  );
}

function Webpack() {
  return <Skill name="Webpack" desktop="65px" mobile="45px" />;
}

function Redux() {
  return (
    <Skill
      name="Redux"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "6px",
        paddingBottom: "8px"
      }}
    />
  );
}

function Express() {
  return <Skill name="Express.js" desktop="60px" mobile="40px" />;
}

function Rails() {
  return <Skill name="Ruby on Rails" desktop="55px" mobile="35px" />;
}

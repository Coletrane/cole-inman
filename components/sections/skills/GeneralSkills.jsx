import React, { Component } from "react";
// Components
import Skill from "./Skill";
import SkillsList from "./SkillsList";

export default class GeneralSkills extends Component {
  render() {
    return (
      <SkillsList title="General">
        <Git/>
        <Scrum/>
        <AWS/>
        <GoogleCloud/>
        <TDD/>
        <Bash/>
        <Linux/>
      </SkillsList>
    );
  }
}

// Skill Components
function Git() {
  return <Skill name="Git" desktop="50px" mobile="35px"/>;
}

function Scrum() {
  return (
    <Skill
      name="Scrum"
      desktop="70px"
      mobile="55px"
      imgStyle={{
        paddingTop: "3px"
      }}
    />
  );
}

function AWS() {
  return (
    <Skill
      name="Amazon Web Services"
      desktop="80px"
      mobile="65px"
      imgStyle={{
        paddingTop: "8px",
        paddingBottom: "10px"
      }}
    />
  );
}

function GoogleCloud() {
  return (
    <Skill
      name="Google Cloud"
      desktop="50px"
      mobile="42px"
      />
  );
}

function TDD() {
  return <Skill name="Test Driven Development" desktop="60px" mobile="35px"/>;
}

function Bash() {
  return (
    <Skill
      name="Bash"
      desktop="50px"
      mobile="35px"
      imgStyle={{
        paddingTop: "6px",
        paddingBottom: "10px"
      }}
    />
  );
}

function Linux() {
  return <Skill name="Linux" desktop="50px" mobile="35px"/>;
}

import React, {Component} from "react"

// Components
import Mtbva from "./projects/Mtbva"
import Handsmith from "./projects/Handsmith"
import PaddleMax from "./projects/PaddleMax"
import Section, {SectionHeader} from "../generic/Section"
import Card from "../generic/Card"

export default class Projects extends Component {

  render() {
    return (
      <div>
        <SectionHeader title="Projects"/>
        <Mtbva/>
        <Handsmith/>
        <PaddleMax/>
      </div>
    )
  }
}


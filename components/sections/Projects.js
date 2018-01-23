import React, {Component} from "react"

// Components
import Mtbva from "./projects/Mtbva"
import Handsmith from "./projects/Handsmith"
import PaddleMax from "./projects/PaddleMax"
import Section from "./Section"
import Card from "./Card"

export default class Projects extends Component {

  render() {
    return (
      <Section title="Projects">
        <Mtbva/>
        <Handsmith/>
        <PaddleMax/>
      </Section>
    )
  }
}


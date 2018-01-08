import React, {Component} from "react"
// Components

import Mtbva from "./projects/Mtbva"
import Handsmith from "./projects/Handsmith"
import Section from "../generic/Section"

export default class Projects extends Component {

  render() {
    return (
      <div>
        <Section title="Projects">
          <Mtbva/>
          <Handsmith/>
        </Section>
      </div>
    )
  }
}


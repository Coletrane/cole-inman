import React, { Component } from "react"

// Components
import { Title } from "./Section"
import Mtbva from "./projects/Mtbva"
import PaddleMax from "./projects/PaddleMax"
import EffectiveBalance from "./projects/EffectiveBalance"
import Section from "./Section"

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Title>Projects</Title>
        <Mtbva />
        <EffectiveBalance />
        <PaddleMax />
      </div>
    )
  }
}

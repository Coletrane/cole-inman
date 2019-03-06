import React, { Component } from "react"

// Components
import { Title } from "./Section"
import LuvTrails from "./projects/LuvTrails"
import Mtbva from "./projects/Mtbva"
import PaddleMax from "./projects/PaddleMax"
import EffectiveBalance from "./projects/EffectiveBalance"

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Title>Projects</Title>
        <LuvTrails/>
        <Mtbva />
        <EffectiveBalance />
        <PaddleMax />
      </div>
    )
  }
}

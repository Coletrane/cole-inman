import React, { Component } from "react"
// Components
import { Title } from "./Section"
import LuvTrails from "./projects/LuvTrails"
import Mtbva from "./projects/Mtbva"
import PaddleMax from "./projects/PaddleMax"
import EffectiveBalance from "./projects/EffectiveBalance"
import BikeVARaceUtils from "./projects/BikeVARaceUtils"
import SoundiizApiExtensions from "./projects/SoundiizApiExtensions"
import Section from "./Section"

export default class Projects extends Component {
  render() {
    return (
      <Section title="Projects">
        <SoundiizApiExtensions/>
        <Mtbva/>
        <BikeVARaceUtils/>
        <LuvTrails/>
        <EffectiveBalance/>
        <PaddleMax/>
      </Section>
    )
  }
}

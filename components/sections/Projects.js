import React, { Component } from 'react'

// Components
import Mtbva from './projects/Mtbva'
import Handsmith from './projects/Handsmith'
import PaddleMax from './projects/PaddleMax'
import EffectiveBalance from './projects/EffectiveBalance'
import Section from './Section'

export default class Projects extends Component {
  render () {
    return (
      <Section title="Projects">
        <Mtbva/>
        <Handsmith/>
        <PaddleMax/>
        <EffectiveBalance/>
      </Section>
    )
  }
}

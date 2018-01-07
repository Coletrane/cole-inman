import React, { Component } from 'react'
import styled from 'styled-components'
import webshots from '../../util/webshots'

// Components
import AbstractProject from './projects/AbstractProject'

import Mtbva from './projects/Mtbva'
import Handsmith from './projects/Handsmith'

export default class Projects extends Component {

  render() {
    return (
      <div>
        <h1> Projects</h1>

        <Mtbva/>

        <Handsmith/>
      </div>
    )
  }
}


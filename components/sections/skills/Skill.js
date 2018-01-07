import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components


export default class Skill extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }

  render() {
    return (
      <Card>

      </Card>
    )
  }
}


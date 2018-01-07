import React, { Component } from 'react'
import styled from 'styled-components'

export default class SkillsList extends Component {

  render() {
    return (
      <List>
        {this.props.children}
      </List>
    )
  }
}

// Styles
const List = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
`

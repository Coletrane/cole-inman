import React, { Component } from 'react'
import styled from 'styled-components'

export default class SkillsList extends Component {

  render() {
    return (
      <div>
        <SkillsListTitle>
          {this.props.title}
        </SkillsListTitle>
        <List>
          {this.props.children}
        </List>
      </div>
    )
  }
}

// Styles
const SkillsListTitle = styled.h3`
  margin: 0;
`
const List = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
`

import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'

export default class Section extends Component {

  render() {
    return (
      <div>
        <Card>
          {this.props.children}
        </Card>
      </div>
    )
  }
}

import React, {Component} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// Components
import Card from "./Card"

export default class Section extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <div>
        <Title>
          {this.props.title}
        </Title>
        <Card>
          {this.props.children}
        </Card>
      </div>
    )
  }
}

// Styles
const Title = styled.h1`

`

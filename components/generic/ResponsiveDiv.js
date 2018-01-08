import React, {Component} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import {mobileWidth} from "../../util/styles"

export default class ResponsiveDiv extends Component {

  static propTypes = {
    smCss: PropTypes.string,
    mdCss: PropTypes.string,
    lgCss: PropTypes.string,
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <Div smCss={this.props.smCss}
           mdCss={this.props.mdCss}
           lgCss={this.props.lgCss}>
        {this.props.children}
      </Div>
    )
  }
}


const Div = styled.div`
  ${props => props.smCss ? mediaQuery(props.smCss) : ""}
  ${props => props.mdCss ? mediaQuery(props.mdCss) : ""}
  ${props => props.lgCss ? mediaQuery(props.lgCss) : ""}
`

const mediaQuery = (cssStr) => {
  return `@media (max-width: ${mobileWidth}) {
    ${cssStr}
  }`
}

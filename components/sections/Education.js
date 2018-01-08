import React, {Component} from "react"
import styled from "styled-components"
// Components
import Section from "../generic/Section"

export default class Education extends Component {

  render() {
    return (
      <div>
        <Section title="Education">
          <JmuLogo src="/static/img/logos/jmu.png"/>
          <div>
            <h4>B.S. Computer Science</h4>
            <h6>Graduation: May 2016</h6>
          </div>
          <CnssLogo src="/static/img/logos/cnss.png"/>
          <div>
            <h4>Committee on National Security Systems No. 4011 Certificate</h4>
            <h6>Awarded: May 2016</h6>
          </div>
        </Section>
      </div>
    )
  }
}

// Styles
const JmuLogo = styled.img`
  width: 50px;
  height: auto;
`

const CnssLogo = styled.img`
  width: 50px;
  height: auto;
`

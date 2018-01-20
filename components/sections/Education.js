import React, {Component} from "react"
import styled from 'styled-components'
import {imgPath} from "../../util/enums"

// Components
import Section from "../generic/Section"

export default class Education extends Component {

  render() {
    return (
      <Section title="Education">
        <JMU>
          <img src={`${imgPath}/logos/jmu.png`}
               alt="James Madison University"
               style={imgStyle}/>
          <div>
            <div style={titleStyle}>B.S. Computer Science</div>
            <div style={subtitleStyle}>Graduation: May 2016</div>
          </div>
        </JMU>
        <CNSS>
          <img src={`${imgPath}/logos/cnss.png`}
               alt="Committee on National Security Systems"
               style={imgStyle}/>
          <div>
            <div style={titleStyle}>Committee on National Security Systems No. 4011 Certificate</div>
            <div style={subtitleStyle}>Awarded: May 2016</div>
          </div>
        </CNSS>
      </Section>
    )
  }
}

// Styles
const imgStyle = {
  display: "block",
  margin: "auto",
  height: "auto"
}

const JMU = styled.div`
  padding-bottom: 2rem;
  
  img {
    width: 100%;
    maxWidth: "450px"
  }
`

const CNSS = styled.div`
  padding-bottom: 2rem;
  
  img {
    width: 50%;
    max-width: 220px;
  }
`

const titleStyle = {
  fontSize: "1.5rem"
}
const subtitleStyle = {
  fontSize: "1rem"
}

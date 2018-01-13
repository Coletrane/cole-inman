import React, {Component} from "react"
import {imgPath} from "../../util/enums"

// Components
import Section from "../generic/Section"

export default class Education extends Component {

  render() {
    return (
      <Section title="Education">
        <img src={`${imgPath}/logos/jmu.png`}
             alt="James Madison University"
             style={{
               ...imgStyle,
               ...jmuStyle
             }}/>
        <div>
          <h4>B.S. Computer Science</h4>
          <h6>Graduation: May 2016</h6>
        </div>
        <img src={`${imgPath}/logos/cnss.png`}
             alt="Committee on National Security Systems"
             style={{
               ...imgStyle,
               ...cnssStyle
             }}/>
        <div>
          <h4>Committee on National Security Systems No. 4011 Certificate</h4>
          <h6>Awarded: May 2016</h6>
        </div>
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

const jmuStyle = {
  width: "100%"
}

const cnssStyle = {
  width: "50%"
}


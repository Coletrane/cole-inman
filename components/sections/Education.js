import React, {Component} from "react"

// Components
import Section from "../generic/Section"

export default class Education extends Component {

  render() {
    return (
      <div>
        <Section title="Education">
          <img src="/static/img/logos/jmu.png"
               alt="James Madison University"
               style={{...imgStyle, ...jmuStyle}}/>
          <div>
            <h4>B.S. Computer Science</h4>
            <h6>Graduation: May 2016</h6>
          </div>
          <img src="/static/img/logos/cnss.png"
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
      </div>
    )
  }
}

// Styles
const imgStyle = {
  display: "block",
  margin: "auto"
}

const jmuStyle = {
  width: "100%",
  height: "auto"
}

const cnssStyle = {
  width: "50%",
  height: "auto"
}


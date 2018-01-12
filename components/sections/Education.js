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
               style={jmuStyle}/>
          <div>
            <h4>B.S. Computer Science</h4>
            <h6>Graduation: May 2016</h6>
          </div>
          <img src="/static/img/logos/cnss.png"
               alt="Committee on National Security Systems"
               style={cnssStyle}/>
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
const jmuStyle = {
  width: "50px",
  height: "auto"
}

const cnssStyle = {
  width: "50px",
  height: "auto"
}


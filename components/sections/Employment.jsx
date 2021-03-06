import React, { Component } from "react"
import { imgPath } from "../../util/enums"
// Components
import Section from "./Section"

export default class Employment extends Component {
  render() {
    return (
      <Section title="Employment">
        <a href="http://digitalreasoning.com">
          <img
            src={`${imgPath}/logos/dr.png`}
            alt="Digital Reasoning"
            style={{
              ...imgStyle,
              ...drStyle
            }}
          />
        </a>
        <div>
          <div style={timeStyle}>May 2017 - Present</div>
          <p>
            Front end developer working on the Monitoring application, utilized
            by large banking clients. Stack is: Hadoop, Elasticsearch,
            Java(Jetty/JAXRS), Ruby on Rails, KnockoutJs, jQuery, Bootstrap.
          </p>
        </div>
        <a href="http://liberty.edu">
          <img
            src={`${imgPath}/logos/lu.png`}
            alt="Liberty University"
            style={{
              ...imgStyle,
              ...luStyle
            }}
          />
        </a>
        <div>
          <div style={timeStyle}>October 2016 - May 2017</div>
          <p>
            Student Financial Services team with 3 other senior developers. Main
            project was Financial Check In, an app that provides a way for
            students to pick payment plans, housing, parking pass, ect. 100,000+
            users. RESTful web service using with the technology stack: Oracle
            DB, Hibernate, Spring, Java 8, Aurelia Javascript Framework,
            ECMAScript 6 in a strict Test Driven Development environment.
          </p>
        </div>
      </Section>
    )
  }
}

// Styles
const imgStyle = {
  display: "block",
  margin: "auto"
}

const timeStyle = {
  fontSize: "1.5rem"
}

const drStyle = {
  width: "75%",
  maxWidth: "500px"
}

const handsmithStyle = {
  width: "60%",
  maxWidth: "420px"
}

const luStyle = {
  width: "70%",
  maxWidth: "400px"
}

const webJamStyle = {
  width: "50%",
  maxWidth: "330px"
}

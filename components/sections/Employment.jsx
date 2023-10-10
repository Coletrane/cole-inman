import React, { Component } from "react"
import { imgPath } from "../../util/enums"
// Components
import Section from "./Section"

export default class Employment extends Component {
  render() {
    return (
      <Section title="Employment">
        <a href="https://spiderstrategies.com">
          <img
            src={`${imgPath}/logos/ss.png`}
            alt="Spider Strategies"
            style={{
              ...imgStyle,
              ...spiderStyle
            }}
          />
        </a>
        <div>
          <div style={timeStyle}>March 2020 - Present</div>
          <p>
            Senior full stack developer working on the Spider Impact application, a
            business intelligence software product. Lead developer on the Datasets
            feature, which is a BI layer on top of multiple import types
            (spreadsheets, databases, Google Sheets, Zapier, REST APIs, ect).
            Stack is: Java, Kotlin, Spring, Hibernate, JDBC, Backbone.js.
            Lead developer on our license management and 3rd party integrations
            service, which uses AWS Serverless Application Model (SAM), AWS Lambda,
            AWS API Gateway, AWS DynamoDB, AWS S3, and AWS CloudFormation.
            Heavy focus on automated testing and continuous integration to catch
            bugs as early as possible. High level of autonomy and ownership over
            code. Lean agile environment, where estimates and iterations happen, but
            are not the center piece of the process. Code is the center piece of our
            process and over 95% of my working hours are spent coding!
          </p>
        </div>
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
          <div style={timeStyle}>May 2017 - March 2020</div>
          <p>
            Full stack developer working on the Monitoring application, utilized
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

const luStyle = {
  width: "70%",
  maxWidth: "400px"
}

const spiderStyle = {
  width: "80%",
  maxWidth: "500px"
}

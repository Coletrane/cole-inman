import React, {Component} from "react"
import {imgPath} from "../../util/enums"

// Components
import Section from "../generic/Section"

export default class Experience extends Component {

  render() {
    return (
      <Section title="Experience">
        <a href="http://digitalreasoning.com">
        <img src={`${imgPath}/logos/dr.png`}
             alt="Digital Reasoning"
             style={{
               ...imgStyle,
               ...drStyle
             }}/>
        </a>
        <div>
          <h6>May 2017 - Present</h6>
          <p>
          Front end developer working on the Monitoring application, utilized by large banking clients. Stack is: Hadoop, Elasticsearch, Java(Jetty/JAXRS), Ruby on Rails, KnockoutJs, jQuery, Bootstrap.
          </p>
        </div>
        <a href="http://handsmith.org">
        <img src={`${imgPath}/logos/handsmith.png`}
             alt="Handsmith"
             style={{
               ...imgStyle,
               ...handsmithStyle
             }}/>
        </a>
        <div>
          <h6>October 2017 - Present</h6>
          <p>
            Handsmith is a non-profit company seeking to develop a bionic hand at a fraction of the current cost in the medical devices industry. Wordpress platform, responsible for SEO, Updates, and custom HTML,CSS, and JS
          </p>
        </div>
        <a href="http://liberty.edu">
          <img src={`${imgPath}/logos/lu.png`}
               alt="Liberty University"
               style={{
                 ...imgStyle,
                 ...luStyle
               }}/>
        </a>
        <div>
          <h6>October 2016 - May 2017</h6>
          <p>
            Student Financial Services team with 3 other senior developers. Main project was Financial Check In, an app that provides a way for students to pick payment plans, housing, parking pass, ect. 100,000+ users. RESTful web service using with the technology stack: Oracle DB, Hibernate, Spring, Java 8, Aurelia Javascript Framework, ECMAScript 6 in a strict Test Driven Development environment.
          </p>
        </div>
        <a href="http://web-jam.com">
          <img src={`${imgPath}/logos/webjam.png`}
               alt="Web Jam"
               style={{
                 ...imgStyle,
                 ...webJamStyle
               }}/>
        </a>
        <div>
          <h6>November 2016 - May 2017</h6>
          <p>
            Web development startup in Roanoke, VA. Stack: Webpack, Aurelia, Node, Express, MongoDB/Mongoose. Main market is local businesses with non-mobile optimized websites.
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

const drStyle = {
  width: "75%"
}

const handsmithStyle = {
  width: "60%"
}

const luStyle = {
  width: "70%"
}

const webJamStyle = {
  width: "50%"
}

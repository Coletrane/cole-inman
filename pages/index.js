import React, {Component} from "react"
import styled from "styled-components"
import {mediaQuery} from "../util/styles"
import {imgPath} from "../util/enums"

// Components
import Layout from "../components/Layout"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Education from "../components/sections/Education"
import Experience from "../components/sections/Experience"

export default class Index extends Component {

  render() {
    return (
      <AppWrapper>
        <Layout>
          <EduSkills>
            <Education/>
            <Skills/>
          </EduSkills>
          <Experience/>
          <Projects/>
        </Layout>
      </AppWrapper>
    )
  }
};

// Styles
// Use styled components for un-scoped styles, inline styles for scoped 
const AppWrapper = styled.div`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Abril Fatface', serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
  }
  
  p, span, div {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
  }
  
  background-color: #331501;
  background-image: url(${imgPath}/dark-wood.png);
  
`

const EduSkills = styled.div`
  ${mediaQuery.ceiling`
    display: grid;
    grid-template-columns: 50% 50%;
  `}
  ${mediaQuery.tablet`
    display: block;
  `}
`

const twoColumns = {
  display: "grid",
  gridTemplateColumns: "50% 50%"
}



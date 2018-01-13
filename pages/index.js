import React, {Component} from "react"
import styled from "styled-components"
import {mediaQueries} from "../util/styles"

// Components
import Layout from "../components/Layout"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Education from "../components/sections/Education"
import MediaQuery from "react-responsive"
import Experience from "../components/sections/Experience"

export default class Index extends Component {

  educationAndSkills(style) {
    return (
      <div style={{...style}}>
        <Education/>
        <Skills/>
      </div>
    )
  }

  render() {
    return (
      <AppWrapper>
        <Layout>
          <MediaQuery query={mediaQueries.mobileAndDesktop.mobile}>
            {this.educationAndSkills({})}
          </MediaQuery>
          <MediaQuery query={mediaQueries.mobileAndDesktop.desktop}>
            {this.educationAndSkills(twoColumns)}
          </MediaQuery>
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
    font-family: 'Playfair Display SC', serif;
  }
`

const twoColumns = {
  display: "grid",
  gridTemplateColumns: "50% 50%"
}

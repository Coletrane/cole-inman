import React, { Component } from "react"
import styled from "styled-components"
// Components
import Layout from "../components/Layout"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Education from "../components/sections/Education"

export default class Index extends Component {

  render() {
    return (
      <GlobalStyles>
        <Layout>

          <TwoColumnWrapper>
            <Education/>

            <Skills/>
          </TwoColumnWrapper>

          <Projects/>

        </Layout>
      </GlobalStyles>
    )
  }
};

// Styles
const GlobalStyles = styled.div`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display SC', serif;
    font-weight: 400;
  }
`
const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

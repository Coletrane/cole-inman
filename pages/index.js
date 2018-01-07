import React, { Component } from 'react'
import styled from 'styled-components'
// Components
import Layout from '../components/Layout'
import Projects from '../components/sections/Projects'
import Section from '../components/Section'

export default class Index extends Component {

  render() {
    return (
      <GlobalStyles>
        <Layout>

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

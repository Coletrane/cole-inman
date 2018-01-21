import React, {Component} from "react"
import {CSSTransition} from "react-transition-group"
import styled from "styled-components"
import {mediaQuery} from "../util/styles"
import {imgPath} from "../util/enums"

// Components
import Layout from "../components/Layout"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Education from "../components/sections/Education"
import Experience from "../components/sections/Experience"

let sections = 0
export default class Index extends Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = {
      experience: false,
      projects: false,
      height: "20000px" // setting this to something huge for scroll, changed to auto dynamically
    }
  }

  // Helpers
  handleScroll() {
    if (window.scrollY > 150) {
      this.setState({
        ...this.state,
        experience: true
      })
    }
    if (window.scrollY > 700) {
      this.setState({
        ...this.state,
        projects: true,
        height: "auto"
      })
    }
  }

  get experience() {
    if (this.state.experience) {
      return (
        <FastFade>
          <Experience/>
        </FastFade>
      )
    }
  }

  get projects() {
    if (this.state.projects) {
      return (
        <FastFade>
          <Projects/>
        </FastFade>
      )
    }
  }

  // Lifecycle
  componentDidMount() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll)
    }
  }

  componentWillUnmount() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll)
    }
  }

  render() {
    return (
      <AppWrapper height={this.state.height}>
        <Layout>
          <EduSkills>
            <Fade>
              <Education/>
            </Fade>
            <DelayedFade>
              <Skills/>
            </DelayedFade>
          </EduSkills>
            {this.experience}
            {this.projects}
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
  
  height: ${props => props.height};
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

const transform = "translateY(100px)"

const Fade = styled.div`
  @keyframes fadeInUp {
    0% {
      transform: ${transform};
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: fadeInUp 1.5s ease;
`

const DelayedFade = styled.div`
  @keyframes fadeInUp {
    0% {
      opacity: 0;
    }
    50% {
      transform: ${transform};
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: fadeInUp 2.5s ease;
`
const FastFade = styled.div`
  @keyframes fadeInLeft {
    0% {
      transform: ${transform};
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  animation: fadeInLeft 1s ease;
`

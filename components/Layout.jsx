import React, { Component } from "react"
import styled from "styled-components"
import { mediaQuery } from "../util/styles.js"
// Components
import Header from "./header/Header"

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <GithubBanner>
          <a href="https://github.com/coletrane/cole-inman">
            <img
              src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
              alt="Fork me on GitHub"
            />
          </a>
        </GithubBanner>
        <MainContent>{this.props.children}</MainContent>
      </div>
    )
  }
}

// Styles
const GithubBanner = styled.div`
  img {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
  }
`
const MainContent = styled.div`
  padding-top: 600px;
  padding-bottom: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  ${mediaQuery.tablet`
    padding-top: 50px;
  `};
`

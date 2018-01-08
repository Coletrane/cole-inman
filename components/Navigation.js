import React, {Component} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import {boxShadow, colors} from "../util/styles.js"
import {isMobile} from "../util/functions.js"
// Components
import IconButton from "material-ui/IconButton"
// Icon Components
import {FaEnvelopeSquare, FaFacebookSquare, FaGithubSquare, FaLinkedinSquare} from "react-icons/lib/fa"

const linkedIn = "https://www.linkedin.com/in/cole-inman-61738565/"
export const gitHub = "https://github.com/coletrane/" // exporting this for constructing github links in components
const facebook = "https://www.facebook.com/uhmcole"
const email = "eloc49@gmail.com"

const iconColor = "white"

const iconDimensions = "1.5em"

export default class Navigation extends Component {

  static propTypes = {
    bottom: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      mobile: isMobile()
    }
  }

  get displayTopNav() {
    return !this.state.mobile && !this.props.bottom
  }

  get displayBottomNav() {
    return this.state.mobile && this.props.bottom
  }

  onResize() {
    this.setState({
      mobile: isMobile()
    })
  }

  // Lifecycle
  componentDidMount() {
    if (process.browser) {
      window.addEventListener("resize", this.onResize.bind(this))
    }
  }

  componentWillUnmount() {
    if (process.browser) {
      window.removeEventListener("resize", this.onResize.bind(this))
    }
  }

  // Check if we are under the mobile threshold to avoid needless calls to render
  shouldComponentUpdate(nextProps, nextState) {
    return (isMobile() !== this.state.mobile)
  }

  render() {
    if (this.displayTopNav) {
      return (
        <TopNav>
          <NavButtons iconColor={this.iconColor}/>
        </TopNav>
      )
    } else if (this.displayBottomNav) {
      return (
        <BottomNav>
          <NavButtons iconColor={this.iconColor}/>
        </BottomNav>
      )
    } else {
      return (null)
    }
  }
}

function NavButtons() {
  return (
    <div>
      <a href={linkedIn}>
        <IconButton aria-label="LinkedIn">
          <FaLinkedinSquare fill={iconColor}
                            height={iconDimensions}
                            width={iconDimensions}/>
        </IconButton>
      </a>
      <a href={gitHub}>
        <IconButton aria-label="Github">
          <FaGithubSquare fill={iconColor}
                          height={iconDimensions}
                          width={iconDimensions}/>
        </IconButton>
      </a>
      <a href={facebook}>
        <IconButton aria-label="Facebook">
          <FaFacebookSquare fill={iconColor}
                            height={iconDimensions}
                            width={iconDimensions}/>
        </IconButton>
      </a>
      <a href={"mailto:" + email}>
        <IconButton aria-label="Email">
          <FaEnvelopeSquare fill={iconColor}
                            height={iconDimensions}
                            width={iconDimensions}/>
        </IconButton>
      </a>
    </div>
  )
}

// Styles
const TopNav = styled.div`
  
`

// TODO: get them equidistant from eachother
const BottomNav = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  width: 100%;
    
  position: fixed;
  left: 0px;
  bottom: 0px;
  
  background-color: ${colors.barColor};
  box-shadow: ${boxShadow};
  
`


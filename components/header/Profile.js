import React, {Component} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import email from "./NavIcons"
import {
  boxShadow
} from "../../util/styles.js"

export default class Profile extends Component {

  static propTypes = {
    fadeOutIn: PropTypes.string.isRequired,
    hasFaded: PropTypes.bool.isRequired,
    scrollDirection: PropTypes.string.isRequired
  }

  // Helpers
  get profileContent() {
    return (
      <ProfileStyle>
        <div className="profile-container">
          <img src="/static/img/linkedin.jpg"/>
          <div className="info">
            <div className="keys">
              <div>Age</div>
              <div>Address</div>
              <div>Email</div>
              <div>Phone</div>
            </div>
            <div className="values">
              <div>23</div>
              <div>535 Main St. Apt. 228, Nashville, TN 37206</div>
              <div> <a href={"mailto:" + email}>eloc49@gmail.com</a></div>
              <div>540.529.1426</div>
            </div>
          </div>
        </div>
      </ProfileStyle>
    )
  }

  get shouldRenderStatic() {
    return this.props.fadeOutIn === "none"
      && !this.props.hasFaded
  }

  get shouldFadeOut() {
    return this.props.fadeOutIn === "out"
  }

  get shouldFadeIn() {
    return this.props.fadeOutIn === "in"
      && this.props.hasFaded
  }

  render() {
    if (this.shouldRenderStatic) {
      return (
        <div>
          {this.profileContent}
        </div>
      )
    }
    if (this.shouldFadeOut) {
      return (
        <FadeOut id="fadeout">
          {this.profileContent}
        </FadeOut>
      )
    }
    if (this.shouldFadeIn) {
      return (
        <FadeIn id="fadein">
          {this.profileContent}
        </FadeIn>
      )
    }

    return (null)
  }
}

// Styles
const imgWidth = 350

const ProfileStyle = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  background-color: white;
  box-shadow: ${boxShadow};
  z-index: 3;
  transform: translate(-50%, 0);

  
  .profile-container {
    display: grid;
    grid-template-columns: 50% 50%;
    width: ${imgWidth * 2}px;
  }

  img {
    width: ${imgWidth}px;
  }
  
  .info {
    text-align: left;
    display: grid;
    grid-template-columns: 50% 50%;
    width: ${imgWidth}px;
    padding: 1rem;
    font-size: 1.2rem;
    color: black;
  }
  
  .keys {
    flex: 1 1 auto;
    padding-right: auto;
  }
  
  .values {
    flex: 1 1 auto;
  }
`
// TODO: add translates
const FadeOut = styled.div`
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  opacity: 0;
  animation: fadeOutUp 1s ease;
`

const FadeIn = styled.div`
  @keyframes fadeInDown {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
   }
  opacity: 1;
  animation: fadeInDown 1s ease;
`

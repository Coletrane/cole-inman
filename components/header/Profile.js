import React, {Component} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import email from "./NavIcons"
import {
  boxShadow
} from "../../util/styles.js"

const phone = "540-529-1426"

export default class Profile extends Component {

  static propTypes = {
    fadeOutIn: PropTypes.string.isRequired,
    hasFaded: PropTypes.bool.isRequired,
    scrollDirection: PropTypes.string.isRequired
  }

  // Helpers
  get age() {
    let birthday = new Date('April 13, 1994')
    birthday = Date.UTC(
      birthday.getFullYear(),
      birthday.getMonth(),
      birthday.getDay()
    )
    let today = new Date()
    today = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDay()
    )

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365
    return Math.floor(
      (today - birthday) / millisecondsPerYear
    )
  }

  get profileContent() {
    return (
      <ProfileStyle>
        <div className="profile-container">
          <img src="/static/img/cole.jpeg"/>
          <table>
            <tbody>
              <tr>
                <td className="key">Age</td>
                <td className="value">{this.age}</td>
              </tr>
              <tr>
                <td className="key">Address</td>
                <td className="value">2719 Summit Ridge Rd. Roanoke, VA 24012</td>
              </tr>
              <tr>
                <td className="key">Email</td>
                <td className="value"><a href={"mailto:" + email}>eloc49@gmail.com</a></td>
              </tr>
              <tr>
                <td className="key">Phone</td>
                <td className="value"><a href={"tel:" + phone}>{phone.replace(/-/g, ".")}</a></td>
              </tr>
            </tbody>
          </table>
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
    width: ${imgWidth}px;
    padding: 1rem;
    font-size: 1.2rem;
    color: black;
  }
  
  table {
    margin-top: 12%;
    color: black;
    font-size: 1.3rem;
  }
  
  td.key {
    font-weight: 400;
    padding: 1rem;
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;
  }
  
  td.value {
    padding-left: auto;
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
  animation: fadeOutUp .5s ease;
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
  animation: fadeInDown .5s ease;
`

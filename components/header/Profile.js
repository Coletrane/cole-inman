import React, {Component} from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  boxShadow
} from '../../util/styles.js'
export default class Profile extends Component {

  static propTypes = {
    fade: PropTypes.bool.isRequired,
    hasFaded: PropTypes.bool.isRequired
  }

  // Helpers
  get profileContent() {
    return (
      <div>
        <img src="/static/img/linkedin.jpg"/>
        <div className="info">
          <div className="keys">
            <div>Age</div>
          </div>
          <div className="values">
            <div>23</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.props.fade) {
      if (!this.props.hasFaded) {

      }
      return (
        <ProfileFadeUp>
          {this.profileContent}
        </ProfileFadeUp>
      )
    } else {
      return (
        this.profileContent
      )
    }
  }
}

// Styles
const imgWidth = 300

const ProfileStyle = styled.div`
  position: absolute;
  left: 25%;
  top: 60%;
  background-color: white;
  box-shadow: ${boxShadow};
  display: flex;
  z-index: 3;
  
  img {
    width: ${imgWidth}px
  }
  
  .info {
    width: ${imgWidth}px;
    padding: 1rem;
    display: flex;
  }
  
  .keys {
    flex: 1 1 auto;
    padding-right: auto;
  }
  
  .values {
    flex: 1 1 auto;
    padding-left: auto;
  }
`

const ProfileFadeUp = styled.div`
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
    }
    100% {
      transform: translateY(-50px);
      opacity: 0;
    }
  }
  
  animation: fadeOutUp 2s ease;
`

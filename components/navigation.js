import React, {Component} from 'react';

import {isMobile} from './layout.js'

// Components
import IconButton from 'material-ui/IconButton';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';

// Icon Components
import FaLinkedinSquare from 'react-icons/lib/fa';
import FaGithubSquare from 'react-icons/lib/fa';
import FaFacebookSquare from 'react-icons/lib/fa';
import FaEnvelopeSquare from 'react-icons/lib/fa';

const LINKEDIN = 'https://www.linkedin.com/in/cole-inman-61738565/';
const GITHUB = 'https://github.com/coletrane/';
const FACEBOOK = 'https://www.facebook.com/uhmcole';
const EMAIL = 'eloc49@gmail.com';

export default class Navigation extends Component {

  constructor() {
    super()
    this.state = {
      mobile: isMobile()
    }
  }

  navPressed(event, value) {
    console.log(event);
    console.log(value);
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
    if (this.state.mobile) {
      return (
        <BottomNavigation onChange={this.navPressed}>
          <BottomNavigationButton icon={FaLinkedinSquare}/>
          <BottomNavigationButton icon={FaGithubSquare}/>
          <BottomNavigationButton icon={FaFacebookSquare}/>
          <BottomNavigationButton icon={FaEnvelopeSquare}/>
        </BottomNavigation>
      )
    } else {
      return (
        <div>

        </div>
      )
      // top bar nav
    }
  }
}

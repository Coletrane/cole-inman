import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { isMobile } from './Layout.js';

// Components
import IconButton from 'material-ui/IconButton';

// Icon Components
import { FaLinkedinSquare } from 'react-icons/lib/fa';
import { FaGithubSquare } from 'react-icons/lib/fa';
import { FaFacebookSquare } from 'react-icons/lib/fa';
import { FaEnvelopeSquare } from 'react-icons/lib/fa';

const LINKEDIN = 'https://www.linkedin.com/in/cole-inman-61738565/';
const GITHUB = 'https://github.com/coletrane/';
const FACEBOOK = 'https://www.facebook.com/uhmcole';
const EMAIL = 'eloc49@gmail.com';


export default class Navigation extends Component {

  static propTypes = {
    bottom: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      mobile: isMobile(),
    };
  }

  onResize() {
    this.setState({
      mobile: isMobile()
    });
  }

  // Lifecycle
  componentDidMount() {
    if (process.browser) {
      window.addEventListener('resize', this.onResize.bind(this));
    }
  }

  componentWillUnmount() {
    if (process.browser) {
      window.removeEventListener('resize', this.onResize.bind(this));
    }
  }

  // Check if we are under the mobile threshold to avoid needless calls to render
  shouldComponentUpdate(nextProps, nextState) {
    return (isMobile() !== this.state.mobile);
  }

  render() {
    if (this.state.mobile && this.props.bottom) {
      return (
        <div>
          <NavButtons/>
        </div>
      );
    } else if (!this.state.mobile && !this.props.bottom) {
      return (
        <div>
          <NavButtons/>
        </div>
      );
    } else {
      return (null);
    }
  }
}

function NavButtons() {
  return (
    <div>
      <a href={LINKEDIN}>
        <IconButton aria-label="LinkedIn">
          <FaLinkedinSquare/>
        </IconButton>
      </a>
      <a href={GITHUB}>
        <IconButton aria-label="Github">
          <FaGithubSquare/>
        </IconButton>
      </a>
      <a href={FACEBOOK}>
        <IconButton aria-label="Facebook">
          <FaFacebookSquare/>
        </IconButton>
      </a>
      <a href={'mailto:' + EMAIL}>
        <IconButton aria-label="Email">
          <FaEnvelopeSquare/>
        </IconButton>
      </a>
    </div>
  );
}


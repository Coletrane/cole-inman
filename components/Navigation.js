import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, boxShadow } from '../util/styles';
import { isMobile } from '../util/functions';

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

const iconColor = "white"
const iconDimensions = "1.5em"

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

  get displayTopNav() {
    return !this.state.mobile && !this.props.bottom;
  }

  get displayBottomNav() {
    return this.state.mobile && this.props.bottom;
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
    if (this.displayTopNav) {
      return (
        <TopNav>
          <NavButtons iconColor={this.iconColor}/>
        </TopNav>
      );
    } else if (this.displayBottomNav) {
      return (
        <BottomNav>
          <NavButtons iconColor={this.iconColor}/>
        </BottomNav>
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
          <FaLinkedinSquare fill={iconColor}
                            height={iconDimensions}
                            width={iconDimensions}/>
        </IconButton>
      </a>
      <a href={GITHUB}>
        <IconButton aria-label="Github">
          <FaGithubSquare fill={iconColor}
                          height={iconDimensions}
                          width={iconDimensions}/>
        </IconButton>
      </a>
      <a href={FACEBOOK}>
        <IconButton aria-label="Facebook">
          <FaFacebookSquare fill={iconColor}
                            height={iconDimensions}
                            width={iconDimensions}/>
        </IconButton>
      </a>
      <a href={'mailto:' + EMAIL}>
        <IconButton aria-label="Email">
          <FaEnvelopeSquare fill={iconColor}
                            height={iconDimensions}
                            width={iconDimensions}/>
        </IconButton>
      </a>
    </div>
  );
}

// Styles
const TopNav = styled.div`
  float: right;
  text-align: right;
`;

// TODO: get them equidistant from eachother
const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  height: 56px;
  position: static;
  flex-shrink: 0;
  background-color: ${colors.barColor};
  box-shadow: ${boxShadow};
`;


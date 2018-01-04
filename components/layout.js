import React, {Component} from 'react';

// Components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Navigation from './navigation.js';

const MOBILE_WIDTH = 600;

export const isMobile = () => {
  // Normally this would be done using @media queries
  // but I am demonstrating React/JS knowledge with this project

  // Additionally, this shows the split between client and server side
  // code by checking if we are in the browser or server
  if (process.browser) {
    return document.documentElement.clientWidth < MOBILE_WIDTH;
  } else {
    return false
  }
}

export default class Layout extends Component {

  get title() {
    return "Cole Inman"
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title">
              {this.title}
            </Typography>
            <Navigation/>
          </Toolbar>
        </AppBar>

        <div className="main-content">
          { this.props.children }
        </div>

        <Navigation/>

      </div>
    );
  }
};

import React, {Component} from 'react';

// Components
import Head from 'next/head';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';

// Icon Components
import FaLinkedinSquare from 'react-icons/lib/fa';
import FaGithubSquare from 'react-icons/lib/fa';
import FaFacebookSquare from 'react-icons/lib/fa';
import FaEnvelopeSquare from 'react-icons/lib/fa';

// Theme stuff
import {blue300} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: blue300
  }
})

const MOBILE_WIDTH = 600;

const LINKEDIN = 'https://www.linkedin.com/in/cole-inman-61738565/';
const GITHUB = 'https://github.com/coletrane/';
const FACEBOOK = 'https://www.facebook.com/uhmcole';
const EMAIL = 'eloc49@gmail.com';

export default class Layout extends Component {

  // Utils
  isMobile() {
    // Normally this would be done using @media queries
    // but I am demonstrating React/JS knowledge with this project
    return document.documentElement.clientWidth < MOBILE_WIDTH;
  }

  navPressed(event, value) {
    console.log(event);
    console.log(value);
  }

  // Lifecycle
  mount() {

  }

  render() {
    return (
        <div>
          <MuiThemeProvider muiTheme={muiTheme}>

          <Head>
            <title>
              <Typography type="title">
                Cole Inman
              </Typography>
            </title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          </Head>

          <AppBar position="static">
            <Toolbar>
              Cole Inman
              {/*<IconButton color="contrast" */}
            </Toolbar>
          </AppBar>

          <div class="main-content">
            { this.props.children }
          </div>

          <BottomNavigation isMobile onChange={this.navPressed}>
            <BottomNavigationButton icon={FaLinkedinSquare}/>
            <BottomNavigationButton icon={FaGithubSquare}/>
            <BottomNavigationButton icon={FaFacebookSquare}/>
            <BottomNavigationButton icon={FaEnvelopeSquare}/>
          </BottomNavigation>

          </MuiThemeProvider>
        </div>
    );
  }
};

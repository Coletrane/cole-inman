import React, {Component} from 'react';
import styled from 'styled-components';

// Components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Navigation from './Navigation';

const TITLE = "Cole Inman";

const MOBILE_WIDTH = 600;

export const isMobile = () => {
  // Normally this would be done using @media queries
  // but I am demonstrating React/JS knowledge with this project

  // Additionally, this shows the split between client and server side
  // code by checking if we are in the browser or server
  if (process.browser) {
    return document.documentElement.clientWidth < MOBILE_WIDTH;
  } else {
    return false;
  }
};

export default class Layout extends Component {
  
  render() {
    return (
      <Wrapper>

          <AppBar className="app-bar"
                  position="static">
            <Toolbar>
              <Typography type="title">
                <Title>
                  {TITLE}
                </Title>
                <Navigation bottom={false}/>
              </Typography>
            </Toolbar>
          </AppBar>

          <MainContent>
            { this.props.children }
          </MainContent>

        <Navigation bottom={true}/>

      </Wrapper>
    );
  }
};

// Styles
const Wrapper = styled.div`
  background-color: #001880;
  background-image: url('../static/img/dark-wood.png');
`

const Title = styled.div`
  color: white;
  text-align: center;
`

const MainContent = styled.div`
  
`

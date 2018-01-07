import React, { Component } from 'react'
import styled from 'styled-components'

import { colors } from '../util/styles.js'
import { isMobile } from '../util/functions.js'

// Components
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Navigation from './Navigation.js'

const title = 'COLE INMAN'

export default class Layout extends Component {

  render() {
    return (
      <AppWrapper>

        <AppBarWrapper>
          <AppBar className="app-bar"
                  position="static">
            <Toolbar>
              <Title>
                <h1>
                  {title}
                </h1>
              </Title>
              <Navigation bottom={false}/>
            </Toolbar>
          </AppBar>
        </AppBarWrapper>

        <MainContent>
          {this.props.children}
        </MainContent>

        <Navigation bottom={true}/>
      </AppWrapper>
    )
  }
};

// Styles
const AppWrapper = styled.div`
  //background-color: #001880;
  // background-image: url('../static/img/dark-wood.png');
  
  header {
    background-color: ${colors.barColor};
  }
`
const AppBarWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
`

const Title = styled.div`
  color: white;
  text-align: center;
`

const MainContent = styled.div`
  
`

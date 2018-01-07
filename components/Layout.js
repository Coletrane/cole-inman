import React, { Component } from 'react'
import styled from 'styled-components'

import { colors } from '../util/styles.js'
import { isMobile } from '../util/functions.js'

// Components
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Navigation from './Navigation.js'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const TITLE = 'Cole Inman'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

export default class Layout extends Component {

  render() {
    return (
      <Wrapper>
        {/*<MuiThemeProvider theme={theme}>*/}
        {/*<WithTheme/>*/}
        <AppBar className="app-bar"
                position="static">
          <Toolbar>
            <Typography type="title">
              <Title>
                {TITLE}
              </Title>
            </Typography>
            <Navigation bottom={false}/>
          </Toolbar>
        </AppBar>

        <MainContent>
          {this.props.children}
        </MainContent>

        <Navigation bottom={true}/>
        {/*</MuiThemeProvider>*/}
      </Wrapper>
    )
  }
};

// Styles
const Wrapper = styled.div`
  //background-color: #001880;
  // background-image: url('../static/img/dark-wood.png');
  
  header {
    background-color: ${colors.barColor};
  }
`

const Title = styled.div`
  color: white;
  text-align: center;
`

const MainContent = styled.div`
  
`

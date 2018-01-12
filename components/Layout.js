import React, {Component} from "react"
import MediaQuery from "react-responsive"
import {colors, mediaQueries} from "../util/styles.js"
import {isMobile} from "../util/functions"

// Components
import Navigation from "./Navigation.js"
import Header from "./Header"


export default class Layout extends Component {

  render() {
    return (
      <div style={appStyle}>
        <Header/>
        <MediaQuery query={mediaQueries.mobileAndDesktop.mobile}>
          <div style={mainContentStyle.mobile}>
            {this.props.children}
          </div>
        </MediaQuery>
        <MediaQuery query={mediaQueries.mobileAndDesktop.desktop}>
          <div style={mainContentStyle.desktop}>
            {this.props.children}
          </div>
        </MediaQuery>
        <Navigation bottom={true}/>
      </div>
    )
  }
};

// Styles
const appStyle = {
  header: {
    backgroundColor: colors.barColor
  }
}

const titleStyle = {
  color: "white",
  textAlign: "center"
}

const mainContentStyle = {
  desktop: {
    marginTop: "100px",
    marginBottom: "60px"
  },
  mobile: {
    marginTop: "60px",
    marginBottom: "60px"
  }
}


import React, { Component } from 'react'
import styled from 'styled-components'
import webshots from '../../../util/webshots'

// Components
import AbstractProject from './AbstractProject'
import { gitHub } from '../../Navigation'

export default class Mtbva extends Component {

  render() {
    return (
      <div>
        <AbstractProject title="Mountain Bike Virginia"
                         subheader="Server Side Rendered app using Vue.js, Nuxt.js, Node.js, and AWS EC2"
                         imgSrc={webshots.localSrc(webshots.pages.mtbva)}
                         liveSite={webshots.pages.mtbva.url}
                         gitHub={gitHub + 'mountain-bike-virginia'}>
          <p>Site my father and I's bike race production business. Used for blog posts and race results.</p>
        </AbstractProject>
      </div>
    )
  }
}

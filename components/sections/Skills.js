import React, { Component } from 'react'
import styled from 'styled-components'

import { mobileWidth } from '../../util/functions'

const minWidth = (mobileWidth - 1) + 'px'
const maxWidth = mobileWidth + 'px'
// Components
import Card,
{
  CardContent,
  CardHeader,
  CardActions
} from 'material-ui/Card'
import Skill from './skills/Skill'


export default class Skills extends Component {

  render() {
    return (
      <div>
        <h1> Skills</h1>

        <Card title="Javascript">
          <SkillsStyle>
            <JsSkills/>
          </SkillsStyle>
        </Card>
      </div>
    )
  }
}

const SkillsStyle = styled.div`
  img {
    height: auto;
  }
`

const Img = styled.img`
  @media (min-width: ${minWidth}) {
    width: ${props => props.desktop};
  }
  @media (max-width: ${maxWidth}) {
    width: ${props => props.mobile};
  }
`

function SkillListItem(props) {
  return (
    <li>
      <h6> {props.name} </h6>
      <Img src={props.imgSrc}
           desktop={props.desktop}
           mobile={props.mobile}/>
    </li>
  )
}


function JsSkills() {
  return (
    <ul>
      <Typescript/>
      <ReactLolNameCollision/>
      <Angular/>
    </ul>

  )
}

function Typescript() {

  return (
    <SkillListItem name="Typescript"
                   imgSrc="/static/img/logos/ts.png"
                   desktop="10%"
                   mobile="15%"/>
  )
}

function ReactLolNameCollision() {

  return (
    <SkillListItem name="React"
                   imgSrc="/static/img/logos/react.png"
                   desktop="10%"
                   mobile="15%"/>
  )
}

function Angular() {

  return (
    <SkillListItem name="Angular"
                   imgSrc="/static/img/logos/angular.png"
                   desktop="10%"
                   mobile="15%"/>
  )
}
//
//       // function GeneralSkills() {
// //   return (
// //
// //   )
// // }
//       //
//       // function BackendSkills() {
// //   return (
// //
// //   )
// // }



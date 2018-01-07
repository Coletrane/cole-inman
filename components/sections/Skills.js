import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components
import Card,
{
  CardContent,
  CardHeader,
  CardActions
} from 'material-ui/Card'
import GeneralSkills from './skills/GeneralSkills'
import FrontEndSkills from './skills/FrontEndSkills'
import BackEndSkills from './skills/BackEndSkills'

export default class Skills extends Component {

  render() {
    return (
      <div>
        <h1> Skills</h1>

        <Card title="Javascript">
          <SkillsStyle>
            <GeneralSkills/>
            <FrontEndSkills/>
            <BackEndSkills/>
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



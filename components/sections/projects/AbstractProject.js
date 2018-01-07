import React, { Component } from 'react'
import styled from 'styled-components'
import webshots from '../../../util/webshots'

// Components
import Card,
{
  CardContent,
  CardHeader,
  CardActions
} from 'material-ui/Card'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'

export default class AbstractProject extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    subheader: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
  }

  render() {

    return (
      <Card>
        <CardHeader title={this.props.title}
                    subheader={this.props.subheader}/>

        <SiteImg>
          <img src={this.props.imgSrc}
               alt={this.props.title}/>
        </SiteImg>

        <CardContent>
          {this.props.children}
        </CardContent>

        <CardActions>
          <ProjectButton url={"http://" + this.props.liveSite}
                         text="Live Site"/>
          <ProjectButton url={this.props.gitHub}
                         text="Github Repo"/>
        </CardActions>

      </Card>
    )
  }
}

function ProjectButton(props) {
  if (props.url && props.text) {
    return (
      <a href={props.url}>
        <Button raised>
          <span>
            {props.text}
          </span>
        </Button>
      </a>
    )
  } else {
    return (null)
  }
}

// Styles
const SiteImg = styled.div`
  img {
    width: 50%;
    height: auto;
  }
`

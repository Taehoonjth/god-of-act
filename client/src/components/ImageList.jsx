import React, {Component} from 'react'
import {Card, Loader, Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ImageElement from './ImageElement.jsx'

export default class ImageList extends Component {

  render () {

    return (
      <div>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
                <Card.Group itemsPerRow={2} doubling>
                  <ImageElement emotion= "anger" title="분노 : anger" description="살면서 가장 빡쳤던 순간을 떠올려보세요."/>
                  <ImageElement emotion= "disgust" title="역겨움 : disgust"/>
                  <ImageElement emotion= "fear" title="공포 : fear"/>
                  <ImageElement emotion= "happiness" title="행복 : happiness"/>
                  <ImageElement emotion= "surprise" title="놀라움 : surprise"/>
                </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
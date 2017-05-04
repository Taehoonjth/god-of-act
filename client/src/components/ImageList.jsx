import React, {Component} from 'react'
import {Card, Grid} from 'semantic-ui-react'
import ImageElement from './ImageElement.jsx'

export default class ImageList extends Component {

  render () {

    return (
      <div>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
                <Card.Group itemsPerRow={2} doubling>
                  <ImageElement emotion= "happiness" title="행복 : happiness"/>
                  <ImageElement emotion= "anger" title="분노 : anger" description="살면서 가장 빡쳤던 순간을 떠올려보세요."/>
                  <ImageElement emotion= "sadness" title="슬픔 : sadness"/>
                  <ImageElement emotion= "surprise" title="놀라움 : surprise"/>
                </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
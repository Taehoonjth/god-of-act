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
                  <ImageElement emotion= "happiness" title="행복 : happiness" description="행복한 표정으로 셀카를 찍으세요." />
                  <ImageElement emotion= "anger" title="분노 : anger" description="분노한 표정으로 셀카를 찍으세요." />
                  <ImageElement emotion= "sadness" title="슬픔 : sadness" description="슬픈 표정으로 셀카를 찍으세요." />
                  <ImageElement emotion= "surprise" title="놀라움 : surprise" description="놀라운 표정으로 셀카를 찍으세요." />
                </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
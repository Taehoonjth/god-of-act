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
                  <ImageElement emotion= "happiness" emotionKr= "행복" title="행복한 표정으로 셀카를 찍으세요." src="https://s3-us-west-1.amazonaws.com/affluentsponges/product_image/7402462126721066" />
                  <ImageElement emotion= "anger" emotionKr= "분노" title="분노한 표정으로 셀카를 찍으세요." src="https://s3-us-west-1.amazonaws.com/affluentsponges/product_image/1503615830431890" />
                  <ImageElement emotion= "sadness" emotionKr= "슬픔" title="슬픈 표정으로 셀카를 찍으세요." src="https://s3-us-west-1.amazonaws.com/affluentsponges/product_image/6627893490268477" />
                  <ImageElement emotion= "surprise" emotionKr= "놀라움" title="놀라운 표정으로 셀카를 찍으세요." src="https://s3-us-west-1.amazonaws.com/affluentsponges/product_image/4356134430481715" />
                </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
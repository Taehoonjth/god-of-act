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
                  <ImageElement />
                  <ImageElement />
                  <ImageElement />
                  <ImageElement />
                  <ImageElement />
                </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

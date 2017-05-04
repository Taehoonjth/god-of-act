import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {Grid, Header, Icon} from 'semantic-ui-react'

export default class Footer extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <footer>
        <div className="footer-inner">
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <a href="https://github.com/Taehoonjth/god-of-act.git">
                  <Header as="h3" inverted>
                    <Icon name="github" />
                    <Header.Content>
                      연기의 신
                      <Header.Subheader>
                        Powered by Mircrosoft Emotion API
                      </Header.Subheader>
                      <Header.Subheader>
                        ©2017 Taehoon Jung
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </footer>
    )
  }
}
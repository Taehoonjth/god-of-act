import React, {Component} from 'react'
import {Card, Icon, Image, Button, Segment, Dimmer, Loader} from 'semantic-ui-react'
import upload from 'superagent/lib/client'

export default class ImageElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'',
      score: '',
      fetching: false
    }
    this.imangePreview = this.imangePreview.bind(this);
  }

  imangePreview() {
    this.setState({fetching: true});
    var _this = this;
    const emotion = this.props.emotion;
    var oFReader = new FileReader();
    upload.post('/api/image')
    .attach('theseNamesMustMatch', document.getElementById(emotion).files[0])
    .end((err, res) => {
      if (err) console.log('this is err', err);
      console.dir(res.body);
      var score = (Math.floor(res.body.emotionResult[0].scores[_this.props.emotion] * 10000) / 100).toString();
      _this.setState({
        score: score,
        fetching: false
      });
    })
    oFReader.readAsDataURL(document.getElementById(emotion).files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById(`${emotion}Image`).src = oFREvent.target.result;
    };
  }

  render () {
    const emotion = this.props.emotion;
    return (
      <Card>
        <Image src={this.props.src} id={`${emotion}Image`}/>
        <Card.Content>
          {this.state.score? 
            <Card.Header>{this.props.emotionKr} 연기는 {this.state.score}점 입니다.</Card.Header> : 
            <Card.Header>{this.props.title}</Card.Header>
          }
          <Dimmer active={this.state.fetching}>
            <Loader>표정 분석중..</Loader>
          </Dimmer>
          <Button as="label" htmlFor={emotion} basic circular icon color='black' size='large' id="camera-btn">
            <Icon name='instagram' size="large"/>
          </Button>
          <input type="file" accept="image/*" capture="camera" id={emotion} onChange={this.imangePreview} />
        </Card.Content>
      </Card>
    )
  }
}

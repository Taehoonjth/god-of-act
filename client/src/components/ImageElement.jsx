import React, {Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import upload from 'superagent/lib/client'

export default class ImageElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:''
    }
    this.imangePreview = this.imangePreview.bind(this);
  }

  imangePreview() {
    const emotion = this.props.emotion;
    var oFReader = new FileReader();
    upload.post('/api/image')
    .attach('theseNamesMustMatch', document.getElementById(emotion).files[0])
    .end((err, res) => {
      if (err) console.log('this is err', err);
      console.log(res.text);
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
        <Image src='https://metnew.github.io/react-semantic.ui-starter/images/dummy.png' id={`${emotion}Image`}/>
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
          <Card.Description>{this.props.description}</Card.Description>
          <Button as="label" htmlFor={emotion} icon color='red'>
            <Icon name='camera' size="large"/>
          </Button>
          <input type="file" accept="image/*" capture="camera" id={emotion} onChange={this.imangePreview} />
        </Card.Content>
      </Card>
    )
  }
}
import React, {Component} from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

export default class ImageElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:''
    }
    this.imangePreview = this.imangePreview.bind(this);
  }

  imangePreview() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("angry").files[0]);
    console.dir(document.getElementById("angry").files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
  }

  render () {
    return (
      <Card>
        <Image src='https://metnew.github.io/react-semantic.ui-starter/images/dummy.png' id="uploadPreview"/>
        <Card.Content>
          <Card.Header>{this.props.emotion}</Card.Header>
          <Card.Description>{this.props.description}</Card.Description>
          <Button as="label" htmlFor="angry" icon color='red'>
            <Icon name='camera' size="large"/>
          </Button>
          <input type="file" accept="image/*" capture="camera" id="angry" onChange={this.imangePreview} />
        </Card.Content>
      </Card>
    )
  }
}
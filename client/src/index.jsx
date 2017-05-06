import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, Container, Header, Divider, Seg} from 'semantic-ui-react'

import Footer from './components/Footer.jsx'
import ImageList from './components/ImageList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: {
        anger: '',
        disgust: '',
        fear: '',
        happiness: '',
        sadness: '',
        surprise: ''
      },
      score: {
        anger: '',
        disgust: '',
        fear: '',
        happiness: '',
        sadness: '',
        surprise: ''
      }
    }
  }

  render() {
    return (
      <div>
        <Container text>
          <Divider hidden />
          <Header as='h2' textAlign='center'>내 표정연기 점수는?</Header>
          <Divider hidden />
          <Header as='h3' textAlign='center' className='sevice-dis'>마이크로소프트의 머신러닝 기술로 당신의 표정에서 감정을 측정합니다. 행복, 공포, 슬픔, 놀라움의 감정을 표정으로 표현해보세요.</Header>
          <Header as='h3' textAlign='center' className='sevice-dis'>사진은 감정 분석 직후 서버에서 바로 삭제됩니다. 사진을 보관하려면 캡쳐하세요.</Header>
          <Divider hidden />
        </Container>
        <Container>
          <ImageList />
        </Container>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
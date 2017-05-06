import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, Container, Header, Divider} from 'semantic-ui-react'

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
          <Header as='h2' textAlign='centered'>자신의 연기력을 측정해보세요.</Header>
          <Divider hidden />
          <Header as='h3' textAlign='centered' className='sevice-dis'>마이크로소프트의 머신러닝 기술로 당신의 표정에서 감정을 읽습니다. 행복, 공포, 슬픔, 놀라움의 감정을 표정으로 표현해보세요.</Header>
          <Divider hidden />
        </Container>
        <Container>
          <ImageList />
        </Container>
        <button id="result-btn">나의 연기 종합 평가 및 순위 보기</button>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
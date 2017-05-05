import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'semantic-ui-react'

import Footer from './components/Footer.jsx'
import ImageList from './components/ImageList.jsx'

var demoData = [
  {
    "faceRectangle": {
      "left": 176,
      "top": 188,
      "width": 213,
      "height": 213
    },
    "scores": {
      "anger": 0.000005779621,
      "disgust": 0.0000245519477,
      "fear": 0.000346612127,
      "happiness": 0.114344768,
      "sadness": 0.0000173390872,
      "surprise": 0.875295341
    }
  }
];

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
        <h1>연기의 신</h1>
        <h2>최첨단 기술을 잉여롭게 써보자</h2>
        <h3>사용방법: 각 감정에 몰입한 뒤 카메라 버튼을 누르고 셀카를 찍는다. 6개의 모든 셀카를 찍었으면 '나의 연기는 몇점'버튼을 누르고 결과를 확인한다.</h3>
        <ImageList />
        <Footer />
        <button id="result-btn">나의 연기 종합 평가 및 순위 보기</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
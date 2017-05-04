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
        <ImageList />
        <Footer />
        <button id="result-btn">나의 연기는 몇점?</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
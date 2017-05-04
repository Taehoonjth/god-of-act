import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
        image Component
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
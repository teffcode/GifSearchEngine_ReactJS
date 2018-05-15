import React, { Component } from 'react';
import request from 'superagent';

import Search from './components/Search/Search';
import GifList from './components/GifList/GifList';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;

    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    
    return (
      <div>
        <Search onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;

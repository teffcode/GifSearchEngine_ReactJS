import React, { Component } from 'react';
import request from 'superagent';

import Search from './components/Search/Search';
import GifList from './components/GifList/GifList';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        gifs: [
            {
                id: 1,
                url: 'https://png.icons8.com/nolan/2x/gif.png'
            },
            {
                id: 2,
                url: 'https://png.icons8.com/nolan/2x/gif.png'
            },
            {
                id: 3,
                url: 'https://png.icons8.com/nolan/2x/gif.png'
            }
        ]
    }
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;

    request.get(url, function(err, res) {
        console.log(res.body.data[0]);
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

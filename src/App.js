import React, { Component } from 'react';

import Search from './components/Search/Search';
import GifList from './components/GifList/GifList';

import './App.css';

class App extends React.Component {
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
    console.log(term);
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

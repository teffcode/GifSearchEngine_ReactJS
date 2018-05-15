import React, { Component } from 'react';

import Search from './components/Search/Search';

import './App.css';

class App extends React.Component {
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <Search onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

export default App;

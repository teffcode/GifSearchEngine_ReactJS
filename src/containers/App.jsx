import React, { Component } from 'react';
import { connect } from 'react-redux';

import GifsTemp from '../components/GifsTemp/GifsTemp';

class App extends Component {
  render() {
    return (
      <div>
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

export default connect(mapStateToProps)(App);
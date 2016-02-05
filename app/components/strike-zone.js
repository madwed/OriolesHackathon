/* @flow */

import React, { Component } from 'react';
import nextGuess from '../actions/next-guess';

import wrapper from './wrapper';

class StrikeZone extends Component {
  constructor(props) {
    super(props);
    this.guess = this.guess.bind(this)
  }
  guess(e) {
    this.props.dispatch(nextGuess(e));
  }
  render() {
    return (
      <Zone
        onClick={this.guess}
      >
        <Strike/>
      </Zone>
    );
  }
}

const Zone = wrapper({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '50vh',
  width: '37.5vh',
  backgroundColor: "#000",
  border: '2px solid #fb4f14',
  opacity: 0.5,
  zIndex: '1',
});

const Strike = wrapper({
  width: '60%',
  height: '60%',
  border: '2px solid #ffff00'
});

export default connect()(StrikeZone);

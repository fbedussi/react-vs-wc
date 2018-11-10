import React, { Component } from 'react';
import {randomRgbVal} from './utils';

function getNewState () {
  return {
    width: Math.floor(Math.random() * 80), 
    color: `rgb(${randomRgbVal()}, ${randomRgbVal()}, ${randomRgbVal()})`
  };
}

class GridElement extends Component {
  constructor() {
    super();

    this.state = getNewState();

  }
  
  componentDidMount() {
    this.refreshState();
  }

  refreshState() {
    this.setState(getNewState());
    setTimeout(this.refreshState.bind(this), Math.floor(Math.random * 2000));
  }

  render() {
    const style = {
      display: 'inline-block', 
      height: '30px', 
      width: `${this.state.width}px`, 
      backgroundColor: this.state.color
    };

    return (<span style={style}></span>)
  }
}

export default GridElement;

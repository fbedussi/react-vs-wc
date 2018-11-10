import React, { Component } from 'react';

const randomRgbVal = () => Math.floor(Math.random() * 256);
const stateLength = 5000;

function refreshState () {
  const state = Array.from({length: stateLength}, () => ({
    width: Math.floor(Math.random() * 80), 
    color: `rgb(${randomRgbVal()}, ${randomRgbVal()}, ${randomRgbVal()})`
  }));

  return state;
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      elements: refreshState(),
    }

    setInterval(() => {
      this.setState({elements: refreshState()});
    }, 500);
  }
  render() {
    return (
      <div className="App">
        {this.state.elements.map((el, i) => {
          const style = {
            display: 'inline-block', 
            height: '30px', 
            width: `${el.width}px`, 
            backgroundColor: el.color
          };
          return <span key={i} style={style}></span>
        })}
      </div>
    );
  }
}

export default App;

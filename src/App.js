import React, { Component } from 'react';
import GridElement from './GridElement';
import {refreshRandomElements, getGridElements, numberOfGridElements, numberOfRandomElements} from './utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      randomElements: refreshRandomElements(),
      gridElements: getGridElements(),
    }

    setInterval(() => {
      this.setState({elements: refreshRandomElements()});
    }, 500);
  }
  
  render() {
    return (
      <div className="App">
        <h1>{`${numberOfGridElements} elements refreshing indipendently and randomly`}</h1>
        {this.state.gridElements.map((dummy, i) => (<GridElement key={i}/>))}
        <h1>{`${numberOfRandomElements} elements refreshing randomly but all toghether`}</h1>
        {this.state.randomElements.map((el, i) => {
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

import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:'',
    }
    this.clickDecimal = this.clickDecimal.bind(this);
  }
  clickDecimal = (value) =>{
    console.log("Clicked");
    this.setState({
      display:this.state.display+value,
    });
  }
  render(){
    return (
      <div className='container' id='calculator'>
        <div className='display'>
          <div className='display' id='previous-numbers'><p>0</p></div>
          <div className='display' id='current-number'><p>{this.state.display || 0}</p></div>
        </div>
        <div className='keyboard'>
          <div className='row' id='first-row'>
            <button className='btn btn-warning' id="clear">AC</button>
            <button className='btn btn-warning' id="delete">CE</button>
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="seven" value="7" onClick={(e) => this.clickDecimal(e.target.value)}>7</button>
            <button className='btn btn-primary' id="eight" value="8" onClick={(e) => this.clickDecimal(e.target.value)}>8</button>
            <button className='btn btn-primary' id="nine" value="9" onClick={(e) => this.clickDecimal(e.target.value)}>9</button>
            <button className='btn btn-secondary' id="plus" value="+" >+</button>
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="four" value="4" onClick={(e) => this.clickDecimal(e.target.value)}>4</button>
            <button className='btn btn-primary' id="five" value="5" onClick={(e) => this.clickDecimal(e.target.value)}>5</button>
            <button className='btn btn-primary' id="six" value="6" onClick={(e) => this.clickDecimal(e.target.value)}>6</button>
            <button className='btn btn-secondary' id="minus" value="-" >-</button>
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="one" value="1" onClick={(e) => this.clickDecimal(e.target.value)}>1</button>
            <button className='btn btn-primary' id="two" value="2" onClick={(e) => this.clickDecimal(e.target.value)}>2</button>
            <button className='btn btn-primary' id="three" value="3" onClick={(e) => this.clickDecimal(e.target.value)}>3</button>
            <button className='btn btn-secondary' id="multiply" value="*">*</button>  
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="zero" value="0">0</button>
            <button className='btn btn-secondary' id="dot" value=".">.</button>
            <button className='btn btn-success' id="equal" value="=">=</button>
            <button className='btn btn-secondary' id="division" value="/">/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

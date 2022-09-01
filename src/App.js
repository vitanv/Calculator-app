import React from 'react';
import './App.css';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:'',
      formula:'',
      previous:'',
    }
    this.clickDecimal = this.clickDecimal.bind(this);
    this.clickCE = this.clickCE.bind(this);
    this.clickOperator = this.clickOperator.bind(this);
    this.clickEqual = this.clickEqual.bind(this);
  }

  clickDecimal = (value) =>{
    if(value == 0 && this.state.display == ''){
      return;
    }
    this.setState({
      display:this.state.display+value,
    });
  }
  clickOperator = (value) =>{
    if(this.state.display == ''){
      return;
    }
    this.setState({
      formula:this.state.formula+this.state.display+value,
      display:'',
    })
  }
  clickCE = () => {
    this.setState({
      display:'',
    })
  }
  clickAC = () => {
    this.setState({
      display:'',
      formula:'',
    })
  }
  clickEqual = () =>{
    if(this.state.formula == '' || this.state.display == '') return;
    let answer = eval(this.state.formula + this.state.display);
    this.setState({
      display:answer,
      formula:'',
    })
  }
  render(){
    return (
      <div className='container' id='calculator'>
        <div className='display'>
          <div className='display' id='previous-numbers'><p>{this.state.formula || 0}</p></div>
          <div className='display' id='current-number'><p>{this.state.display || 0}</p></div>
        </div>
        <div className='keyboard'>
          <div className='row' id='first-row'>
            <button className='btn btn-warning' id="clear" onClick={this.clickAC}>AC</button>
            <button className='btn btn-warning' id="delete" onClick={this.clickCE}>CE</button>
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="seven" value="7" onClick={(e) => this.clickDecimal(e.target.value)}>7</button>
            <button className='btn btn-primary' id="eight" value="8" onClick={(e) => this.clickDecimal(e.target.value)}>8</button>
            <button className='btn btn-primary' id="nine" value="9" onClick={(e) => this.clickDecimal(e.target.value)}>9</button>
            <button className='btn btn-secondary' id="plus" value="+" onClick={(e) => this.clickOperator(e.target.value)}>+</button>
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="four" value="4" onClick={(e) => this.clickDecimal(e.target.value)}>4</button>
            <button className='btn btn-primary' id="five" value="5" onClick={(e) => this.clickDecimal(e.target.value)}>5</button>
            <button className='btn btn-primary' id="six" value="6" onClick={(e) => this.clickDecimal(e.target.value)}>6</button>
            <button className='btn btn-secondary' id="minus" value="-" onClick={(e) => this.clickOperator(e.target.value)}>-</button>
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="one" value="1" onClick={(e) => this.clickDecimal(e.target.value)}>1</button>
            <button className='btn btn-primary' id="two" value="2" onClick={(e) => this.clickDecimal(e.target.value)}>2</button>
            <button className='btn btn-primary' id="three" value="3" onClick={(e) => this.clickDecimal(e.target.value)}>3</button>
            <button className='btn btn-secondary' id="multiply" value="*" onClick={(e) => this.clickOperator(e.target.value)}>*</button>  
          </div>
          <div className='row'>
            <button className='btn btn-primary' id="zero" value="0" onClick={(e) => this.clickDecimal(e.target.value)}>0</button>
            <button className='btn btn-secondary' id="dot" value="." onClick={(e) => this.clickDecimal(e.target.value)}>.</button>
            <button className='btn btn-success' id="equal" value="=" onClick={this.clickEqual}>=</button>
            <button className='btn btn-secondary' id="division" value="/" onClick={(e) => this.clickOperator(e.target.value)}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

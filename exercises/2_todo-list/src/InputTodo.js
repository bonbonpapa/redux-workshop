import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';



class InputTodo extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      inputValue: ""
      
    };
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    
    // You need to add code here
    this.props.dispatch({type:"ADDTO", todo: this.state.inputValue});

    this.setState(
      {inputValue: ""}
    );
  }
  handleChange = (evt) => {
    this.setState({ inputValue: evt.target.value })
  }
  handleClick = (evt) => {
    this.props.dispatch({type:"REVERSE"})
  }
  render = () => {
    return (<form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} value={this.state.inputValue}/>
      <button onClick= {this.handleClick} type = 'button'>Reverse</button>
      <input type="submit" />
    </form>)
  }
}



export default connect()(InputTodo);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

// This component doesn't use any data in the store! Fix this.
class DisplayTodos extends Component {
  render = () => {
    return (<ul> {this.props.todos.map(todo => <li>{todo}</li>)} </ul>)
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(DisplayTodos);

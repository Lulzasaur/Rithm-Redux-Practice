import React, { Component } from 'react';
import ToDoBoard from '../container/ToDoBoard';
import ToDoForm from '../container/ToDoForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ToDoForm />
       <ToDoBoard />
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v4'


class ToDoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDo: ''
    }
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add(evt)   { 
    evt.preventDefault();
    this.props.dispatch({ type: "CREATE", toDo: {"toDo": this.state.toDo, "id": uuid()
  }}); 
    this.setState({toDo: ''
   })
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value })    
  }

  render(){
    console.log("render ran; props", this.props);
    return <div>
       <form onSubmit={this.add}>
        <label htmlFor="toDo">ToDo</label>
        <input name="toDo" onChange={this.handleChange} value={this.state.toDo}/>
        <button> Submit </button>
       </form>
      </div>;
  }
}

export default connect()(ToDoForm)
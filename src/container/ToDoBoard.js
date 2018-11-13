import React, {Component} from 'react'
import {connect} from 'react-redux'
import ToDo from '../components/ToDo'
import {deleteToDo} from './actionCreators'

class ToDoBoard extends Component{

    render(){
        let toDos = []
        for (let key in this.props.toDos) {
            toDos.push(<ToDo toDo={this.props.toDos[key].toDo} id={key} delete={this.props.deleteToDo}/>)
        }
        return (
            <div>
                <ul>{toDos}</ul>
               
            </div>
        )
    }
}

  export default connect(state => ({toDos: state}),{deleteToDo})(ToDoBoard)
  
  

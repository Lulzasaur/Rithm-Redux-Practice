import React, {Component} from 'react'
import {connect} from 'react-redux'
import ToDo from './ToDo'

class ToDoBoard extends Component{

    render(){
        let toDos = []
        for (let key in this.props.toDos) {
            toDos.push(<ToDo toDo={this.props.toDos[key].toDo} id={key} />)
        }
        return (
            <div>
                <ul>{toDos}</ul>
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps ran; redux state:", state);
    return { toDos: state };
  }
  
  const connectedComponent = connect(mapStateToProps);
  
  export default connectedComponent(ToDoBoard)

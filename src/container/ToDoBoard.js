import React, {Component} from 'react'
import {connect} from 'react-redux'
import ToDo from '../components/ToDo'
import {DELETE} from './actionTypes'

class ToDoBoard extends Component{

    render(){
        let toDos = []
        for (let key in this.props.toDos) {
            toDos.push(<ToDo toDo={this.props.toDos[key].toDo} id={key} delete={this.props.delete}/>)
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

const mapDispatchToProps = function(dispatch) {
    return {
      delete: function(id) {
        // call the reducer!
        dispatch({
          type: DELETE,
          id:id,
        });
      }
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ToDoBoard)
  


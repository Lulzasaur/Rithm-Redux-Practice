import React, {Component} from 'react'
import {connect} from 'react-redux'


class ToDo extends Component{
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
    }
    delete() {
        this.props.dispatch({ type: "DELETE", id: this.props.id}); 
    }

    render(){
        return (
            <div>
                <li><p>{this.props.toDo}</p>
               <button onClick={this.delete}>Delete To Do</button></li>
            </div>
        )
    }
}

export default connect()(ToDo)
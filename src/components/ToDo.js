import React, {Component} from 'react'

class ToDo extends Component{

    render(){
        return (
            <div>
                <li><p>{this.props.toDo}</p>
               <button onClick={()=>this.props.delete(this.props.id)}>Delete To Do</button></li>
            </div>
        )
    }
}

export default ToDo
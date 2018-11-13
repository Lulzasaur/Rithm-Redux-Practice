import {CREATE, DELETE} from './actionTypes'

function deleteToDo(id) {
    return {
          type: DELETE,
          id:id,
        }
};

function createToDo(toDoObj) {
        return {
              type: CREATE,
              toDo: toDoObj,
          }
};

export {deleteToDo,createToDo}
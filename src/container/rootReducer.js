import {CREATE,DELETE} from './actionTypes'

const INITIAL_STATE = { };

function rootReducer(state=INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  if (action.type === CREATE) {
    return { ...state, [action.toDo.id]: action.toDo  };
  }

  if (action.type === DELETE) {
      let newState = {...state}
      delete newState[action.id]
    return newState;
  }

  return state;
}

export default rootReducer
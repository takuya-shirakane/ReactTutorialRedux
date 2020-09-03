import { combineReducers } from "redux";
import { ADD, CHANGE_NUMBER, CHANGE } from "./actions";

const initialState = [{ squares: Array(9).fill(null) }];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const { historyBack, squares } = action;
      return [...historyBack, { squares }];
    default:
      return state;
  }
};

const stepNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_NUMBER:
      return action.stepNumber;
    default:
      return state;
  }
};

const xIsNextReducer = (state = true, action) => {
  switch (action.type) {
    case CHANGE:
      return action.xIsNext;
    default:
      return state;
  }
};

const appReducer = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer
});
export default appReducer;

import { combineReducers } from "redux";
import { ADD, CHANGE_NUMBER, CHANGE } from "./actions";

const initialState = [{ squares: Array(9).fill(null) }];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const { historyBack, squares } = action;
      return [...historyBack, { squares }]; // ES6の書き方するとスマートに見えます
    default:
      return state; // throw new Error() => return state へ
  }
};

const stepNumberReducer = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_NUMBER: // "add"と"jump" を1つにし、dispatchする側で値を指定
      return action.stepNumber;
    default:
      return state; // throw new Error() => return state へ
  }
};

const xIsNextReducer = (state = true, action) => {
  switch (action.type) {
    case CHANGE: // "change"と"jump" を1つにし、dispatchする側で値を指定
      return action.xIsNext;
    default:
      return state; // throw new Error() => return state へ
  }
};

const appReducer = combineReducers({
  history: historyReducer,
  stepNumber: stepNumberReducer,
  xIsNext: xIsNextReducer
});
export default appReducer;

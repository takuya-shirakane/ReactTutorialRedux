export const ADD = "add";
export const CHANGE_NUMBER = "changeNumber";
export const CHANGE = "CHANGE";

const addHistory = (historyBack, squares) => {
  return { type: ADD, historyBack, squares };
};

const changeStepNumber = (stepNumber) => {
  return { type: CHANGE_NUMBER, stepNumber };
};

const changeXIsNext = (xIsNext) => {
  return { type: CHANGE, xIsNext };
};

export { addHistory, changeStepNumber, changeXIsNext };

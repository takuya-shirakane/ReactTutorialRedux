import React from "react";
import { connect } from "react-redux";
import "./styles.css";

import Game from "./tutorial/Game";
import { addHistory, changeStepNumber, changeXIsNext } from "./states/actions";

const App = (props) => {
  return <Game {...props} />;
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleHistory: (historyBack, squares) => {
      dispatch(addHistory(historyBack, squares));
    },
    handleStepNumber: (stepNumber) => {
      dispatch(changeStepNumber(stepNumber));
    },
    handleXIsNext: (xIsNext) => {
      dispatch(changeXIsNext(xIsNext));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as baseEmpolyees from "./mocks/employees.json";
import logger from 'redux-logger';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {Router} from "react-router-dom";

import App from "./components/app/app";
import {ActionCreator} from "./reducer/employees/employees.js";
import reducer from "./reducer/reducer.js";
import transformEmployeeObject from "./transformEmployeeObject.js";
import {IEmployee} from "./types";
import history from "./history";


let store;

store = createStore(
  reducer,
  applyMiddleware(logger)
);

console.log(baseEmpolyees);

const employeesData: IEmployee[] = baseEmpolyees.employees.map(transformEmployeeObject)

store.dispatch(ActionCreator.setEmployees(employeesData));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById(`root`)
);

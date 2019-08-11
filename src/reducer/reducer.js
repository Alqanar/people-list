import {combineReducers} from "redux";

import {reducer as employees} from "./employees/employees.js";


export default combineReducers({
  employees
});

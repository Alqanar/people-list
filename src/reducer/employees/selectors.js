import {createSelector} from "reselect";

import {EMPTY_FILTER, DEFAULT_SORTING} from "../../utility.ts";


const getFilter = (state) => (
  state.employees.filter
);

const getEmloyees = (state) => (
  state.employees.employees
);

const getStatus = (state) => (
  state.employees.showArchive
);

const getSort = (state) => (
  state.employees.sort
);

const getEmloyeesWithStatus = createSelector(
  getStatus,

  getEmloyees,

  (selectedStatus, employeesList) => {
    if (selectedStatus) {
      return employeesList;
    }
    return employeesList.filter((employee) =>
      !employee.isArchive);
  }
);

const getFilterEmployees = createSelector(
  getFilter,

  getEmloyeesWithStatus,

  (selectedFilter, employeesList) => {
    if (selectedFilter === EMPTY_FILTER) {
      return employeesList;
    }
    return employeesList.filter((employee) =>
      employee.role === selectedFilter);
  }
);

export const getSortEmployees = createSelector(
  getSort,

  getFilterEmployees,

  (selectedSort, employeesList) => {
    let sortedEmployees;
    if (selectedSort === DEFAULT_SORTING) {
      sortedEmployees = employeesList.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else {
      sortedEmployees = employeesList.sort((a, b) => {
        const aTime = a.birthday.getTime();
        const bTime = b.birthday.getTime();

        if (aTime < bTime) return -1;
        if (aTime > bTime) return 1;
        return 0;
      });
    }
    
    return [...sortedEmployees];
  }
)

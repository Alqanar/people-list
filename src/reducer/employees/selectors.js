import {createSelector} from "reselect";


const getFilter = (state) => (
  state.employees.filter
);

const getEmloyees = (state) => (
  state.employees.employees
);

const getStatus = (state) => {
  state.employees.showArchive
}

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

export const getFilterEmployees = createSelector(
  getFilter,

  getEmloyeesWithStatus,

  (selectedFilter, employeesList) => {
    if (selectedFilter === ``) {
      return employeesList;
    }
    return employeesList.filter((employee) =>
      employee.role === selectedFilter);
  }
);

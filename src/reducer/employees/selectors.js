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

const getSort = (state) => {
  state.employees.sort
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

export const getSortEmployees = createSelector(
  getSort,

  getFilterEmployees,

  (selectedSort, employeesList) => {
    if (selectedSort === `byName`) {
      return employeesList.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    }
    return employeesList.sort((a, b) => {
      const aTime = a.getTime();
      const bTime = b.getTime();

      if (aTime < bTime) return -1;
      if (aTime > bTime) return 1;
      return 0;
    });
  }
)

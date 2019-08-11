const initialState = {
  employees: [],
  filter: `without`,
  showArchive: false,
  sort: `byName`
};

const ActionType = {
  ADD_EMPLOYEE: `ADD_EMPLOYEE`,
  SET_EMPLOYEES: `SET_EMPLOYEES`,
  SET_FILTER: `SET_FILTER`,
  SET_SHOW_ARCHIVE: `SET_SHOW_ARCHIVE`,
  SET_SORT: `SET_SORT`,
  SET_STATUS: `SET_STATUS`
};

const ActionCreator = {
  addEmployee: (employee) => ({
    type: ActionType.ADD_EMPLOYEE,
    payload: employee
  }),

  setEmployees: (employeeList) => ({
    type: ActionType.SET_EMPLOYEES,
    payload: employeeList
  }),

  setFilter: (filter) => ({
    type: ActionType.SET_FILTER,
    payload: filter
  }),

  setShowArchive: (status) => ({
    type: ActionType.SET_SHOW_ARCHIVE,
    payload: status
  }),

  setSort: (sort) => ({
    type: ActionType.SET_SORT,
    payload: sort
  }),

  setStatus: (id, status) => ({
    type: ActionType.SET_STATUS,
    payload: {id, status}
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [
          ...state.employees,
          action.payload,
        ]
      };

    case ActionType.SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      };

    case ActionType.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    case ActionType.SET_SHOW_ARCHIVE:
      return {
        ...state,
        showArchive: action.payload
      };

    case ActionType.SET_SORT:
      return {
        ...state,
        sort: action.payload
      };

    case ActionType.SET_STATUS:
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.payload.id) {
            return {
              ...employee,
              isArchive: action.payload.status
            };
          }
          return employee;
        })
      };

    default:
      return state;
  }
};

export {
  ActionCreator,
  ActionType,
  reducer
};

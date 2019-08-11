import {
  ActionCreator,
  ActionType,
  reducer
} from "../employees.js";


const employeesList = [
  {
    'id': 1,
    'name': `Илья Емельянов`,
    'isArchive': false,
    'role': `driver`,
    'phone': `+7 (883) 508-3269`,
    'birthday': `12.02.1982`
  },
  {
    'id': 2,
    'name': `Александр Ларионов`,
    'isArchive': true,
    'role': `waiter`,
    'phone': `+7 (823) 440-3602`,
    'birthday': `26.01.1986`
  },
];

const newEmployee = {
  'id': 3,
  'name': `Богдан Давыдов`,
  'isArchive': false,
  'role': `driver`,
  'phone': `+7 (971) 575-2645`,
  'birthday': `29.11.1990`
};

describe(`Reducer works correctly`, () => {
  it(`without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      employees: [],
      filter: `without`,
      showArchive: false,
      sort: `byName`
    });
  });

  it(`action creator for set filter returns correct action`, () => {
    expect(ActionCreator.setFilter(`driver`)).toEqual({
      type: ActionType.SET_FILTER,
      payload: `driver`,
    });
  });

  it(`adding new employee in the state`, () => {
    expect(reducer({
      employees: employeesList
    }, ActionCreator.addEmployee(newEmployee)
    )).toEqual({
      employees: [
        {
          'id': 1,
          'name': `Илья Емельянов`,
          'isArchive': false,
          'role': `driver`,
          'phone': `+7 (883) 508-3269`,
          'birthday': `12.02.1982`
        },
        {
          'id': 2,
          'name': `Александр Ларионов`,
          'isArchive': true,
          'role': `waiter`,
          'phone': `+7 (823) 440-3602`,
          'birthday': `26.01.1986`
        },
        {
          'id': 3,
          'name': `Богдан Давыдов`,
          'isArchive': false,
          'role': `driver`,
          'phone': `+7 (971) 575-2645`,
          'birthday': `29.11.1990`
        }
      ]
    });
  });

  it(`changed status in the employees state`, () => {
    expect(reducer({
      employees: employeesList
    }, ActionCreator.setStatus(2, false)
    )).toEqual({
      employees: [
        {
          'id': 1,
          'name': `Илья Емельянов`,
          'isArchive': false,
          'role': `driver`,
          'phone': `+7 (883) 508-3269`,
          'birthday': `12.02.1982`
        },
        {
          'id': 2,
          'name': `Александр Ларионов`,
          'isArchive': false,
          'role': `waiter`,
          'phone': `+7 (823) 440-3602`,
          'birthday': `26.01.1986`
        }
      ]
    });
  });
});

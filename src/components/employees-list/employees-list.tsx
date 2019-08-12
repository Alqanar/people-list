import * as React from "react";

import EmployeesListItem from "../employees-list-item/employees-list-item";
import { IEmployee } from "../../types";

import "./style.scss";


interface IProps {
  employees: IEmployee[];
}

const EmployeesList: React.FC<IProps> = (props): React.ReactElement => {
  const { employees } = props;

  const employeesList = employees
    .map((employee): React.ReactElement =>
      <EmployeesListItem
        employee={employee}
        key={employee.id}
      />
    );

  return (
    <ul className="same-list employees-list">
      {employeesList}
    </ul>
  );
}

export default EmployeesList;

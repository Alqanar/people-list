import * as React from "react";
import {Link} from "react-router-dom";

import {IEmployee} from "../../types";
import {dateStringOptions} from "../../utility";


interface IProps {
  employee: IEmployee;
}

const EmployeesListItem: React.FC<IProps> = (props): React.ReactElement => {
  const {employee: {id, name, role, phone, birthday}} = props;

  return (
    <li className="employees-list__item">
      <Link to={`/employees/${id}`} className="link employees-list__link">
        <div className="employees-list__personal-data">
          <p className="employees-list__name">{name}</p>
          <p className="employees-list__phone">{phone}</p>
        </div>
        <p className="employees-list__role">{role}</p>
        <p className="employees-list__birthday">{birthday.toLocaleString(`ru`, dateStringOptions)}</p>
      </Link>
    </li>
  );
}

export default EmployeesListItem;

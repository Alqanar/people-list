import * as React from "react";
import { Link } from "react-router-dom";

import { IEmployee } from "../../types";
import {
  dateLongStringOptions,
  dateShortStringOptions,
  vocabularyPosts
} from "../../utility";


interface IProps {
  employee: IEmployee;
}

const LOCALE = `ru`;

const EmployeesListItem: React.FC<IProps> = (props): React.ReactElement => {
  const { employee: { id, name, role, phone, birthday } } = props;

  return (
    <li className="employees-list__item">
      <Link to={`/employees/${id}`} className="link employees-list__link">
        <div className="employees-list__wrapper-personal-data">
          <div className="employees-list__personal-data">
            <p className="employees-list__name">{name}</p>
            <p className="employees-list__phone">{phone}</p>
          </div>
          <p className="employees-list__role">{vocabularyPosts[role]}</p>
        </div>
        <p className="employees-list__birthday-long">{birthday.toLocaleString(LOCALE, dateLongStringOptions)}</p>
        <p className="employees-list__birthday-short">{birthday.toLocaleString(LOCALE, dateShortStringOptions)}</p>
      </Link>
    </li>
  );
}

export default EmployeesListItem;

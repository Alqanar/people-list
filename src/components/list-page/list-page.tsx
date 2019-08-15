import * as React from "react";
import { Link } from "react-router-dom";

import { IEmployee } from "../../types";
import SortingList from "../sorting-list/sorting-list";
import Filter from "../filter/filter";
import EmployeesList from "../employees-list/employees-list";

import "./style.scss";

interface IProps {
  employeeList: IEmployee[];
}

const ListPage: React.FC<IProps> = (props): React.ReactElement => {
  const {
    employeeList
  } = props;

  return (
    <>
      <div className="list-page">
        <div className="list-page__wrapper-header">
          <h1 className="title list-page__title">База сотрудников</h1>
          <Link to={`/employee/new`} className="link list-page__add-new-employee">
            Добавить нового сотрудника
          </Link>
          <Filter />
        </div>
        <section className="list-page__employees-list">
          <h2 className="visual-hidden">Список сотрудников</h2>
          <SortingList />
          <EmployeesList
            employees={employeeList}
          />
        </section>
      </div>
    </>
  );
};

export default ListPage;

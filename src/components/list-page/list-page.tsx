import * as React from "react";

import {IEmployee} from "../../types";
import SortingList from "../sorting-list/sorting-list";
import Filter from "../filter/filter";


interface IProps {
  employeeList: IEmployee[];
}

const ListPage: React.FC<IProps> = (props): React.ReactElement => {
  const {
    employeeList
  } = props;

  return (
    <>
      <div className="list-page-content">
        <div className="list-page-content__wrapper-titles">
          <h1 className="title list-page-content__title">Список сотрудников</h1>
          <Filter />
          <SortingList />
        </div>

      </div>
    </>
  );
};

export default ListPage;

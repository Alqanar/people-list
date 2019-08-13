import * as React from "react";

import PeopleEditForm from "../people-edit-form/people-edit-form";
import { INewEmployee, IEmployee } from "../../types";
import { vocabularyPosts } from "../../utility";

// import "./style.scss";

interface IProps {
  employee: IEmployee;
  isNew: boolean;
  onButtonSubmit: (values: INewEmployee | IEmployee) => Promise<void>;
}

const FormPage: React.FC<IProps> = (props): React.ReactElement => {
  const {
    employee: { name, role, phone },
    employee,
    isNew,
    onButtonSubmit
  } = props;


  return (
    <>
      <div className="form-page">
        <h1 className="title form-page__title">{name}</h1>
        <p className="form-page__phone">{phone}</p>
        <p className="form-page__role">{vocabularyPosts[role]}</p>
        <PeopleEditForm
          employee={employee}
          isNew={isNew}
          onButtonSubmit={onButtonSubmit}
        />
      </div>
    </>
  );
};

export default FormPage;

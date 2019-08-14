import * as React from "react";
import { Form } from "react-final-form";
import { Link } from "react-router-dom";

import TextInput from "../text-input/text-input";
import SelectFinalForm from "../select-final-form/select-final-form";
import CheckboxFinalForm from "../checkbox-final-form/checkbox-final-form";
import { INewEmployee, IEmployee } from "../../types";
import { addZero, paramsInput, vocabularyPosts } from "../../utility";

import "./style.scss";


interface IProps {
  employee?: IEmployee;
  isNew: boolean;
  onButtonSubmit: (values: INewEmployee | IEmployee) => Promise<void>;
}

class PeopleEditForm extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);

    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
  }

  public render(): React.ReactElement {
    const { employee, isNew } = this.props;
    let birthday = ``;

    if (employee) {
      const bd = employee.birthday;
      birthday = `${bd.getFullYear()}-${addZero(bd.getMonth() + 1)}-${bd.getDate()}`;
    }

    const textInputs = paramsInput
      .map((param, i): React.ReactElement =>
        <TextInput
          properties={param}
          key={i}
        />
      );

    const initialValues = {
      name: employee && employee.name || ``,
      phone: employee && employee.phone || ``,
      birthday,
      role: employee && employee.role || Object.keys(vocabularyPosts)[1],
      isArchive: employee && employee.isArchive || false
    };

    return (
      <Form
        onSubmit={this.handleButtonSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }): React.ReactElement => (
          <form className="form" onSubmit={handleSubmit}>
            <ul className="same-list form__list">
              {textInputs}
              <SelectFinalForm />
              <CheckboxFinalForm />
              <div className="form__buttons">
                <Link to={`/`} className="link form__link">
                  ❌ Отмена
                </Link>
                <button
                  className="form__button"
                  type="submit"
                >
                  {isNew ? `Добавить` : `💾 Сохранить`}
                </button>
              </div>
            </ul>
          </form>
        )}
      />
    );
  }

  private modifyEmployee = (objectData): IEmployee => {
    const birthdayArray = objectData.birthday
      .split('-')
      .map((elem): number => parseInt(elem, 10));

    const birthdayAsDate = new Date(
      birthdayArray[0],
      birthdayArray[1] - 1,
      birthdayArray[2]
    );

    const data = {
      ...objectData,
      birthday: birthdayAsDate
    }
    if (this.props.isNew) {
      data.id = Date.now();
    } else {
      data.id = this.props.employee.id;
    }
    return data;
  }

  private handleButtonSubmit(values): void {
    const { onButtonSubmit } = this.props;

    onButtonSubmit(this.modifyEmployee(values));
  }
}

export default PeopleEditForm;

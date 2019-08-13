import * as React from "react";
import { Form } from "react-final-form";

import TextInput from "../text-input/text-input";
import { INewEmployee, IEmployee } from "../../types";
import { paramsInput, addZero } from "../../utility";


interface IProps {
  employee: IEmployee;
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

    const bd = employee.birthday;

    const textInputs = paramsInput
      .map((param, i): React.ReactElement =>
        <TextInput
          properties={param}
          key={i}
        />
      );

    const initialValues = {
      name: employee.name || ``,
      phone: employee.phone || ``,
      birthday: `${bd.getFullYear()}-${addZero(bd.getMonth() + 1)}-${bd.getDate()}` || ``
    };

    return (
      <Form
        onSubmit={this.handleButtonSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form }): React.ReactElement => (
          <form onSubmit={handleSubmit}>
            <ul className="same-list">
              {textInputs}

              <div className="form-page__buttons">
                <button
                  className="form-page__button"
                  type="submit"
                >
                  {isNew ? `Добавить` : `Изменить`}
                </button>
                <button
                  className="form-page__button"
                  type="button"
                  onClick={form.reset}
                >
                  Сброс
                </button>
              </div>
            </ul>
          </form>
        )}
      />
    );
  }

  private handleButtonSubmit(values): void {
    const { onButtonSubmit } = this.props;

    onButtonSubmit(values);
  }
}

export default PeopleEditForm;

import * as React from "react";
import { Field } from "react-final-form";


const CheckboxFinalForm: React.FC = (): React.ReactElement => {

  return (
    <>
      <li className="form__item form__item--archive">
        <label>
          <Field
            name="isArchive"
            component="input"
            type="checkbox"
          />{' '}
          В архиве
        </label>
      </li>
    </>
  );
}

export default CheckboxFinalForm;

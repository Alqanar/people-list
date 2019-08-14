import * as React from "react";
import { Field } from "react-final-form";

import "./style.scss";


const CheckboxFinalForm: React.FC = (): React.ReactElement => {

  return (
    <>
      <li className="form__item form__item--archive checkbox">
        <span className="checkbox__pseudo-label"></span>
        <Field name="isArchive" type="checkbox">
          {({ input }): React.ReactElement => (
            <input
              {...input}
              className={`visual-hidden checkbox__input`}
              type={`checkbox`}
              checked={input.value}
              id={`inArchive`}
            />
          )}
        </Field>
        <label className="checkbox__label" htmlFor="inArchive">В архиве</label>
      </li>
    </>
  );
}

export default CheckboxFinalForm;

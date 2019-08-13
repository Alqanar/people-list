import * as React from "react";
import { Field } from "react-final-form";

import { IInputProps } from "../../types";


interface IProps {
  properties: IInputProps;
}

const TextInput: React.FC<IProps> = (props): React.ReactElement => {
  const {
    properties: {
      fieldName,
      labelName,
      typeInput,
      placeholder = undefined,
      pattern = undefined
    }
  } = props;

  return (
    <Field name={fieldName}>
      {({ input, meta }): React.ReactElement => (
        <li className={`form__item form__item--${fieldName}`}>
          <label className={`form__label form__label--${fieldName}`}>{labelName}</label>
          <input
            {...input}
            className={`form__input form__input--${fieldName}`}
            type={typeInput}
            placeholder={placeholder}
            pattern={pattern}
          />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </li>
      )}
    </Field>
  );
}

export default TextInput;

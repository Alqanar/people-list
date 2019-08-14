import * as React from "react";
import { Field } from "react-final-form";

import { optionItem } from "../../react-utility";
import { vocabularyPosts } from "../../utility";

import "./style.scss";

const SelectFinalForm: React.FC = (): React.ReactElement => {

  return (
    <>
      <li className="form__item form__item--role">
        <label className="form__label form__label--role">Выберите должность</label>
        <Field name="role" component="select">
          {optionItem(vocabularyPosts)}
        </Field>
      </li>
    </>
  );
}

export default SelectFinalForm;

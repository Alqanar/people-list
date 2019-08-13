import * as React from "react";

import { EMPTY_FILTER } from "./utility";


export const optionItem = (selectFilter: object, hasEmptyOption: boolean = false): React.ReactElement[] => {
  return Object.keys(selectFilter)
    .filter((elem): boolean => (hasEmptyOption ? true : elem !== EMPTY_FILTER))
    .map((elem, i): React.ReactElement => (
      <option
        key={i}
        value={elem}
      >
        {selectFilter[elem]}
      </option>
    ));

}

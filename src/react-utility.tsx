import * as React from "react";

export const optionItem = (selectFilter: object): React.ReactElement[] => {
  return Object.keys(selectFilter).map((elem, i): React.ReactElement => (
    <option
      key={i}
      value={elem}
    >
      {selectFilter[elem]}
    </option>
  ));
}

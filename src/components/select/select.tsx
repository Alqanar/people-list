import * as React from "react";

import { vocabularyPosts } from "../../utility";
import { optionItem } from "../../react-utility";


interface IProps {
  filter: string;
  onFilterSelect: (name: string) => Promise<void>;
}

class Select extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);

    this.handleFilterItemSelect = this.handleFilterItemSelect.bind(this);
  }

  public render(): React.ReactElement {
    const { filter } = this.props;

    return (
      <>
        <div className="filter__select">
          <label className="visual-hidden" htmlFor="select-sorting">Фильтрация по должности</label>
          <select
            className="filter__field filter__field--sorting"
            name="select-sorting"
            id="select-sorting"
            value={filter}
            onChange={this.handleFilterItemSelect}
          >
            {optionItem(vocabularyPosts, true)}
          </select>
        </div>
      </>
    );
  }

  private handleFilterItemSelect(event): void {
    const { onFilterSelect } = this.props;

    onFilterSelect(event.target.value);
  }
}

export default Select;

import * as React from "react";

import {vocabularyPosts} from "../../utility";


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
    const {filter} = this.props;

    return (
      <>
        <div className="filter__select">
          <label className="visual-hidden" htmlFor="select-sorting">Фильтрация по должности</label>
          <select className="filter__field filter__field--sorting" name="select-sorting" id="select-sorting">
            {this.optionItem(vocabularyPosts, filter)}
          </select>
        </div>
      </>
    );
  }

  private handleFilterItemSelect(event): void {
    const {onFilterSelect} = this.props;

    event.preventDefault();
    onFilterSelect(event.target.value);
  }

  private optionItem = (selectFilter: object, filter: string): React.ReactElement[] => {
    return Object.keys(selectFilter).map((elem, i): React.ReactElement => (
      <option
        key={i}
        value={elem}
        selected={filter === elem}
        onChange={this.handleFilterItemSelect}
      >
        {selectFilter[elem]}
      </option>
    ));
  }
}

export default Select;

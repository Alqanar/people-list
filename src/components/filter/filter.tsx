import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/employees/employees.js";
import Checkbox from "../checkbox/checkbox";
import Select from "../select/select";

interface IProps {
  filter: string;
  onSetFilter: (checkedFilter: string) => Promise<void>;
  onSetShowArchive: (clickedCheckbox: boolean) => Promise<void>;
  showArchive: boolean;
}

class Filter extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);
  }

  public render(): React.ReactElement {
    const {filter, onSetFilter, onSetShowArchive, showArchive} = this.props;

    return (
      <form className="filter">
        <h2 className="visual-hidden">Варианты фильтрации</h2>
        <Select
          filter={filter}
          onFilterSelect={onSetFilter}
        />
        <Checkbox
          name={showArchive ?
            `Скрыть сотрудников со статусом "В архиве"` :
            `Показать сотрудников со статусом "В архиве"`}
          showArchive={showArchive}
          onCheckboxChange={onSetShowArchive}
        />
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps): void => ({
  ...ownProps,
  filter: state.employees.filter,
  showArchive: state.employees.showArchive
});

const mapDispatchToProps = (dispatch): object => ({
  onSetFilter: (checkedFilter): void => dispatch(ActionCreator.setFilter(checkedFilter)),
  onSetShowArchive: (clickedCheckbox): void => dispatch(ActionCreator.setShowArchive(clickedCheckbox))
});

export {Filter};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


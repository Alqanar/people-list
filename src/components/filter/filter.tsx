import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/employees/employees.js";
import Select from "../select/select";

interface IProps {
  filter: string;
  onSetFilter: (clickedSorting: string) => Promise<void>;
}

class Filter extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);
  }

  public render(): React.ReactElement {
    const {filter, onSetFilter} = this.props;

    return (
      <form className="filter">
        <h2 className="visual-hidden">Варианты фильтрации</h2>
        <Select
          filter={filter}
          onFilterSelect={onSetFilter}
        />
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps): void => ({
  ...ownProps,
  filter: state.employees.filter
});

const mapDispatchToProps = (dispatch): object => ({
  onSetFilter: (checkedFilter): void => dispatch(ActionCreator.setFilter(checkedFilter))
});

export {Filter};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);


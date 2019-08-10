import * as React from "react";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/employees/employees.js";
import SortingListItem from "../sorting-list-item/sorting-list-item";


interface IProps {
  activeSort: string;
  onSetSort: (clickedSorting: string) => Promise<void>;
}

const sortingVariants =[
  {
    name: `Имя сотрудника`,
    type: `byName`,
    isDisabled: false
  },
  {
    name: `Должность`,
    type: ``,
    isDisabled: true
  },
  {
    name: `День Рождения`,
    type: `byBirthday`,
    isDisabled: false
  }
]

class SortingList extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);
  }

  public render(): React.ReactElement {
    const {activeSort, onSetSort} = this.props;

    const sortingList = sortingVariants
      .map(({name, type, isDisabled}, i): React.ReactElement =>
        <SortingListItem
          name={name}
          type={type}
          key={i}
          isActive={activeSort === type}
          isDisabled={isDisabled}
          onSortingClick={onSetSort}
        />
      )

    return (
      <ul className="list-page-content__sorting-name-list employees-list-title">
        {sortingList}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps): void => ({
  ...ownProps,
  activeSort: state.employees.sort
});

const mapDispatchToProps = (dispatch): object => ({
  onSetSort: (clickedSorting): void => dispatch(ActionCreator.setSort(clickedSorting))
});

export {SortingList};

export default connect(mapStateToProps, mapDispatchToProps)(SortingList);

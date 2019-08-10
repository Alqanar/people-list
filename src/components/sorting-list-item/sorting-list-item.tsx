import * as React from "react";


interface IProps {
  name: string;
  type: string;
  onSortingClick: (name: string) => Promise<void>;
  isActive: boolean;
  isDisabled: boolean;
}

class SortingListItem extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);

    this.handleSortingItemClick = this.handleSortingItemClick.bind(this);
  }

  public render(): React.ReactElement {
    const {name, isActive, isDisabled} = this.props;

    return (
      <li className="employees-list-title__sort-item">
        <button
          onClick={this.handleSortingItemClick}
          className={`employees-list-title__sorting-button ${isActive ? `employees-list-title__sorting-button--active` : ``}`}
          disabled={isDisabled}
        >
          {name}
        </button>
      </li>
    );
  }

  private handleSortingItemClick(event): void {
    const {type, onSortingClick} = this.props;

    event.preventDefault();
    onSortingClick(type);
  }
}

export default SortingListItem;

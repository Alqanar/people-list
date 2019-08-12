import * as React from "react";

interface IProps {
  showArchive: boolean;
  name: string;
  onCheckboxChange: (name: boolean) => Promise<void>;
}

class Checkbox extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  public render(): React.ReactElement {
    const { showArchive, name } = this.props;

    return (
      <>
        <div className="filter__checkbox">
          <input
            className="visual-hidden filter__checkbox-input"
            type="checkbox"
            name="archive"
            id="filter__archive"
            checked={showArchive}
            onChange={this.handleCheckboxChange}
          />
          <label className="filter__checkbox-label" htmlFor="filter__archive">{name}</label>
        </div>
      </>
    );
  }

  private handleCheckboxChange(event): void {
    const { onCheckboxChange } = this.props;

    onCheckboxChange(event.target.checked);
  }
}

export default Checkbox;

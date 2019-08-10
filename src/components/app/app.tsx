import * as React from "react";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";

import ListPage from "../list-page/list-page";
import {IEmployee} from "../../types";


interface IProps {
  employeesData: IEmployee[];
}

class App extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);

    this.renderListPage = this.renderListPage.bind(this);
  }

  public render(): React.ReactElement {
    return (
      <Switch>
        <Route path="/" exact render={this.renderListPage} />
      </Switch>
    );
  }

  private renderListPage(): React.ReactElement {
    const {employeesData} = this.props;

    return (
      <ListPage
        employeeList={employeesData}
      />
    );
  }
}

const mapStateToProps = (state, ownProps): void => ({
  ...ownProps,
  employeesData: state.employees.employees,
});

export {App};

export default connect(mapStateToProps, undefined)(App);

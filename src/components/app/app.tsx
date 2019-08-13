import * as React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import history from "../../history";
import ListPage from "../list-page/list-page";
import FormPage from "../form-page/form-page";
import { ActionCreator } from "../../reducer/employees/employees.js";
import { IEmployee } from "../../types";
import { getSortEmployees } from "../../reducer/employees/selectors.js";


interface IProps {
  employeesData: IEmployee[];
  onEditEmployee: (values: IEmployee) => Promise<void>;
}

class App extends React.PureComponent<IProps, null> {
  public constructor(props) {
    super(props);

    this.renderListPage = this.renderListPage.bind(this);
    this.renderFormPage = this.renderFormPage.bind(this);
    // this.renderNewFormPage = this.renderNewFormPage.bind(this);
  }

  public render(): React.ReactElement {
    return (
      <Switch>
        <Route path="/" exact render={this.renderListPage} />
        <Route path="/employee/:id" exact render={this.renderFormPage} />
        <Route path="/employee/new" exact render={this.renderFormPage} />
      </Switch>
    );
  }

  private renderListPage(): React.ReactElement {
    const { employeesData } = this.props;

    return (
      <ListPage
        employeeList={employeesData}
      />
    );
  }

  private renderFormPage({ match: { params: { id } } }): React.ReactElement {
    const { onEditEmployee } = this.props;

    return (
      <FormPage
        employee={this.getChosenEmployee(id)}
        isNew={false}
        onButtonSubmit={onEditEmployee}
      />
    );
  }

  private getChosenEmployee(id: string): IEmployee {
    const { employeesData } = this.props;
    const employeeId = parseInt(id, 10);
    return employeesData.find((employee: IEmployee): boolean => employee.id === employeeId);
  }
}

const mapStateToProps = (state, ownProps): void => ({
  ...ownProps,
  employeesData: getSortEmployees(state),
});

const mapDispatchToProps = (dispatch): object => ({
  onEditEmployee: (modifiedData): void => {
    dispatch(ActionCreator.editEmployee(modifiedData));
    history.push(`/`);
  },
  onAddEmployee: (newData): void => dispatch(ActionCreator.addEmployee(newData))
});

export { App };

export default connect(mapStateToProps, mapDispatchToProps)(App);

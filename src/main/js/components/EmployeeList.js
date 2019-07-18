const React = require("react");
import Employee from "./Employee";

export default class EmployeeList extends React.Component {
  render() {
    const employees = this.props.employees.resultset.map((employee, i ) => (
      <Employee key={i} employee={employee} />
    ));

    return (
      <table className={"table"}>
        <tbody>
          <tr>
            <th scope={"rowgroup"}>Employees - Loading time: {this.props.employees.responsetime ? this.props.employees.responsetime + " ms" : "-"}</th>
          </tr>
          <tr>
            <th scope={"col"}>First Name</th>
            <th scope={"col"}>Last Name</th>
            <th scope={"col"}>Hire Date</th>
          </tr>
          {employees}
        </tbody>
      </table>
    );
  }
}

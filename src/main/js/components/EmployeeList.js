const React = require("react");
import Employee from "./Employee";

export default class EmployeeList extends React.Component {
  render() {
    const employees = this.props.employees.map(employee => (
      <Employee key={employee._links.self.href} employee={employee} />
    ));

    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hire Date</th>
          </tr>
          {employees}
        </tbody>
      </table>
    );
  }
}

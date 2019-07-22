const React = require("react");
const ReactDOM = require("react-dom");
const client = require("./client");
import EmployeeList from "./components/EmployeeList";
import DepartmentList from "./components/DepartmentList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: {resultset: []}, departments: {resultset: []} };
  }

  componentDidMount() {
    this.getEmployees();
    this.getDepartments();
    this.getEmployees = this.getEmployees.bind(this);
    this.getDepartments = this.getDepartments.bind(this);
  }

  getEmployees() {
    this.setState({ employees: {resultset: []}});
    let timerstart = Date.now();
    client({ method: "GET", path: "/api/employees?size=10" }).done(response => {
      this.setState({ employees: {resultset: response.entity, responsetime: Date.now()-timerstart} });
    });
  }

  getDepartments() {
    this.setState({ departments: {resultset: []}});
    let timerstart = Date.now();
    client({ method: "GET", path: "/api/departments?size=10" }).done(response => {
      this.setState({ departments: {resultset: response.entity, responsetime: Date.now()-timerstart}});
    });
  }

  render() {
    return (
      <div className={"container-fluid"}>
        <div className={"row"}>
          <div className={"col"}>
            <DepartmentList getDepartments={this.getDepartments} departments={this.state.departments} />
          </div>
          <div className={"col"}>
            <EmployeeList getEmployees={this.getEmployees} employees={this.state.employees} />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("react"));

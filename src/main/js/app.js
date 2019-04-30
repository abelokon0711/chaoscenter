const React = require("react");
const ReactDOM = require("react-dom");
const client = require("./client");
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidMount() {
    client({ method: "GET", path: "/api/employees?size=10" }).done(response => {
      this.setState({ employees: response.entity._embedded.employees });
    });
  }

  render() {
    return <EmployeeList employees={this.state.employees} />;
  }
}

class EmployeeList extends React.Component {
  render() {
    return <Button variant="primary">Primary</Button>;
  }
}

ReactDOM.render(<App />, document.getElementById("react"));

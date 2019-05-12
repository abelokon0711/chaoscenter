const React = require("react");
const ReactDOM = require("react-dom");
const client = require("./client");
import EmployeeList from "./components/EmployeeList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

  componentDidMount() {
    client({ method: "GET", path: "/api/employees?size=10" }).done(response => {
      console.log(response);
      this.setState({ employees: response.entity._embedded.employees });
    });
  }

  render() {
    return <EmployeeList employees={this.state.employees} />;
  }
}

ReactDOM.render(<App />, document.getElementById("react"));

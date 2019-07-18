const React = require("react");

export default class Department extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.department.deptName}</td>
            </tr>
        );
    }
}

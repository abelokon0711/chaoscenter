const React = require("react");
import Department from "./Department";

export default class DepartmentList extends React.Component {
    render() {
        const departments = this.props.departments.resultset.map((department, i ) => (
            <Department key={i} department={department} />
        ));

        return (
            <table className={"table"}>
                <tbody>
                <tr>
                    <th scope={"rowgroup"}>Departments - Loading time: {this.props.departments.responsetime ? this.props.departments.responsetime + " ms" : "-"}</th>
                </tr>
                <tr>
                    <th scope={"col"}>Department Name</th>
                </tr>
                {departments}
                </tbody>
            </table>
        );
    }
}

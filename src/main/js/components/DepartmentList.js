const React = require("react");
import Department from "./Department";

export default class DepartmentList extends React.Component {
    render() {
        const refresh = (e) => {
            e.preventDefault();
            this.props.getDepartments();
        }

        const departments = this.props.departments.resultset.map((department, i ) => (
            <Department key={i} department={department} />
        ));

        return (
            <table className={"table"}>
                <tbody>
                    <tr>
                        <th scope={"rowgroup"}>Departments - Loading time: {this.props.departments.responsetime ? this.props.departments.responsetime + " ms" : "-"}<button type="button" className="btn btn-light float-right" onClick={refresh}>Refresh</button></th>
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

import React from "react";
import wrapWithLogging from "../hoc/WrapWithLogging";

class Table extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
        <table border="1">
          <tr>
            <td>Month</td>
            <td>Savings</td>
          </tr>
          <tr>
            <td>{this.props.month}</td>
            <td>{this.props.saving}</td>
          </tr>
        </table>
    );
  }
}
export default  wrapWithLogging(Table);
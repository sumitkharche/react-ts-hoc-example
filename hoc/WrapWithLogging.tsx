import React from "react";

export default function wrapWithLogging(InputComponent) {
  class LoggerComponent extends React.Component {
    componentDidMount() {
      console.log("Component got mounted : ", this.props);
    }
    render() {
      return <InputComponent {...this.props} />;
    }
  }
  return LoggerComponent;
}

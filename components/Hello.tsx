import React from "react";
import wrapWithBackground from "../hoc/WrapWithBackground";
import wrapWithLogging from "../hoc/WrapWithLogging";

let Hello = ({ name }) => {
  return (
    <div>
      <h4>Hello {name}!</h4>
    </div>
  );
};

//export default wrapWithBackground(Hello);
//export default wrapWithLogging(Hello);
export default wrapWithLogging(wrapWithBackground(Hello));

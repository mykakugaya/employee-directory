import React from "react";
import "./style.css";

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""} employeeRow`}>{props.children}</div>;
}

export default Row;
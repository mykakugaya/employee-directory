import React from "react";
import "./style.css";

function Employee(props) {
  return <div className="employee">{props.children}</div>;
}

export default Employee;
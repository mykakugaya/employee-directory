import React from "react";
import "./style.css";

function Employee(props) {
  return (
    <div className="row employee" key={props.id}>
      <div className="col-sm-1 image">
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className="col-sm-3 name">
        <p>{props.name}</p>
      </div>
      <div className="col-sm-3 phone">
        <p>{props.phone}</p>
      </div>
      <div className="col-sm-3 email">
        <p>{props.email}</p>
      </div>
      <div className="col-sm-2 dob">
        <p>{props.dob}</p>
      </div>
    </div>
  );
}

export default Employee;
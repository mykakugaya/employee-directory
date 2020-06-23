import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col.js";

function Employee(props) {
  return (
    <Row className="employee">
      <Col size="sm-1" className="image">
        <img src={props.picture.thumbnail} alt={props.name.last}></img>
      </Col>
      <Col size="sm-3" className="name">
        <p>{props.name.title} {props.name.first} {props.name.last}</p>
      </Col>
      <Col size="sm-3" className="phone">
        <p>{props.phone}</p>
      </Col>
      <Col size="sm-3" className="email">
        <p>{props.email}</p>
      </Col>
      <Col size="sm-2" className="dob">
        <p>{props.dob.date.slice(5,7) + "/" + props.dob.date.slice(8,10) + "/" + props.dob.date.slice(0, 4)}</p>
      </Col>
    </Row>
  );
}

export default Employee;
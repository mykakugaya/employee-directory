import React from "react";
import "./style.css";
import Row from "../Row.js";
import Col from "../Col.js";

function Employee(props) {
  return (
    <Row className="row employee" key={props.id.value}>
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
        <p>{props.dob.date}</p>
      </Col>
    </Row>
  );
}

export default Employee;
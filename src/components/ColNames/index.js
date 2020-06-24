import React from "react";
import Col from "../Col";
import "./style.css";

function ColNames(props) {
    return (
        <div className="row colnames">
            <Col size="sm-1" className="image">
                <strong><p>Image</p></strong>
            </Col>
            <Col size="sm-3" className="name">
                <strong><p>Name <i onClick={() => props.sort("fullname")} className="fas fa-sort"></i></p></strong>
            </Col>
            <Col size="sm-3" className="phone">
                <strong><p>Phone <i onClick={() => props.sort("phone")} className="fas fa-sort"></i></p></strong>
            </Col>
            <Col size="sm-3" className="email">
                <strong><p>Email <i onClick={() => props.sort("email")} className="fas fa-sort"></i></p></strong>
            </Col>
            <Col size="sm-2" className="dob">
                <strong><p>DOB <i onClick={() => props.sort("age")} className="fas fa-sort"></i></p></strong>
            </Col>
        </div>
    )
}

export default ColNames;
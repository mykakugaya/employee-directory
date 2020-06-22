import React from "react";
import Row from "../Row";
import Col from "../Col";

function ColNames() {
    return (
        <Row className="colnames">
            <Col size="sm-1" className="image">
                <p>Image</p>
            </Col>
            <Col size="sm-3" className="name">
                <p>Name</p>
            </Col>
            <Col size="sm-3" className="phone">
                <p>Phone</p>
            </Col>
            <Col size="sm-3" className="email">
                <p>Email</p>
            </Col>
            <Col size="sm-3" className="dob">
                <p>DOB</p>
            </Col>
        </Row>
    )
}

export default ColNames;
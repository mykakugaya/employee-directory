import React from "react";
import "./style.css";
import Row from "../Row";

function Header(props) {
  return (
    <Row>
      <h1 className="header">{props.children}</h1>
    </Row>
  );
}

export default Header;
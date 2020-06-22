import React from "react";
import "./style.css";

function Search(props) {
  return <div className="search">{props.children}</div>;
}

export default Search;
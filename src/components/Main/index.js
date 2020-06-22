import React, { Component } from "react";
import "./style.css";
import Employee from "../Employee";

class Main extends Component {
    state = {
        employees: []
    }

    render() {
        return(
        <div className="main">
            {this.state.employees.map(employee => 
                < Employee
                image = {employee.image}
                name = {employee.name}
                phone = {employee.phone}
                email = {employee.email}
                dob = {employee.dob}
                />
            )}
        </div>
        ); 
    } 
}

export default Main;
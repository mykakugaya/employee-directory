import React, { Component } from "react";
import "./style.css";
import Employee from "../Employee";

class Main extends Component {
    state = {
        input: "",
        employees: []
    }

    handleInputChange = event => {
        // Getting the value of the input which triggered the change and update state
        const input = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            input: ""
        });
    };

    render() {
        return(
            <div className="main">
                <form className="form">
                    <input
                        value={this.state.input}
                        name="input"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Search"
                    />
                    <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
                </form>
                <div className="container">
                    <div className="row categories" key="columnNames">
                        <div className="col-sm-1 image">
                            <p>Image</p>
                        </div>
                        <div className="col-sm-3 name">
                            <p>Name</p>
                        </div>
                        <div className="col-sm-3 phone">
                            <p>Phone</p>
                        </div>
                        <div className="col-sm-3 email">
                            <p>Email</p>
                        </div>
                        <div className="col-sm-2 dob">
                            <p>DOB</p>
                        </div>
                    </div>
                    {this.state.employees.map(employee =>
                        <Employee
                        image = {employee.image}
                        name = {employee.name}
                        phone = {employee.phone}
                        email = {employee.email}
                        dob = {employee.dob}
                        />
                    )}
                </div>
            </div>
        ); 
    } 
}

export default Main;
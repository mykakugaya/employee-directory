import React, { Component } from "react";
import "./style.css";
import Employee from "../Employee/index.js";
import Row from "../Row.js";
import API from "../../utils/API.js";
import ColNames from "../ColNames"

class SearchResults extends Component {
    state = {
        search: "",
        employees: []
    }

    componentDidMount() {
        this.searchEmployees("");
    }

    searchEmployees = query => {
    API.search()
        .then(res => {
            this.setState({
                employees: res.data.results
            })
            console.log(res);
            if (query==="") {
                this.setState({
                    employees: res.data.results
                })
            } else {
                let filterResults = [];
                for (let i=0; i<res.data.results.length; i++) {
                    let fullName = res.data.results[i].name.first + " " + res.data.results[i].name.last;
                    if (fullName.includes(query)) {
                        filterResults += res.data.results[i];
                    }
                }
                this.setState({
                    employees: filterResults
                })
            }
        })
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search)
    };

    render() {
        return(
            <div className="main">
                <Row>
                    <form className="form">
                        <input
                            value={this.state.search}
                            name="search"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Search"
                        />
                        <button className="btn btn-primary submitBtn" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Row>
                <div className="section">
                    <ColNames/>
                    {this.state.employees.map(employee =>
                        <Employee
                        picture = {employee.picture}
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

export default SearchResults;
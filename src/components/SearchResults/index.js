import React, { Component } from "react";
import "./style.css";
import Employee from "../Employee/index.js";
import Row from "../Row.js";
import Col from "../Col.js";
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
        .then(function(res) {
            if (query==="") {
                this.setState({
                    employees: res.results
                })
            } else {
                let searchResults = [];
                for (let i=0; i<res.results.length; i++) {
                    let fullName = res.results[i].name.first + " " + res.results[i].name.last;
                    if (fullName.includes(query)) {
                        searchResults += res.results[i];
                    }
                }
                this.setState({
                    employees: searchResults
                })
            }
        })
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        let input = event.target.value;
        this.setState({
            search: input
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
                        <button className="btn btn-primary" onClick={this.handleFormSubmit}>Submit</button>
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
import React, { Component } from "react";
import "./style.css";
import Employee from "../Employee";
import API from "../../utils/API.js";
import ColNames from "../ColNames"

class SearchResults extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: 1
    }

    componentDidMount() {
        this.searchEmployees("");
    }

    searchEmployees() {
    API.search()
        .then(res => {
            const modifiedUsers = res.data.results.map(a=> {
                return {
                    ...a,
                    fullname: a.name.first + " " + a.name.last,
                    age: a.dob.age,
                    dob:a.dob.date
                }
            })
            this.setState({
                employees: modifiedUsers,
                filteredEmployees: modifiedUsers
            })
        })
        .catch(err => console.log(err));
    };

    filterResults(val) {
        let filterResults = this.state.employees.filter(employee => employee.fullname.toLowerCase().includes(val.toLowerCase()));
        this.setState({
            filteredEmployees: filterResults
        })
    }

    handleInputChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
        this.filterResults(value);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.search)
    };

    handleSort = category => {
        console.log(this.state, category)
        const sorted = this.state.filteredEmployees.sort((a,b)=> a[category]<b[category] ? -1*this.state.order : a[category]>b[category] ? 1*this.state.order : 0)
        this.setState({
            filteredEmployees: sorted,
            order: -this.state.order
        })
    }

    render() {
        return(
            <div className="main">
                <div className="row">
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
                </div>
                <div className="section">
                    <ColNames sort={this.handleSort}/>
                    {this.state.filteredEmployees.map(employee =>
                        <Employee
                        key = {employee.id.value}
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
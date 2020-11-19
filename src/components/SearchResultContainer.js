import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm";
import { MDBTable } from 'mdbreact'

class SearchResultContainer extends Component {
    state = {
        users: [],
        search: "",
        results: []
    };

    // When this component mounts, search the random people API for employees
    componentDidMount() {
        this.results();
    }

    results = () => {
        API.search()
            .then(res => {
                this.setState({
                    users: res.data.results,
                    results: res.data.results
                })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        if(event.target.value === "") 
            this.setState({users: this.state.results});
            
        // if(`${event.target.value.length === 1}`)
        //     event.target.value = event.target.value.toUpperCase();

        // if(`${event.target.value.length === 2}`)
        //     event.target.value = event.target.value.toLowerCase();

        // if (`${this.state.search.length === 0}` )
        // this.setState({search:this.state.search.toUpperCase()});
        console.log(this.state.search);
    };

    // When the form is submitted, search the random people API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({results: this.state.users})
        this.setState({users: this.state.users.filter((user)=> user.name.first.toLowerCase() === this.state.search)});
        console.log("results:",this.state.results);
    };


    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Employee Directory</h1>
                </div>

                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />


                {this.state.users.map(users => (

                    <MDBTable key={users.login.uuid}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src={users.picture.large} alt="employee"></img></td>
                                <td>{users.name.first}</td>
                                <td>{users.name.last}</td>
                                <td>{users.phone}</td>
                                <td>{users.email}</td>
                                <td>{(users.dob.date).substring(0, 10)}</td>
                            </tr>
                        </tbody>
                    </MDBTable>
                ))}
            </div>
        )
    }
}

export default SearchResultContainer;
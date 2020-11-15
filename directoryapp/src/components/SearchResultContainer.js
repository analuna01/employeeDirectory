import React, { Component } from "react";
import API from "../utils/API"
// import ResultList from "./ResultList";
import SearchForm from "./SearchForm";

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
        this.setState({ value: event.target.value });
        this.setState({ results: event.target.value })

    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />


                {this.state.users.map(users => (

                    <table key={users.login.uuid}>
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
                            <th><img src={users.picture.large}></img></th>
                            <th>{users.name.first}</th>
                            <th>{users.name.last}</th>
                            <th>{users.phone}</th>
                            <th>{users.email}</th>
                            <th>{(users.dob.date).substring(0, 10)}</th>
                        </tbody>
                    </table>
                ))}
            </div>
        )
    }
}

export default SearchResultContainer;

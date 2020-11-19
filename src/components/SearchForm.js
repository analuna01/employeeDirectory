import React from "react";

function SearchForm(props) {
  return (
    <form
      onSubmit={props.handleFormSubmit}
    >
      <div>
        <h4>Search:</h4>
        <input
          value={props.search}
          name="search"
          type="text"
          class="form-control"
          placeholder="Employee Name"
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
                </button>
      </div>
    </form>
  );
}

export default SearchForm;
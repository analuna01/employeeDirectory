import React from "react";

function SearchForm(props) {
  return (
    <form
      autoComplete="on"
      onSubmit={props.handleFormSubmit}
    >
      <div className="form-group d-flex align-items-center justify-content-start">
        <label htmlFor="search">Search:</label>
        <input
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Employee name"
          id="search"
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
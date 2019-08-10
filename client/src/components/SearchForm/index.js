import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="form">
      <input
        value={this.state.firstName}
        name="firstName"
        onChange={this.handleInputChange}
        type="text"
        placeholder="First Name"
      />
      <button onClick={this.handleFormSubmit}>Submit</button>
    </form>
  );
}

export default SearchForm;

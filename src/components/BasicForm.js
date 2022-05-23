import React, { useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [touchedFirstName, setTouchedFirstName] = useState(false);

  const firstNameIsValid = firstName.trim() !== "";

  const firstNameHasError = !firstNameIsValid && touchedFirstName;

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const firstNameBlurHandler = () => {
    setTouchedFirstName(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const firstNameInputClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className="error-text">First Name must be a empty</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

import React, { useState } from "react";

const BasicForm = () => {
  const [firstName, setFirstName] = useState("");
  const [touchedFirstName, setTouchedFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [touchedLastName, setTouchedLastName] = useState(false);

  const [email, setEmail] = useState("");
  const [touchedEmail, setTouchedEmail] = useState(false);

  const firstNameIsValid = firstName.trim() !== "";
  const firstNameHasError = !firstNameIsValid && touchedFirstName;

  const lastNameIsValid = lastName.trim() !== "";
  const lastNameHasError = !lastNameIsValid && touchedLastName;

  const emailIsValid = email.includes("@");
  const emailHasError = !emailIsValid && touchedEmail;

  const formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const firstNameBlurHandler = () => {
    setTouchedFirstName(true);
  };

  const lastNameBlurHandler = () => {
    setTouchedLastName(true);
  };

  const emailBlurHandler = () => {
    setTouchedEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const firstNameInputClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailHasError
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
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name must be a empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please email Correct</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;

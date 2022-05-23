import React from "react";
import useInput from "../hooks/use-input";

const firstNameIsValid = (value) => value.trim() !== "";
const lastNameIsValid = (value) => value.trim() !== "";
const emailIsValidate = (value) => value.includes("@");

const BasicForm = () => {
  const {
    value: fName,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFName,
  } = useInput(firstNameIsValid);

  const {
    value: lName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLName,
  } = useInput(lastNameIsValid);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(emailIsValidate);

  let formValid = false;

  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    resetFName();
    resetLName();
    resetEmail();
  };
  const firstNameInputClass = fNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClass = lNameHasError
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
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fName}
          />
          {fNameHasError && (
            <p className="error-text">First Name must be a empty</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lName}
          />
          {lNameHasError && (
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
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;

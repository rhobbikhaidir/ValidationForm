import React, { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredEmailValid = enteredEmail.includes("@");
  const emailInputisValid = !enteredEmailValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailValid) {
    formIsValid = true;
  }

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      return;
    }

    resetName();

    setEnteredEmail("");
    setEnteredNameTouched(false);
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputisValid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputHasError && <p className="error-text">Name must not Empty</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="text"
          id="name"
          onChange={changeEmailHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputisValid && (
          <p className="error-text">Please Input corret email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

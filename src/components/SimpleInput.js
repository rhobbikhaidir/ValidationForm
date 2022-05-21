import React, { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched;

  const enteredEmailValid = enteredEmail.includes("@");
  const emailInputIsValid = enteredEmail && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
  };

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={changeNameHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not Empty</p>
        )}
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
        {emailInputIsValid && (
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

import React, { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInput = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameValid, setEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const changeNameHandler = (event) => {
    // console.log(event.target.value);

    setEnteredName(event.target.value);
  };

  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched;

  useEffect(() => {
    console.log(enteredNameValid);
  }, [enteredNameValid]);

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameValid(false);
      return;
    }
    setEnteredNameValid(true);
    console.log(enteredName);
    const valueNameRef = nameInput.current.value;
    console.log(valueNameRef);
  };

  const nameInputClass = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInput}
          onChange={changeNameHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

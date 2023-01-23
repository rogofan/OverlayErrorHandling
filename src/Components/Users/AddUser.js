import Card from "../UI/Card.js";
import React, { useState } from "react";
import Button from "../UI/Button.js";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    //Handle if iputs are fill
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Je nutné zadat jméno a věk uživatele",
      });
      return;
    }
    //Handle if age is real
    if (+enteredUserAge < 1 || +enteredUserAge > 119) {
      setError({
        title: "Invalid age",
        message: "Je nutné zadat reálný věk uživatele",
      });
      return;
    }
    //Handle if name contain number
    if (enteredUsername.match(/\d+/)) {
      setError({
        title: "Invalid name",
        message: "Jméno nesmí obsahovat čísla",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);
    console.log(enteredUserAge, enteredUsername);
    setEnteredUsername("");
    setEnteredUserAge("");
  };

  const nameInputChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={nameInputChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={enteredUserAge}
            type="number"
            onChange={ageInputChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

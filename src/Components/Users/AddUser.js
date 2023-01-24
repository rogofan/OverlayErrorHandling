import Card from "../UI/Card.js";
import React, { useState, useRef } from "react";
import Button from "../UI/Button.js";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal.js";
import Wrapper from "../Helpers/Wrapper.js";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;
    //Handle if iputs are fill
    if (
      enteredNameRef.trim().length === 0 ||
      enteredAgeRef.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Je nutné zadat jméno a věk uživatele",
      });
      return;
    }
    //Handle if age is real
    if (+enteredAgeRef < 1 || +enteredAgeRef > 119) {
      setError({
        title: "Invalid age",
        message: "Je nutné zadat reálný věk uživatele",
      });
      return;
    }
    //Handle if name contain number
    if (enteredNameRef.match(/\d+/)) {
      setError({
        title: "Invalid name",
        message: "Jméno nesmí obsahovat čísla",
      });
      return;
    }
    props.onAddUser(enteredNameRef, enteredAgeRef);
    // Dom manipulations should not be document, but in case reset input it is possible
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

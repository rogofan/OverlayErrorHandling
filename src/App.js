import React, { useState, Fragment } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList.js";
import Card from "./Components/UI/Card.js";
import styles from "./Components/Users/UserList.module.css";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  const addUserHandler = (uName, uAge) => {
    setUser((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  let content = (
    <Card className={styles.users}>
      <p className={styles.text}>Přidej uživatele</p>
    </Card>
  );

  if (user.length > 0) {
    content = <UserList users={user} />;
  }
  console.log(user);

  return (
    <Fragment>
      <section>
        <AddUser onAddUser={addUserHandler} />
      </section>
      <section>{content}</section>
    </Fragment>
  );
}

export default App;

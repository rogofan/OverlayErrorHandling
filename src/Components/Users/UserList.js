import Card from "../UI/Card.js";
import styles from "./UserList.module.css";

const UserlList = (props) => {
  return (
    <Card className={styles.users}>
      {/* <ul className="goal-list">
        {props.users.map((user) => (
          <UserItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
            {user.text}
          </UserItem>
        ))}
      </ul> */}

      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserlList;

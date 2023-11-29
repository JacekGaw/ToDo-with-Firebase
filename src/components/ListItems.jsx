import React from "react";
import styles from "./ListItems.module.css";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ListItems = ({ todoList, isActive, changeStatus }) => {


  return (
    <ul className={styles.list__container}>
      {todoList.map((todoItem) => (
        <li
          key={uuidv4()}
          className={
            isActive ? styles.list__item_active : styles.list__item_inactive
          }
        >
          {todoItem.todoText}
          <button onClick={() => changeStatus(todoItem, "changeActive")}>{isActive ? "Done" : "Restore"}</button>
          <button onClick={() => changeStatus(todoItem, "delete")}><FontAwesomeIcon icon={faTrash}/></button>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;

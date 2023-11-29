import React from "react";
import styles from "./ListItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleCheck,
  faTrashArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const ListItems = ({ todoList, isActive, changeStatus }) => {
  return (
    <ul className={styles.list__container}>
      {todoList.map((todoItem) => (
        <li
          key={todoItem.id}
          className={
            isActive ? styles.list__item_active : styles.list__item_inactive
          }
        >
          {todoItem.todoText}
          <div className={styles.button__container}>
            <button
              onClick={() => changeStatus(todoItem, "changeActive")}
              className={styles.button}
            >
              {isActive ? (
                <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              ) : (
                <FontAwesomeIcon icon={faTrashArrowUp} size="xl" />
              )}
            </button>
            <button
              onClick={() => changeStatus(todoItem, "delete")}
              className={styles.button}
            >
              <FontAwesomeIcon icon={faTrash} size="xl" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;

import React from "react";
import styles from "./List.module.css";
import ListItems from "./ListItems";
import { count } from "firebase/firestore";

const List = ({ listOfTodos, onChangeStatus }) => {

  const activeTodosList = listOfTodos.filter((todoItem) => todoItem.active === true);
  const inactiveTodosList = listOfTodos.filter((todoItem) => todoItem.active === false);

  const handleChangeStatus = (todoItem, actionToExecute) => {
    onChangeStatus(todoItem, actionToExecute);
  }

  const countTodos = (countProperty) => {
    const arr = listOfTodos.filter(item => item.active == countProperty);
    return arr.length;
  }


  return (
    <section className={styles.list_wrapper}>
      <h3>Active {countTodos(true)}:</h3>
      <ListItems todoList={activeTodosList} isActive={true} changeStatus={handleChangeStatus}/>
      <h3>Done {countTodos(false)}:</h3>
      <ListItems todoList={inactiveTodosList} isActive={false} changeStatus={handleChangeStatus} />
    </section>
  );
};

export default List;

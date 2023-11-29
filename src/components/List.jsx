import React from "react";
import styles from "./List.module.css";
import ListItems from "./ListItems";

const List = ({ listOfTodos, onChangeStatus }) => {

  const activeTodosList = listOfTodos.filter((todoItem) => todoItem.active === true);
  const inactiveTodosList = listOfTodos.filter((todoItem) => todoItem.active === false);

  const handleChangeStatus = (todoItem, actionToExecute) => {
    onChangeStatus(todoItem, actionToExecute);
  }
  return (
    <section className={styles.list_wrapper}>
      <h3>Active:</h3>
      <ListItems todoList={activeTodosList} isActive={true} changeStatus={handleChangeStatus}/>
      <h3>Done:</h3>
      <ListItems todoList={inactiveTodosList} isActive={false} changeStatus={handleChangeStatus} />
    </section>
  );
};

export default List;

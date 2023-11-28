import React from "react";
import styles from "./List.module.css";
import ActiveList from "./ActiveList";
import InactiveList from "./InactiveList";

const List = ({ listOfTodos }) => {

  const activeTodosList = listOfTodos.filter((todoItem) => todoItem.active === true);
  const inactiveTodosList = listOfTodos.filter((todoItem) => todoItem.active === false);
  return (
    <section className={styles.list_wrapper}>
      <ActiveList activeTodos={activeTodosList} />
      <InactiveList inactiveTodos={inactiveTodosList} />
    </section>
  );
};

export default List;

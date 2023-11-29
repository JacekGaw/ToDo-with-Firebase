import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      todoText: "Initial Todo",
      active: true,
    },
    {
      todoText: "Initial done second",
      active: false,
    },
  ]);

  const handleAddTodo = (inputText) => {
    setTodoList((prevTodoList) => {
      return [
        {
          todoText: inputText,
          active: true,
        },
        ...prevTodoList,
      ];
    });
  };

  const handleChangeStatus = (todoItem, actionToExecute) => {
    if (actionToExecute === "changeActive") {
      setTodoList((prevState) => {
        const newState = prevState.filter((item) => {
          return item.todoText !== todoItem.todoText;
        });
        const rev = !todoItem.active;
        return todoItem.active
          ? [{ todoText: todoItem.todoText, active: rev }, ...newState]
          : [...newState, { todoText: todoItem.todoText, active: rev }];
      });
    } else if (actionToExecute === "delete") {
      setTodoList((prevState) => {
        const newState = prevState.filter((item) => {
          return item.todoText !== todoItem.todoText;
        });
        return newState;
      });
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main_container}>
        <Header />
        <Form onAddTodo={handleAddTodo} />
        <List listOfTodos={todoList} onChangeStatus={handleChangeStatus} />
      </main>
    </div>
  );
};

export default App;

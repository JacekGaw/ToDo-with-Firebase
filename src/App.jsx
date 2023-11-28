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

  return (
    <div className={styles.container}>
      <main className={styles.main_container}>
        <Header />
        <Form onAddTodo={handleAddTodo} />
        <List listOfTodos={todoList} />
      </main>
    </div>
  );
};

export default App;

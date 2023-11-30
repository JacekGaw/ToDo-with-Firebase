import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Deleters from "./components/Deleters";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  serverTimestamp,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodoList(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const handleAddTodo = async (inputText) => {
    // setTodoList((prevTodoList) => {
    //   return [
    //     {
    //       todoText: inputText,
    //       active: true,
    //     },
    //     ...prevTodoList,
    //   ];
    // });
    const timestamp = serverTimestamp();
    await addDoc(collection(db, "todos"), {
      todoText: inputText,
      active: true,
      timestamp: timestamp,
    });
  };
  // THIS CODE WORKS ONLY FOR LOCAL TODO APP
  // const handleChangeStatus = (todoItem, actionToExecute) => {
  //   if (actionToExecute === "changeActive") {
  //     setTodoList((prevState) => {
  //       const newState = prevState.filter((item) => {
  //         return item.todoText !== todoItem.todoText;
  //       });
  //       const rev = !todoItem.active;
  //       return todoItem.active
  //         ? [{ todoText: todoItem.todoText, active: rev }, ...newState]
  //         : [...newState, { todoText: todoItem.todoText, active: rev }];
  //     });
  //   } else if (actionToExecute === "delete") {
  //     setTodoList((prevState) => {
  //       const newState = prevState.filter((item) => {
  //         return item.todoText !== todoItem.todoText;
  //       });
  //       return newState;
  //     });
  //   }
  // };
  const handleChangeStatus = async (todoItem, actionToExecute) => {
    if (actionToExecute === "changeActive") {
      const timestamp = serverTimestamp();
      await updateDoc(doc(db, "todos", todoItem.id), {
        active: !todoItem.active,
        timestamp: timestamp,
      });
    } else if (actionToExecute === "delete") {
      await deleteDoc(doc(db, "todos", todoItem.id));
    }
  };

  const deleteList = (method) => {
    const arr = method;
    arr.forEach((item) => {
      deleteDoc(doc(db, "todos", item.id));
    });
    setTodoList(arr);
  };

  const handleDeleteList = (whatToDelete) => {
    if (whatToDelete === "all") {
      deleteList([...todoList]);
    } else if (whatToDelete === "active") {
      deleteList(todoList.filter((item) => item.active === true));
    } else if (whatToDelete === "done") {
      deleteList(todoList.filter((item) => item.active === false));
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main_container}>
        <Header />
        <Form onAddTodo={handleAddTodo} />
        <Deleters onDeleteList={handleDeleteList} />
        <List listOfTodos={todoList} onChangeStatus={handleChangeStatus} />
      </main>
    </div>
  );
};

export default App;

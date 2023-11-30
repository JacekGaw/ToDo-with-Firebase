import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ onAddTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const clickAdd = () => {
    if (inputText.length > 0) {
      onAddTodo(inputText);
    }
    setInputText("");
  };
  const handleEnter = (e) => {
    if(e.key === 'Enter' && inputText.length > 0){
      onAddTodo(inputText);
      setInputText("");
    }
  }
  
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={inputText}
        placeholder="Type Todo"
        onChange={handleChange}
        onKeyDown={handleEnter}
        autoFocus
      />
      <button className={styles.button} onClick={clickAdd}>
        Add Todo
      </button>
    </div>
  );
};

export default Form;

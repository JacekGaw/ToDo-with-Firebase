import React, {useState} from "react";
import styles from "./Form.module.css";

const Form = ({onAddTodo}) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }

  return (
    <div className={styles.container}>
      <input className={styles.input}  value={inputText} placeholder="Type Todo" onChange={handleChange}/>
      <button className={styles.button} onClick={() => onAddTodo(inputText)}>Add Todo</button>
    </div>
  );
};

export default Form;

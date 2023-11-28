import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" value="Todo text" />
      <button className={styles.button}>Add Todo</button>
    </div>
  );
};

export default Form;

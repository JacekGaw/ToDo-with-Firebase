import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main_container}>
        <Header />
        <Form />
      </main>
    </div>
  );
};

export default App;

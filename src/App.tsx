import {useState} from "react";
import {Header} from "./components/Header";
import {NewTodo} from "./components/NewTodo";
import {Info} from "./components/Info";

import "./global.css";

import styles from "./App.module.css";
import {Todo} from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <NewTodo />
        <div className={styles.infoWrapper}>
          <Info info="Tarefas Criadas" count="5" isPurple={false} />
          <Info info="Concluídas" count="2 de 5" isPurple />
        </div>

        <ul>
          <Todo checked={true} id="1" task="Estilizar essa div!" />
          <Todo checked={false} id="2" task="Estilizar essa div!" />
          <Todo checked={true} id="3" task="Estilizar essa div!" />
          <Todo checked={false} id="4" task="Estilizar essa div!" />
        </ul>
      </div>
    </div>
  );
}

export default App;

//To do:
// Criar um componente Info e abastrair os atuais Tasks done e tasks created nesse mesmo componente.

// Criar um componente

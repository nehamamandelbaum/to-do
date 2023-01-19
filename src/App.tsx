import {useState} from "react";
import {Header} from "./components/Header";
import {NewTodo} from "./components/NewTodo";
import {Info} from "./components/Info";

import "./global.css";

import styles from "./App.module.css";
import {Todo} from "./components/Todo";

function App() {
  interface Todo {
    id: string;
    task: string;
    checked: boolean;
  }

  const [todos, setTodos] = useState([
    {id: "1", task: "Fazer isso funcionar!", checked: false},
    {id: "2", task: "Fazer a lógica dos todos", checked: true},
  ]);

  function handleCreateNewTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <NewTodo handleCreateNewTodo={handleCreateNewTodo} />
        <div className={styles.infoWrapper}>
          <Info
            info="Tarefas Criadas"
            count={`${todos.length}`}
            isPurple={false}
          />
          <Info info="Concluídas" count="2 de 5" isPurple />
        </div>

        <ul>
          {todos.map((todo) => (
            <Todo checked={todo.checked} id={todo.id} task={todo.task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

//To do:
// Criar um componente Info e abastrair os atuais Tasks done e tasks created nesse mesmo componente.

// Criar um componente

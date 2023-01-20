import {useState} from "react";
import {Header} from "./components/Header";
import {NewTodo, Todo as InterfaceTodo} from "./components/NewTodo";
import {Info} from "./components/Info";

import "./global.css";

import styles from "./App.module.css";
import {Todo} from "./components/Todo";
//Todo:
//Fazer css para lista vazia
//checar todo -> Fazer usando index
function App() {
  const [todos, setTodos] = useState<InterfaceTodo[]>([]);

  function handleCreateNewTodo(todo: InterfaceTodo) {
    setTodos([...todos, todo]);
  }

  function handleCheckTodo(id: string) {
    let newTodos = [...todos];

    let todoToCheckIndex = todos.findIndex((todo) => todo.id === id);

    newTodos[todoToCheckIndex] = {
      id: id,
      checked: !todos[todoToCheckIndex].checked,
      task: todos[todoToCheckIndex].task,
    };

    setTodos(newTodos);
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
            <Todo
              checked={todo.checked}
              id={todo.id}
              task={todo.task}
              handleCheckTodo={handleCheckTodo}
            />
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

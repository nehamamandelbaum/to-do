import {useState} from "react";
import {Header} from "./components/Header";
import {NewTodo, Todo as InterfaceTodo} from "./components/NewTodo";
import {Info} from "./components/Info";

import "./global.css";

import styles from "./App.module.css";
import {Todo} from "./components/Todo";
import {EmptyTodos} from "./components/EmptyTodos";
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

  function handleDeleteTodo(id: string) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  let completedTasks = todos.filter((todo) => todo.checked).length;

  let countInfo = `${completedTasks} de ${todos.length}`;
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
          <Info info="Concluídas" count={countInfo} isPurple />
        </div>

        <ul>
          {todos.length === 0 ? (
            <EmptyTodos />
          ) : (
            todos.map((todo) => (
              <Todo
                key={todo.id}
                checked={todo.checked}
                id={todo.id}
                task={todo.task}
                handleCheckTodo={handleCheckTodo}
                handleDeleteTodo={handleDeleteTodo}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;

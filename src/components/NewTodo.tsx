import {PlusCircle} from "phosphor-react";
import {FormEvent, useState} from "react";
import styles from "./NewTodo.module.css";
import {ChangeEvent} from "react";
import {v4 as uuidv4} from "uuid";

interface Todo {
  id: string;
  task: string;
  checked: boolean;
}

interface NewTodoProps {
  handleCreateNewTodo: (todo: Todo) => void;
}

export function NewTodo({handleCreateNewTodo}: NewTodoProps) {
  const [newTodoText, setNewTodoText] = useState("");

  function handleCreateNewTodoInput(event: FormEvent) {
    event.preventDefault();

    setNewTodoText("");
    let newTodo: Todo = {
      id: uuidv4(),
      task: newTodoText,
      checked: false,
    };
    handleCreateNewTodo(newTodo);
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoText(event.target.value);
  }

  return (
    <form className={styles.newTodoWrapper} onSubmit={handleCreateNewTodoInput}>
      <input
        value={newTodoText}
        placeholder="Adicione uma nova tarefa"
        className={styles.newTodoInput}
        onChange={handleNewTodoChange}
      ></input>
      <button type="submit" className={styles.newTodoButton}>
        Criar
        <PlusCircle />
      </button>
    </form>
  );
}

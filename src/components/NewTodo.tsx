import {PlusCircle} from "phosphor-react";
import styles from "./NewTodo.module.css";

export function NewTodo() {
  return (
    <div className={styles.newTodoWrapper}>
      <input
        placeholder="Adicione uma nova tarefa"
        className={styles.newTodoInput}
      ></input>
      <button className={styles.newTodoButton}>
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}

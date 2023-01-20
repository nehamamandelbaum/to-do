import styles from "./Todo.module.css";
import {Trash, Check} from "phosphor-react";

interface TodoProps {
  checked: boolean;
  id: string;
  task: string;
  handleCheckTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}
export function Todo({
  checked,
  id,
  task,
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) {
  return (
    <li className={checked ? styles.todoWrapperChecked : styles.todoWrapper}>
      <button
        className={checked ? styles.todoButtonChecked : styles.todoButton}
        onClick={() => handleCheckTodo(id)}
      >
        {checked && <Check />}
      </button>
      <span className={styles.task}>{task}</span>

      <button
        className={styles.trashButton}
        onClick={() => handleDeleteTodo(id)}
      >
        <Trash />
      </button>
    </li>
  );
}

import styles from "./Todo.module.css";
import {Trash, Check} from "phosphor-react";

interface TodoProps {
  checked: boolean;
  id: string;
  task: string;
}
export function Todo({checked, id, task}: TodoProps) {
  return (
    <li className={styles.todoWrapper}>
      <button
        className={checked ? styles.todoButtonChecked : styles.todoButton}
      >
        {checked && <Check />}
      </button>
      <span className={styles.task}>{task}</span>

      <Trash />
    </li>
  );
}

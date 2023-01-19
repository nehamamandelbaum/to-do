import styles from "./Todo.module.css";
import {Trash, Check} from "phosphor-react";

interface TodoProps {
  checked: boolean;
  id: string;
  task: string;
}
export function Todo({checked, id, task}: TodoProps) {
  return (
    <li className={checked ? styles.todoWrapperChecked : styles.todoWrapper}>
      <button
        className={checked ? styles.todoButtonChecked : styles.todoButton}
      >
        {checked && <Check />}
      </button>
      <span className={styles.task}>{task}</span>

      <button className={styles.trashButton}>
        <Trash />
      </button>
    </li>
  );
}

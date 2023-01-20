import {ClipboardText} from "phosphor-react";

import styles from "./EmptyTodos.module.css";

export function EmptyTodos() {
  return (
    <div className={styles.emptyTodoWrapper}>
      <ClipboardText size={56} />
      <span className={styles.highlight}>
        Você ainda não tem tarefas cadastradas
      </span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}

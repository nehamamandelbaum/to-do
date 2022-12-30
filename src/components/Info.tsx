import styles from "./Info.module.css";

interface InfoProps {
  info: string;
  count: string;
  isPurple: boolean;
}

export function Info({info, count, isPurple = false}: InfoProps) {
  return (
    <div className={styles.infoWrapper}>
      <span className={isPurple ? styles.infoPurple : styles.info}>{info}</span>
      <span className={styles.infoCounter}>{count}</span>
    </div>
  );
}

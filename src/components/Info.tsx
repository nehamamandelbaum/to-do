import styles from "./Info.module.css";

interface InfoProps {
  info: string;
  count: string;
  isPurple: boolean;
}

export function Info({info, count, isPurple = false}: InfoProps) {
  return (
    <div className={styles.infoWrapper}>
      <span
        className={`${styles.info} ${
          isPurple ? styles.infoPurple : styles.infoBlue
        }`}
      >
        {info}
      </span>
      <span className={styles.infoCounter}>{count}</span>
    </div>
  );
}

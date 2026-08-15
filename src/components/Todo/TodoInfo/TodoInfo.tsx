import styles from "./TodoInfo.module.css";

export default function TodoInfo() {
  return (
    <div className={styles.info}>
      <div className={styles.totalTasks}>
        {"Total tasks: "}
        <span>{0}</span>
      </div>

      <button
        type="button"
        className={styles.deleteAllButton}
      >
        {"Delete all"}
      </button>
    </div>
  );
}
